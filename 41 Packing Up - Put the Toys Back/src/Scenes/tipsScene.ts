class TipsScene extends eui.Component implements eui.UIComponent {
	private backButton: eui.Button;
	public constructor(position: ToyPosition) {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();

		this.backButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
			this.parent.removeChild(this);
		}, this);
	}

}