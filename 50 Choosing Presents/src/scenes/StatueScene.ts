class StatueScene extends eui.Component implements eui.UIComponent {
	private nextButton: eui.Group;
	private startMask: eui.Rect;
	private startButton: eui.Button;
	private loadingAnim: egret.tween.TweenGroup
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoNextScene, this);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButtonClick, this);
	}

	private async onStartButtonClick(): Promise<void> {
		await this.loadingAnim.play(0);
		this.startMask.visible = false;
		this.startButton.visible = false;
		await lzlib.ThreadUtility.sleep(2000)
	}

	private gotoNextScene(): void {
		Main.instance.gotoScene(new Choose1Scene())
	}

}