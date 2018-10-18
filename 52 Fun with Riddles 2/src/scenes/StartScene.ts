class StartScene extends eui.Component implements eui.UIComponent {

	private nextSceneButton: eui.Button;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();

		this.nextSceneButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gotoNextScene, this)
	}

	private gotoNextScene(): void {
		Main.instance.gotoScene(new Game01Scene());
	}

}