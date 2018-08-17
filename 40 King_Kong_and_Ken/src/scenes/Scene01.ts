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
	}

	private onNextButtonClick(): void {
		Main.instance.gotoScene(new Scene02());
	}
}