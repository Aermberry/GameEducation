class tipsScene extends eui.Component implements eui.UIComponent {
	private tipsImage: eui.Image;
	private helpLabel: eui.Label;
	private backButton: eui.Button;
	private position: ToyPosition;
	private toyImage: eui.Image;

	public constructor(position: ToyPosition, toyImage: eui.Image) {
		super();
		this.position = position;
		this.toyImage = toyImage;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.toyImage.visible = false;
		this.showTip();
		this.backButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
			this.toyImage.visible = true;
			this.parent.removeChild(this);
		}, this);
		this.BgVoice();
	}

	private BgVoice():void {
		lzlib.SoundUtility.playSound("");
	}


	private showTip(): void {
		this.tipsImage.source = this.position.toString() + '_png';
		this.helpLabel.text = `The ball is ${this.position.toString()} the box.`
	}

}