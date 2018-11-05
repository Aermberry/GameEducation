class statusScene extends eui.Component implements eui.UIComponent {
	private tipsLabel: eui.Label;
	private isCorrect = false; //用户的选择是否正确
	private toyImage: eui.Image;
	private currentVoice: string = '';

	public constructor(isCorrect: boolean, toyImage: eui.Image, currentVoice?: string) {
		super();
		this.isCorrect = isCorrect;
		this.toyImage = toyImage;
		this.currentVoice = currentVoice
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
			this.touchEnabled=true;
		this.toyImage.visible = false;
		this.showTip();
	}

	private  showTip(): void {
		if (this.isCorrect) {
			this.tipsLabel.text = "That's\ra good try !";
		} else {

			this.tipsLabel.text = 'Please listen again !';
			 lzlib.SoundUtility.playSound(this.currentVoice).then(() => {
				console.log(this.currentVoice);
				console.log("scene:" + this);
				this.toyImage.visible = true;
				if (this.parent) {
					console.log(this.parent);
					setTimeout(()=>{
						this.<gameScene>parent.removeChild(this);
					},1000)
				}
			});

		}
	}
}