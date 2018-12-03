class sheepScene extends eui.Component implements eui.UIComponent {

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
	private stamperGroup: eui.Group;
	private achieveGroup: eui.Group;
	private lionDialogGroup: eui.Group;
	private sheepDialogGroup: eui.Group;
	private editGroup: eui.Group;
	private lionSmellGroup: eui.Group;
	private bulbComponentGroup: eui.Group;
	private stamperComponentGroup:eui.Group

	private tipsBulbComponent: bulbComponent;
	private bulbComponent: bulbComponent;
	private stamperComponent:stampComponent;
	private resultAchieveComponent: achieveComponent;

	private circleRect: eui.Rect;
	private plantMaskRect: eui.Rect;
	private endMaskRect: eui.Rect;
	private firstBgRect: eui.Rect
	private secondBgRect: eui.Rect
	private thirdBgRect: eui.Rect

	private lion: eui.Image;
	private lion_active: eui.Image;
	private sheep:eui.Image;

	private editableText_first: eui.EditableText;
	private editableText_second: eui.EditableText;
	private editableText_third: eui.EditableText;

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

		RES.getRes("sound 24_mp3").play(0, -1)
		this.playAnim();
		this.bulbComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hover, this);
		this.bulbComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.normal, this);
		this.bulbComponent.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.active, this);
		this.bulbComponent.addEventListener(egret.TouchEvent.TOUCH_END, this.tips, this);

		// this.stamperComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.stamperHover, this);
		this.stamperComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.stamperNormal, this);
		// this.stamperComponent.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.stamperActive, this);
		// this.stamperComponent.addEventListener(egret.TouchEvent.TOUCH_END, this.tips, this);
		
	}

	private async hover(): Promise<void> {
		this.bulbComponent.currentState = "hover";
	}
	private async stamperHover(): Promise<void> {
		this.stamperComponent.currentState="hover";
	}

	private async normal(): Promise<void> {
		await this.enableMouse();
		this.bulbComponent.currentState = "normal";

	}
	private async stamperNormal():Promise<void>{
		await this.stamperEnableMouse();
		this.stamperComponent.currentState="normal";
	}

	private async active(): Promise<void> {
		await this.disableMouse();
		this.bulbComponent.currentState = "active";
	}

	private async stamperActive():Promise<void> {
		await this.stamperDisableMouse();
		this.stamperComponent.currentState="active";
	}

	private async disableMouse(): Promise<void> {
		this.bulbComponentGroup.removeEventListener(mouse.MouseEvent.MOUSE_OVER, this.hover, this);
	}
	private async stamperDisableMouse():Promise<void> {
		this.stamperComponentGroup.removeEventListener(mouse.MouseEvent.MOUSE_OVER,this.stamperHover,this);
	}
	private enableMouse(): void {
		this.bulbComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hover, this);
	}

	private  stamperEnableMouse():void {
		this.stamperComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER,this.stamperHover,this);
	}

	private async playAnim(): Promise<void> {
		this.plantMask.play(0);
		this.tailWiggle.play(0);
		await lzlib.ThreadUtility.sleep(2500);
		await this.invitationCard.playOnceAsync().then(() => {
			this.lionDialog.playOnceAsync();
		});
		await lzlib.ThreadUtility.sleep(2000);
		this.lionDialogText(lionDialogText.sheepText_a);
		this.playVoice(lionDialogVoice.lionVoice_sheepA).then(() => {
			return new Promise((resolve) => {
				this.rabbitDialogBox.play();
				this.rabbitDialogBox.once(egret.Event.COMPLETE, resolve, this);
			}).then(() => {
				(this.sheepDialogGroup.$children[3] as eui.Group).visible = true;
				this.playVoice(animalDialogVoice.sheepVoice_a);
				setTimeout(() => {
					(this.sheepDialogGroup.$children[3] as eui.Group).visible = false;
					(this.sheepDialogGroup.$children[4] as eui.Group).visible = true;
				}, 9500)
			})
		})

		await lzlib.ThreadUtility.sleep(20000).then(() => {
			this.lion.source = "lione_Silly_png";
			this.lionDialogText(lionDialogText.sheepText_b);
		});

		await this.playVoice(lionDialogVoice.lionVoice_sheepB).then(() => {
			this.playVoice(animalDialogVoice.sheepVoice_b);
			(this.sheepDialogGroup.$children[4] as eui.Group).visible = false;
			(this.sheepDialogGroup.$children[5] as eui.Group).visible = true;
		});
		this.changCard.playOnceAsync();
		await lzlib.ThreadUtility.sleep(3000);

		egret.Tween.get(this.lionDialogGroup).to({ alpha: 0 }, 1000).call(() => {
			egret.Tween.get(this.bulbGroup).to({ alpha: 1 }, 1000);
			egret.Tween.get(this.stamperGroup).to({ alpha: 1 }, 1000);
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
		this.tipsComponent = new tipsComponent(this, tipsVoices.sheepTip.toString());
		this.tipsComponent.currentState = "sheep"
		this.addChild(this.tipsComponent);
		this.tipsComponent.playAnim();
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
			egret.Tween.get(this.sheepDialogGroup).to({ alpha: 1 }, 1000);
		})
		this.sheepDialogGroup.$children[4].visible = false;
		this.sheepDialogGroup.$children[5].visible = true;
		this.sheep.source="sheep_happy_png"
		this.playVoice(animalDialogVoice.sheepVoice_c);
		await lzlib.ThreadUtility.sleep(5000);
		this.endMaskRect.visible = true;
		await this.endMaskRectAnim.playOnceAsync();
	}
}