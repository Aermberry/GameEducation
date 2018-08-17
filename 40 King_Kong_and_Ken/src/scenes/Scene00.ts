class Scene00 extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSceneClick, this);
	}

	private onSceneClick(): void 
	{
		Main.instance.gotoScene(new Scene01());
	}
}