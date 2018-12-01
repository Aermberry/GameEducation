class giraffeScene extends eui.Component implements eui.UIComponent {
	
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
	private achieveGroup: eui.Group;
	private lionDialogGroup: eui.Group;
	private giraffeDialogGroup: eui.Group;
	private editGroup: eui.Group;
	private lionSmellGroup: eui.Group;
	private bulbComponentGroup: eui.Group;

	private tipsBulbComponent: bulbComponent;
	private bulbComponent: bulbComponent;
	private resultAchieveComponent: achieveComponent;

	private circleRect: eui.Rect;
	private plantMaskRect: eui.Rect;
	private endMaskRect: eui.Rect;
	private firstBgRect: eui.Rect
	private secondBgRect: eui.Rect
	private thirdBgRect: eui.Rect

	private lion: eui.Image;
	private lion_active: eui.Image;
	private giraffe:eui.Image;

	private editableText_first: eui.EditableText;
	private editableText_second: eui.EditableText;
	private editableText_third: eui.EditableText;
	private editableText_fourth: eui.EditableText;
	private editableText_fifth: eui.EditableText;
	private editableText_sixth: eui.EditableText;
	private editableText_seventh: eui.EditableText;
	private editableText_eightth: eui.EditableText;
	private editableText_nineth: eui.EditableText;

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
		RES.getRes("sound 24_mp3").play(0, -1)
		this.playAnim();
		this.bulbComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hover, this);
		this.bulbComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.normal, this);
		this.bulbComponent.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.active, this);
		this.bulbComponent.addEventListener(egret.TouchEvent.TOUCH_END, this.tips, this);
		this.achieveGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.result, this);
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
			this.lionDialog.playOnceAsync();
		});
		await lzlib.ThreadUtility.sleep(2000);
		this.lionDialogText(lionDialogText.giraffeText_a);
		this.playVoice(lionDialogVoice.lionVoice_giraffeA).then(() => {
			return new Promise((resolve) => {
				this.rabbitDialogBox.play();
				this.rabbitDialogBox.once(egret.Event.COMPLETE, resolve, this);
			}).then(() => {
				(this.giraffeDialogGroup.$children[3] as eui.Group).visible = true;
				this.playVoice(animalDialogVoice.giraffe_a);
				setTimeout(() => {
					this.circleRect.visible = true;
				}, 4000)
			})
		})

		await lzlib.ThreadUtility.sleep(14000).then(() => {
			this.lion.source = "lione_Silly_png";
			this.lionDialogText(lionDialogText.giraffeText_b);
			setTimeout(() => {
				this.lionDialogText(lionDialogText.giraffeText_c)
			},5800)
		});

		await this.changCard.playOnceAsync().then(()=>{
			this.editGroup.visible=true;
		});

		await this.playVoice(lionDialogVoice.lionVoice_giraffeB);

		(this.giraffeDialogGroup.$children[3] as eui.Group).visible = false;
		(this.giraffeDialogGroup.$children[4] as eui.Group).visible = true;
		await this.playVoice(animalDialogVoice.giraffe_b);
		egret.Tween.get(this.lionDialogGroup).to({ alpha: 0 }, 1000).call(() => {
			egret.Tween.get(this.bulbGroup).to({ alpha: 1 }, 1000);
			egret.Tween.get(this.achieveGroup).to({ alpha: 1 }, 1000);
		});
	}

	//lion動態文本
	private lionDialogText(text: lionDialogText): void {
		let lionLabel = this.lionDialogGroup.$children[2] as eui.Label;
		lionLabel.text = text.toString();
	}

	//語音播放
	private async playVoice(voice: lionDialogVoice | animalDialogVoice): Promise<void> {
		let sound = lzlib.SoundUtility.playSound(voice.toString())
		return sound;
	}

	private tips(): void {
		this.normal();
		this.tipsComponent = new tipsComponent(this, tipsVoices.snakeTip.toString());
		this.tipsComponent.currentState = "giraffe"
		this.addChild(this.tipsComponent);
		this.tipsComponent.playAnim();
	}

	//驗證模塊
	private confirmMessage(): boolean {
		var children = this.editGroup.$children;
		let result = this.editableText_first.text == "大" && this.editableText_second.text == "王" && this.editableText_third.text == "5"&&this.editableText_fourth.text=="年"&&this.editableText_fifth.text=="1"&&this.editableText_sixth.text=="1"&&this.editableText_seventh.text=="月"&&this.editableText_eightth.text=="3"&&this.editableText_nineth.text=="日";
		return result
	}

	//判斷模塊
	private result(): void {
		this.achieveComponent = new achieveComponent(this.optionsScene, this);
		let isConfirm = this.confirmMessage();
		if (isConfirm) {
			egret.Tween.get(this.giraffeDialogGroup).to({ alpha: 0 }, 1000).call(() => {
				egret.Tween.get(this.bulbGroup).to({ alpha: 0 }, 1000);
				egret.Tween.get(this.achieveGroup).to({ alpha: 0 }, 1000);
			});
			this.editableText_first.touchEnabled = false;
			this.editableText_second.touchEnabled = false;
			this.editableText_third.touchEnabled = false;
			setTimeout(() => {
				this.congratulateAnim();
			}, 3000)

		}
		else {
			this.editableText_first.text="";
			this.editableText_second.text="";
			this.editableText_third.text="";
			this.editableText_fourth.text="";
			this.editableText_fifth.text="";
			this.editableText_sixth.text="";
			this.editableText_seventh.text="";
			this.editableText_nineth.text="";
			this.bulbGroup.visible = false;
			this.achieveGroup.visible = false;
			this.giraffeDialogGroup.$children[4].visible = false
			this.giraffeDialogGroup.$children[2].visible = true;
			setTimeout(() => {
				this.giraffeDialogGroup.$children[2].visible = false;
				this.giraffeDialogGroup.$children[4].visible = true;
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
			egret.Tween.get(this.giraffeDialogGroup).to({ alpha: 1 }, 1000);
		})
		this.giraffeDialogGroup.$children[4].visible = false;
		this.giraffeDialogGroup.$children[6].visible = true;
		this.playVoice(animalDialogVoice.giraffe_c);
		await lzlib.ThreadUtility.sleep(5000);
		this.endMaskRect.visible = true;
		await this.endMaskRectAnim.playOnceAsync();
	}
}