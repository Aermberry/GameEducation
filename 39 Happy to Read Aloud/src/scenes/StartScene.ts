class StartScene extends eui.Component implements eui.UIComponent {
	private startButton2: eui.Image;
	private startMask: eui.Rect;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.startButton2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButton2Click, this);
	}

	private onStartButton2Click(): void {
		this.startMask.visible = false;
		this.startButton2.visible = false;

		var first = new initOne();
		// first()
		// continueElevenGame()
		continueFiveGame();
	}

}