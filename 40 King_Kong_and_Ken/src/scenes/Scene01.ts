class Scene01 extends eui.Component implements eui.UIComponent {
	private nextButton: eui.Button;
	private diplayTweenGroup: egret.tween.TweenGroup;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.playBackgroundMusic();
		this.diplayTweenGroup.play(0);
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextButtonClick, this);
		
	}

	private async playBackgroundMusic(): Promise<void> {
		await lzlib.SoundUtility.playSound('Scene01_mp3');
		this.nextButton.visible = true;

	}

	private onNextButtonClick(): void {
		Main.instance.gotoScene(new Scene02());
	}
}