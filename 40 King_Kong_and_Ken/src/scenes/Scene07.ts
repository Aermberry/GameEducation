class Scene07 extends eui.Component implements eui.UIComponent {
	private nextBtn: eui.Button;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextBtnClick, this);
		this.playBackgroundMusic();
	}

	private async playBackgroundMusic(): Promise<void> {
		await lzlib.SoundUtility.playSound('08_startgame1a_mp3');
		await lzlib.SoundUtility.playSound('08_startgame1b_mp3');
		this.nextBtn.visible = true;
	}

	private onNextBtnClick(): void {
		Main.instance.gotoScene(new Scene00());
	}

}