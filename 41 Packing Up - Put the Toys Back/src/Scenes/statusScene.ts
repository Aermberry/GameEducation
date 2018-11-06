class statusScene extends eui.Component implements eui.UIComponent {
	private tipsLabel: eui.Label;
	private isCorrect = false; //用户的选择是否正确
	private currentVoice: string = '';
	private soundChannel: egret.SoundChannel
	private sound: egret.Sound
	private gameScene: gameScene

	public constructor(isCorrect: boolean, currentVoice?: string, gameScene?: gameScene) {
		super();
		this.isCorrect = isCorrect;
		this.currentVoice = currentVoice;
		this.gameScene = gameScene;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.touchEnabled = true;
		this.showTip();
	}

	public showTip(): any {
		if (this.isCorrect) {
			this.tipsLabel.text = "That's\ra good try !";
		} else {

			this.tipsLabel.text = 'Please listen again !';
			this.sound = RES.getRes(this.currentVoice);
			this.soundChannel = this.sound.play(0, 1);
			this.soundChannel.addEventListener(egret.Event.SOUND_COMPLETE, (event: egret.Event) => {
				this.gameScene.showToyImage();
				this.gameScene.removeChild(this);
			}, this)
		}
	}
}