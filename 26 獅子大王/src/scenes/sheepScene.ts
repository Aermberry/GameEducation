class sheepScene extends eui.Component implements eui.UIComponent {
	private plantMask: egret.tween.TweenGroup;
	private tailWiggle: egret.tween.TweenGroup;
	private invitationCard: egret.tween.TweenGroup;
	private lionDialog: egret.tween.TweenGroup;
	private rabbitDialogBox: egret.tween.TweenGroup;
	private bubleGrad: egret.tween.TweenGroup;
	private changCard: egret.tween.TweenGroup;
	private tipsComponent: tipsComponent;
	private stamperComponent: stampComponent;

	private bulbGroup: eui.Group;
	private stamperGroup:eui.Group;
	private lionDialogGroup: eui.Group;
	private sheepDialogGroup: eui.Group;

	private tipsBulbComponent: bulbComponent;
	private bulbComponent: bulbComponent;
	private resultAchieveComponent: achieveComponent;

	private lion: eui.Image;

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

		this.playAnim();

		this.bulbGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tips, this);
		this.bulbGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, () => {
			this.bulbComponent.currentState = this.bulbComponent.skin.states[0].name;
		}, this);
		this.bulbGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, () => {
			this.bulbComponent.currentState = this.bulbComponent.skin.states[1].name;
		}, this);
		this.stamperGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.result, this);
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
		this.tipsComponent = new tipsComponent(this, tipsVoices.ratTip.toString());
		this.tipsComponent.currentState = "rat"
		this.addChild(this.tipsComponent);
		this.tipsComponent.playAnim();
	}

	private result(): void {
		this.stamperComponent = new stampComponent();
		// if(){

		// }
		// else{
		//   this.sheepDialogGroup.$children[4].visible=false
		//   this.sheepDialogGroup.$children[5].visible=true;
		//   setTimeout(()=>{
		//     this.sheepDialogGroup.$children[5].visible=false;
		//     this.sheepDialogGroup.$children[4].visible=true;
		//   },5000)
		// }
	}
}