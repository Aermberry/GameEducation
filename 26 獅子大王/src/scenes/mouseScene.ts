class mouseScene extends eui.Component implements eui.UIComponent {

	private plantMask: egret.tween.TweenGroup;
	private tailWiggle: egret.tween.TweenGroup;
	private invitationCard: egret.tween.TweenGroup;
	private lionDialog: egret.tween.TweenGroup;
	private rabbitDialogBox: egret.tween.TweenGroup;
	private bubleGrad: egret.tween.TweenGroup;
	private changCard: egret.tween.TweenGroup;
	private tipsComponent: tipsComponent;
	private achieveComponent: achieveComponent

	private bulbGroup: eui.Group;
	private achieveGroup: eui.Group;
	private lionDialogGroup: eui.Group;
	private ratDialogGroup: eui.Group;

	private tipsBulbComponent: bulbComponent;
	private bulbComponent: bulbComponent;
	private resultAchieveComponent: achieveComponent;

	private circleLeftRect: eui.Rect;
	private circleRightRect: eui.Rect;

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
		this.achieveGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.result, this);
	}

	private async playAnim(): Promise<void> {
		this.plantMask.play(0);
		this.tailWiggle.play(0);
		await lzlib.ThreadUtility.sleep(2500);
		await this.invitationCard.playOnceAsync().then(() => {
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

		await this.playVoice(lionDialogVoice.lionVoice_snakeB).then(() => {
			this.lionDialogTextFlow();
			this.playVoice(lionDialogVoice.lionVoice_c);
			this.circleLeftRect.visible = false
			this.circleRightRect.visible = false;
		});
		await this.changCard.playOnceAsync();
		await lzlib.ThreadUtility.sleep(5000);
		(this.ratDialogGroup.$children[3] as eui.Group).visible = false;
		(this.ratDialogGroup.$children[4] as eui.Group).visible = true;
		await this.playVoice(animalDialogVoice.rabbitVoice_b);
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

	private lionDialogTextFlow(): void {
		let lionLabel = this.lionDialogGroup.$children[2] as eui.Label;
		lionLabel.textFlow = [
			{ text: lionDialogText.snakeText_c.toString(), style: { size: 50, textColor: 0x000000 } },
			{ text: lionDialogText.snakeText_d.toString(), style: { size: 50, textColor: 0xa00000 } },
			{ text: lionDialogText.snakeText_e.toString(), style: { size: 50, textColor: 0x000000 } }
		]
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
		this.achieveComponent = new achieveComponent(this.optionsScene, this);
		// if(){

		// }
		// else{
		//   this.ratDialogGroup.$children[4].visible=false
		//   this.ratDialogGroup.$children[5].visible=true;
		//   setTimeout(()=>{
		//     this.ratDialogGroup.$children[5].visible=false;
		//     this.ratDialogGroup.$children[4].visible=true;
		//   },5000)
		// }
	}

}