class Scene01 extends eui.Component implements eui.UIComponent {
	private nextButton: eui.Button;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextButtonClick, this);
		(RES.getRes('01a_mp3') as egret.Sound).play(0, 1);
	}

	private async playBackgroundMusic(): Promise<void> {
	}

	private onNextButtonClick(): void {
		Main.instance.gotoScene(new Scene02());
	}
}