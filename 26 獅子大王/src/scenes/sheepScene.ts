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

	private bulbGroup: eui.Group;
	private stamperGroup: eui.Group;
	private achieveGroup: eui.Group;
	private lionDialogGroup: eui.Group;
	private sheepDialogGroup: eui.Group;
	private editGroup: eui.Group;
	private lionSmellGroup: eui.Group;
	private bulbComponentGroup: eui.Group;
	private stamperComponentGroup: eui.Group
	private stamperActiveGroup: eui.Group;

	private tipsBulbComponent: bulbComponent;
	private bulbComponent: bulbComponent;
	private stamperComponent: stampComponent;
	private stamperActiveColone: stampComponent;
	private resultAchieveComponent: achieveComponent;

	private plantMaskRect: eui.Rect;
	private endMaskRect: eui.Rect;
	private firstBgRect: eui.Rect
	private secondBgRect: eui.Rect
	private thirdBgRect: eui.Rect
	private stamperRect: eui.Rect

	private lion: eui.Image;
	private lion_active: eui.Image;
	private sheep: eui.Image;
	private stamper: eui.Image;
	private dropStamper: eui.Image;
	private invitationLetter: eui.Image;

	private editableText_first: eui.EditableText;
	private editableText_second: eui.EditableText;
	private editableText_third: eui.EditableText;

	private Textboxes:eui.Label;

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

		// RES.getRes("sound 24_mp3").play(0, -1)
		optionsScene.getOptionInstance.onPlayVoice('sound 24_mp3')
		this.judgmentstypes();
		this.playAnim();
		this.bulbComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hover, this);
		this.bulbComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.normal, this);
		this.bulbComponent.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.active, this);
		this.bulbComponent.addEventListener(egret.TouchEvent.TOUCH_END, this.tips, this);

		this.stamperComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.stamperHover, this);
		this.stamperComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.stamperNormal, this)
		this.stamperComponent.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.stamperActive, this);
		this.stamperComponent.addEventListener(egret.TouchEvent.TOUCH_END, () => {
			// console.log("TOUCH_END")
			this.initDrag();
		}, this);

	}

	//文字類型判斷
	private judgmentstypes():void {
		if(optionsScene.getOptionInstance.getWords){
			this.Textboxes.text='你們要來參加秋季嘉年華 !\n日期：十一月九日\n時間：下午六時\n地點：森林公園\n希望你能出席，不見不散 ！'
		}
	}

	private async hover(): Promise<void> {
		this.bulbComponent.currentState = "hover";
	}
	private async stamperHover(): Promise<void> {
		this.stamperComponent.currentState = "hover";
	}

	private async normal(): Promise<void> {
		await this.enableMouse();
		this.bulbComponent.currentState = "normal";
	}
	private async stamperNormal(): Promise<void> {
		await this.stamperEnableMouse();
		this.stamperComponent.currentState = "normal";
	}

	private async active(): Promise<void> {
		await this.disableMouse();
		this.bulbComponent.currentState = "active";
	}

	private async stamperActive(): Promise<void> {
		await this.stamperDisableMouse();
		this.stamperComponent.currentState = "active";
	}

	private async disableMouse(): Promise<void> {
		this.bulbComponentGroup.removeEventListener(mouse.MouseEvent.MOUSE_OVER, this.hover, this);
	}
	private async stamperDisableMouse(): Promise<void> {
		this.stamperComponentGroup.removeEventListener(mouse.MouseEvent.MOUSE_OVER, this.stamperHover, this);
	}
	private enableMouse(): void {
		this.bulbComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hover, this);
	}

	private stamperEnableMouse(): void {
		this.stamperComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.stamperHover, this);
	}

	private async playAnim(): Promise<void> {
		this.plantMask.play(0);
		this.tailWiggle.play(0);
		await lzlib.ThreadUtility.sleep(2500);
		await this.invitationCard.playOnceAsync().then(() => {
			this.plantMaskRect.visible=false;
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
		let sound = optionsScene.getOptionInstance.playVoice(voice.toString())
		return sound;
	}

	private tips(): void {
		this.normal();
		this.tipsComponent = new tipsComponent(this, tipsVoices.sheepTip.toString());
		this.tipsComponent.currentState = "sheep"
		this.addChild(this.tipsComponent);
		this.tipsComponent.playAnim();
	}

	//蓋印章
	private initDrag(): void {
		let drag = new lzlib.Drag();

		this.stamperActiveColone = new stampComponent();
		this.stamperActiveColone.currentState = "active";
		this.stamperActiveGroup.addChild(this.stamperActiveColone);

		// this.stamper=new eui.Image();
		this.addChild(drag);
		drag.enableDrag(this.stamperActiveColone, false);
		this.initDrop(this.stamperRect, this.onStamperDrop);
		mouse.setMouseMoveEnabled(true);
		this.stamperComponent.currentState = "normal";
		this.stamperComponent.addEventListener(lzlib.LzDragEvent.CANCEL,this.onDropCancel,this)
	}

	private initDrop(dropTarget: eui.Component, dropFunction: (e: lzlib.LzDragEvent) => void): void {
		let drop = new lzlib.Drop();
		this.addChild(drop);
		drop.enableDrop(dropTarget);
		dropTarget.addEventListener(lzlib.LzDragEvent.DROP, dropFunction, this);
	}

	private async onStamperDrop(e: lzlib.LzDragEvent): Promise<void> {
		let dragComponent = e.dragObject as eui.Component;
		let target = (e.target as eui.Rect).name
		this.stamperActiveColone.play()
		if (target == "lister") {
			e.preventDefault();
			this.dropStamper.visible = true;
			e.dragObject.visible = false;
			egret.Tween.get(this.sheepDialogGroup).to({ alpha: 0 }, 1000).call(() => {
				egret.Tween.get(this.bulbGroup).to({ alpha: 0 }, 1000);
				egret.Tween.get(this.stamperGroup).to({ alpha: 0 }, 1000);
			});
				setTimeout(() => {
				this.congratulateAnim();
			}, 2800)
		}
		

	}

	private async onDropCancel():Promise<void> {
			this.bulbGroup.visible = false;
			this.stamperGroup.visible = false;
			this.sheepDialogGroup.$children[5].visible = false;
			this.sheepDialogGroup.$children[2].visible = true;
			this.playVoice(animalDialogVoice.sheepVoice_d).then(() => {
				this.bulbGroup.visible = true;
				this.stamperGroup.visible = true;
				this.sheepDialogGroup.$children[5].visible = true;
				this.sheepDialogGroup.$children[2].visible = false;
			})
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
		this.sheep.source = "sheep_happy_png"
		this.playVoice(animalDialogVoice.sheepVoice_c);
		await lzlib.ThreadUtility.sleep(5000);
		this.endMaskRect.visible = true;
		await this.endMaskRectAnim.playOnceAsync();
		await this.gohome()
	}
	private gohome(): void {
	optionsScene.getOptionInstance.onPauseVoice();
    this.optionsScene = new optionsScene();
	optionsScene.getOptionInstance.getWords?this.optionsScene.currentState = "giraffeCH":this.optionsScene.currentState="giraffe";
	this.optionsScene.statueIndex();
    Main.instance.gotoScene(this.optionsScene)
  }
}