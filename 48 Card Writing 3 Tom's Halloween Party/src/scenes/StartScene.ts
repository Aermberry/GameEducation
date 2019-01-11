class StartScene extends eui.Component implements eui.UIComponent {
	private nextButton:eui.Button;
	private startButton: eui.Image
	private startMask: eui.Rect;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButtonClick, this);
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.nextScene,this);
	}

	private async onStartButtonClick(): Promise<void> {
		this.startMask.visible = false;
		this.startButton.visible = false;
	}


	private nextScene():void {
		Main.instance.gotoScene(new MainScene());
	}

}