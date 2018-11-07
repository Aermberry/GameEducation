class StartScene extends eui.Component implements eui.UIComponent {

	private nextSceneButton: eui.Button;
	private startButton:eui.Button;
	private maskLayer:eui.Rect;
	private StartLoading:egret.tween.TweenGroup;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();

		this.nextSceneButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gotoNextScene, this)
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startLoading,this);
	}

	private async startLoading():Promise<void> {
		 this.StartLoading.play(0);
		this.startButton.visible=false;
		await lzlib.ThreadUtility.sleep(1000);
 		this.maskLayer.visible=false;
	}

	private gotoNextScene(): void {
		Main.instance.gotoScene(new Game01Scene());
	}

}