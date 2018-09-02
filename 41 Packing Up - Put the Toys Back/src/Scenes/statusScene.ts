class StatusScene extends eui.Component implements eui.UIComponent {
	private tipsLabel: eui.Label;
	private isCorrect = false; //用户的选择是否正确
	private toyImage: eui.Image;

	public constructor(isCorrect: boolean, toyImage: eui.Image) {
		super();
		this.isCorrect = isCorrect;
		this.toyImage = toyImage;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.toyImage.visible = false;
		this.showTip();
	}

	private async showTip(): Promise<void> {
		if (this.isCorrect) {
			this.tipsLabel.text = "That's\ra good try !";
		} else {
			this.tipsLabel.text = 'Please listen again !';
			await lzlib.ThreadUtility.sleep(1500);
			this.toyImage.visible = true;
			this.parent.removeChild(this);
		}
	}
}