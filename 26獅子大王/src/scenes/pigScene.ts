class pigScene extends eui.Component implements eui.UIComponent {

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
	private flusteredComponent: flustered;

	private bulbGroup: eui.Group;
	private achieveGroup: eui.Group;
	private lionDialogGroup: eui.Group;
	private pigDialogGroup: eui.Group;
	private editGroup: eui.Group;
	private lionSmellGroup: eui.Group;
	private bulbComponentGroup: eui.Group;
	private invitationGroup: eui.Group;

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
	private pigImage: eui.Image

	private editableText_first: eui.EditableText;
	private editableText_second: eui.EditableText;
	private editableText_fourth: eui.EditableText;
	private editableText_fifth: eui.EditableText;
	private editableText_sixth: eui.EditableText;
	private editableText_seventh: eui.EditableText;

	private Textboxes: eui.Label;
	private optionsScene: GameStart.optionsScene;

	private isMessageFormat: boolean = true;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();

		mouse.enable(this.stage);
		mouse.setButtonMode(this.bulbGroup, true);
		// RES.getRes("sound 24_mp3").play(0, -1)
		GameStart.optionsScene.getOptionInstance.onPlayVoice('sound 24_mp3')
		this.judgmentstypes();
		this.playAnim();
		this.bulbComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hover, this);
		this.bulbComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.normal, this);
		this.bulbComponent.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.active, this);
		this.bulbComponent.addEventListener(egret.TouchEvent.TOUCH_END, this.tips, this);
		this.achieveGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.result, this);
	}

	//文字類型判斷
	private judgmentstypes(): void {
		if (GameStart.optionsScene.getOptionInstance.getWords) {
			this.Textboxes.text = '日期：十一月九日\n希望你能出席，不見不散！'
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
		this.lionDialogText(lionDialogText.pigText_a);
		this.playVoice(lionDialogVoice.lionVoice_pigA).then(() => {
			return new Promise((resolve) => {
				this.rabbitDialogBox.play();
				this.rabbitDialogBox.once(egret.Event.COMPLETE, resolve, this);
			}).then(() => {
				(this.pigDialogGroup.$children[3] as eui.Group).visible = true;
				this.playVoice(animalDialogVoice.pigVoice_a);
				setTimeout(() => {
					this.circleRect.visible = true;
				}, 4000)
			})
		})

		await lzlib.ThreadUtility.sleep(15000).then(() => {
			this.lion.source = "lione_Silly_png";
			this.lionDialogText(lionDialogText.pigText_b);
		});

		await this.playVoice(lionDialogVoice.lionVoice_pigB).then(() => {
			this.lionDialogTextFlow();
			this.playVoice(lionDialogVoice.lionVoice_pigC);
			this.circleRect.visible = false;
		});
		await this.changCard.playOnceAsync().then(() => {
			(this.invitationGroup.$children[2] as eui.Label).lineSpacing = 160;
			(this.invitationGroup.$children[2] as eui.Label).height = 410;
			(this.invitationGroup.$children[2] as eui.Label).y = 281;
			this.invitationGroup.$children[3].visible = true;
		});
		await lzlib.ThreadUtility.sleep(5000);
		(this.pigDialogGroup.$children[3] as eui.Group).visible = false;
		(this.pigDialogGroup.$children[4] as eui.Group).visible = true;
		await this.playVoice(animalDialogVoice.pigVoice_b);
		GameStart.optionsScene.getOptionInstance.playVoice("sound 4 (D10.mp3)_mp3");
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

	private lionDialogTextFlow(): void {
		let lionLabel = this.lionDialogGroup.$children[2] as eui.Label;
		lionLabel.textFlow = [
			{ text: lionDialogText.pigText_c.toString(), style: { size: 50, textColor: 0x000000 } },
			{ text: lionDialogText.pigText_d.toString(), style: { size: 50, textColor: 0xa00000 } },
			{ text: lionDialogText.pigText_e.toString(), style: { size: 50, textColor: 0x000000 } },
			{ text: lionDialogText.pigText_f.toString(), style: { size: 50, textColor: 0x000000 } }
		]
	}

	//語音播放
	private async playVoice(voice: lionDialogVoice | animalDialogVoice): Promise<void> {
		let sound = GameStart.optionsScene.getOptionInstance.playVoice(voice.toString())
		return sound;
	}

	private tips(): void {
		this.normal();
		this.tipsComponent = new tipsComponent(this, tipsVoices.pigTip.toString());
		this.tipsComponent.currentState = "pig"
		this.addChild(this.tipsComponent);
		this.tipsComponent.playAnim();
	}

	//驗證模塊
	private confirmMessage(): boolean {

		let result: boolean = true;

		let dataResult = this.editableText_first.text + this.editableText_second.text + "：" + this.editableText_fourth.text + this.editableText_fifth.text + this.editableText_sixth.text + this.editableText_seventh.text;

		if (GameStart.optionsScene.getOptionInstance.getWords) {
			if (dataResult == '時間：下午六時') {
				return result
			}
			else if (dataResult == '時間：下午6時') {
				this.isMessageFormat = true
				return result = false;
			}
		}
		else {
			if (dataResult == '時間：下午6時') {
				return result
			}
			else if (dataResult == '時間：下午六時') {
				this.isMessageFormat = true
				return result = false;
			}
		}

		this.isMessageFormat = false;
		return result = false
	}

	//判斷模塊
	private result(): void {
		this.achieveComponent = new achieveComponent(this.optionsScene, this);
		let isConfirm = this.confirmMessage();
		if (isConfirm) {
			egret.Tween.get(this.pigDialogGroup).to({ alpha: 0 }, 1000).call(() => {
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
			if (this.isMessageFormat) {
				this.changeWord(4, 6)
				GameStart.optionsScene.getOptionInstance.playVoice("sound 10 (D12.mp3)_mp3");
			}
			else {
				this.changeWord();
			}

		}
	}

	private changeWord(textword01: number = 4, textword02: number = 2): void {
		this.bulbGroup.visible = false;
		this.achieveGroup.visible = false;
		this.pigDialogGroup.$children[textword01].visible = false
		this.pigDialogGroup.$children[textword02].visible = true;
		setTimeout(() => {
			this.pigDialogGroup.$children[textword02].visible = false;
			this.pigDialogGroup.$children[textword01].visible = true;
			this.bulbGroup.visible = true;
			this.achieveGroup.visible = true;
		}, 10000)
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
			egret.Tween.get(this.pigDialogGroup).to({ alpha: 1 }, 1000);
		})
		this.pigDialogGroup.$children[4].visible = false;
		this.pigDialogGroup.$children[5].visible = true;
		this.pigImage.source = "pig_happy_png";
		this.flusteredComponent.visible = false;
		this.playVoice(animalDialogVoice.pigVoice_c);
		await lzlib.ThreadUtility.sleep(5000);
		this.endMaskRect.visible = true;
		await this.endMaskRectAnim.playOnceAsync();
		await this.gohome()
	}

	private gohome(): void {
		GameStart.optionsScene.getOptionInstance.onPauseVoice()
		this.optionsScene = new GameStart.optionsScene();
		GameStart.optionsScene.getOptionInstance.getWords ? this.optionsScene.currentState = "ratCH" : this.optionsScene.currentState = "rat";
		this.optionsScene.statueIndex();
		Main.instance.gotoScene(this.optionsScene)
	}
}