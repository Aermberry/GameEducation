class mouseScene extends eui.Component implements eui.UIComponent {

	private plantMask: egret.tween.TweenGroup;
	private endMaskRectAnim: egret.tween.TweenGroup;
	private tailWiggle: egret.tween.TweenGroup;
	private invitationCard: egret.tween.TweenGroup;
	private lionDialog: egret.tween.TweenGroup;
	private rabbitDialogBox: egret.tween.TweenGroup;
	private bubleGrad: egret.tween.TweenGroup;
	private changCard: egret.tween.TweenGroup;
	private happyAnim: egret.tween.TweenGroup;
	private tipsComponent: tipsComponent;
	private achieveComponent: achieveComponent;

	private bulbGroup: eui.Group;
	private invitationGroup: eui.Group;
	private achieveGroup: eui.Group;
	private lionDialogGroup: eui.Group;
	private ratDialogGroup: eui.Group;
	private editGroup: eui.Group;
	private lionSmellGroup: eui.Group;
	private bulbComponentGroup: eui.Group;

	private tipsBulbComponent: bulbComponent;
	private bulbComponent: bulbComponent;
	private resultAchieveComponent: achieveComponent;

	private circleLeftRect: eui.Rect;
	private circleRightRect: eui.Rect;
	private plantMaskRect: eui.Rect;
	private endMaskRect: eui.Rect;
	private firstBgRect: eui.Rect
	private secondBgRect: eui.Rect
	private thirdBgRect: eui.Rect

	private lion: eui.Image;
	private lion_active: eui.Image;
	private ratImage: eui.Image;

	private Textboxes:eui.Label;

	private editableText_first: eui.EditableText;
	private editableText_second: eui.EditableText;
	private editableText_fourth: eui.EditableText;
	private editableText_fifth: eui.EditableText;
	private editableText_sixth: eui.EditableText;
	private editableText_seventh: eui.EditableText;

	private optionsScene: optionsScene;

	public constructor(/*optionsScene:optionsScene*/) {
		super();
		// this.optionsScene=optionsScene;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();

		mouse.enable(this.stage);
		mouse.setButtonMode(this.bulbGroup, true);
		// RES.getRes("sound 24_mp3").play(0, -1)
		this.judgmentstypes();
		optionsScene.getOptionInstance.onPlayVoice('sound 24_mp3')
		this.playAnim();
		this.bulbComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hover, this);
		this.bulbComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.normal, this);
		this.bulbComponent.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.active, this);
		this.bulbComponent.addEventListener(egret.TouchEvent.TOUCH_END, this.tips, this);
		this.achieveGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.result, this);
	}

	//文字類型判斷
	private judgmentstypes():void {
		if(optionsScene.getOptionInstance.getWords){
			this.Textboxes.text='你們要來參加秋季嘉年華 !\n日期：十一月九日\n時間：下午六時'
		}
	}

	private async hover(): Promise<void> {
		this.bulbComponent.currentState = "hover";
	}

	private async normal(): Promise<void> {
		await this.enableMouse();
		this.bulbComponent.currentState = "normal"
	}

	private async active(): Promise<void> {
		await this.disableMouse();
		this.bulbComponent.currentState = "active";
	}

	private async disableMouse(): Promise<void> {
		this.bulbComponentGroup.removeEventListener(mouse.MouseEvent.MOUSE_OVER, this.hover, this);
	}
	private enableMouse(): void {
		this.bulbComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hover, this);
	}

	private async playAnim(): Promise<void> {
		this.plantMask.play(0);
		this.tailWiggle.play(0);
		await lzlib.ThreadUtility.sleep(2500);
		await this.invitationCard.playOnceAsync().then(() => {
			this.plantMaskRect.visible = false;
			this.lionDialog.playOnceAsync();
		});
		await lzlib.ThreadUtility.sleep(2000);
		this.lionDialogText(lionDialogText.ratText_a);
		this.playVoice(lionDialogVoice.lionVoice_ratA).then(() => {
			return new Promise((resolve) => {
				this.rabbitDialogBox.play();
				this.rabbitDialogBox.once(egret.Event.COMPLETE, resolve, this);
			}).then(() => {
				(this.ratDialogGroup.$children[3] as eui.Group).visible = true;
				this.playVoice(animalDialogVoice.ratVoice_a);
				setTimeout(() => {
					this.circleLeftRect.visible = true;
					this.circleRightRect.visible = true;
				}, 4000)
			})
		})

		await lzlib.ThreadUtility.sleep(16000).then(() => {
			this.lion.source = "lione_Silly_png";
			this.lionDialogText(lionDialogText.ratText_b);
		});

		await this.playVoice(lionDialogVoice.lionVoice_ratB).then(() => {
			this.lionDialogText(lionDialogText.ratText_c)
			this.playVoice(lionDialogVoice.lionVoice_ratC);
			this.circleLeftRect.visible = false
			this.circleRightRect.visible = false;
		});

		await lzlib.ThreadUtility.sleep(3000);
		(this.ratDialogGroup.$children[3] as eui.Group).visible = false;
		(this.ratDialogGroup.$children[4] as eui.Group).visible = true;
		await this.changCard.playOnceAsync().then(() => {
			(this.invitationGroup.$children[1] as eui.Label).y = 177;
			(this.invitationGroup.$children[3] as eui.Label).y = 675;
			(this.invitationGroup.$children[2] as eui.Group).visible = true;
		});

		await this.playVoice(animalDialogVoice.ratVoice_b);
		optionsScene.getOptionInstance.playVoice("sound 490_mp3");
		egret.Tween.get(this.lionDialogGroup).to({ alpha: 0 }, 1000).call(() => {
			egret.Tween.get(this.bulbGroup).to({ alpha: 1 }, 1000);
			egret.Tween.get(this.achieveGroup).to({ alpha: 1 }, 1000);
		});
		this.editableText_first.touchEnabled = true;
		this.editableText_second.touchEnabled = true;
		this.editableText_fourth.touchEnabled = true;
		this.editableText_fifth.touchEnabled = true;
		this.editableText_sixth.touchEnabled = true;
		this.editableText_seventh.touchEnabled = true;
	}

	//lion動態文本
	private lionDialogText(text: lionDialogText): void {
		let lionLabel = this.lionDialogGroup.$children[2] as eui.Label;
		lionLabel.text = text.toString();
	}

	//語音播放
	private async playVoice(voice: lionDialogVoice | animalDialogVoice): Promise<void> {
		let sound = optionsScene.getOptionInstance.playVoice(voice.toString())
		return sound;
	}

	private tips(): void {
		this.normal();
		this.tipsComponent = new tipsComponent(this, tipsVoices.ratTip.toString());
		this.tipsComponent.currentState = "rat"
		this.addChild(this.tipsComponent);
		this.tipsComponent.playAnim();
	}

	//驗證模塊
	private confirmMessage(): boolean {
		var children = this.editGroup.$children;
		let result = this.editableText_first.text == "地" && this.editableText_second.text == "點" && this.editableText_fourth.text == "森" && this.editableText_fifth.text == "林" && this.editableText_sixth.text == "果" && this.editableText_seventh.text == "園";
		return result
	}

	//判斷模塊
	private result(): void {
		this.achieveComponent = new achieveComponent(this.optionsScene, this);
		let isConfirm = this.confirmMessage();
		if (isConfirm) {
			egret.Tween.get(this.ratDialogGroup).to({ alpha: 0 }, 1000).call(() => {
				egret.Tween.get(this.bulbGroup).to({ alpha: 0 }, 1000);
				egret.Tween.get(this.achieveGroup).to({ alpha: 0 }, 1000);
			});
			this.editableText_first.touchEnabled = false;
			this.editableText_second.touchEnabled = false;
			this.editableText_fourth.touchEnabled = false;
			this.editableText_fifth.touchEnabled = false;
			this.editableText_sixth.touchEnabled = false;
			this.editableText_seventh.touchEnabled = false;
			setTimeout(() => {
				this.congratulateAnim();
			}, 3000)

		}
		else {
			this.bulbGroup.visible = false;
			this.achieveGroup.visible = false;
			this.ratDialogGroup.$children[4].visible = false
			this.ratDialogGroup.$children[2].visible = true;
			setTimeout(() => {
				this.ratDialogGroup.$children[2].visible = false;
				this.ratDialogGroup.$children[4].visible = true;
				this.bulbGroup.visible = true;
				this.achieveGroup.visible = true;
			}, 5000)
		}
	}

	//第二部分動畫
	private async congratulateAnim(): Promise<void> {
		this.lion_active.visible = false;
		this.lionSmellGroup.visible = true;
		this.tailWiggle.play(0);
		this.happyAnim.play(0);
		await egret.Tween.get(this.lionDialogGroup).to({ alpha: 1 }, 1000);
		this.lionDialogText(lionDialogText.rabbitText_d);
		await this.playVoice(lionDialogVoice.lionVoice_d).then(() => {
			egret.Tween.get(this.ratDialogGroup).to({ alpha: 1 }, 1000);
			console.log("here")
		})
		this.ratDialogGroup.$children[4].visible = false;
		this.ratDialogGroup.$children[5].visible = true;
		this.ratImage.source = "rat_happy_png"
		this.playVoice(animalDialogVoice.ratVoice_c);
		await lzlib.ThreadUtility.sleep(5000);
		this.endMaskRect.visible = true;
		await this.endMaskRectAnim.playOnceAsync();
		await this.gohome()
	}

	private gohome(): void {
		optionsScene.getOptionInstance.onPauseVoice()
		this.optionsScene = new optionsScene();
		optionsScene.getOptionInstance.getWords?this.optionsScene.currentState = "sheepCH":this.optionsScene.currentState="sheep";
		this.optionsScene.statueIndex();
		Main.instance.gotoScene(this.optionsScene)

	}

}