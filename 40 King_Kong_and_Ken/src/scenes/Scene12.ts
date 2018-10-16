class Scene12 extends eui.Component implements eui.UIComponent {
	private nextButton: eui.Button;
	private voiceImage: eui.Image;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		Base.onAsyncPlayBlackgroundMusic('28_mp3', this.nextButton)
		this.voiceImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickVoice, this);
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextScene, this);
	}

	private onClickVoice(): void {
		lzlib.SoundUtility.playSound('29_mp3')
	}

	private nextScene(): void {
		Main.instance.gotoScene(new Scene13())
	}

}