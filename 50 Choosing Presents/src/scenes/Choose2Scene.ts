class Choose2Scene extends eui.Component implements eui.UIComponent {

	private nextButton: eui.Button;
	private helpButton: eui.Button;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);

	}


	protected childrenCreated(): void {
		super.childrenCreated();

		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoNextScene, this)
		this.helpButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.displayChildrenStage, this);
	}



	private gotoNextScene(): void {
		Main.instance.gotoScene(new Choose3Scene());
	}

	private displayChildrenStage(): void {
		this.addChild(new HelpScene());
	}

}