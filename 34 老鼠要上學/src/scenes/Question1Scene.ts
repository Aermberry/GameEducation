class Question1Scene extends eui.Component implements  eui.UIComponent {
	
	private optionGroup: eui.Group;
	private messageBorderBigImage: eui.Image;
	private messageBorderSmallImage: eui.Image;
	private alertWrongInfoLabel: eui.Label;
	private alertCorrectInfoLabel: eui.Label;

	private optionComponent: OptionComponent;
	
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.initTap();
	}

	private initTap(): void
	{
		this.optionGroup.$children.map((item) => {
			item.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOptionTap, this);
		})
	}

	private async onOptionTap(e:egret.TouchEvent): Promise<void>
	{
		console.log('clicked');
		this.optionComponent && this.optionComponent.hideMark();
		this.optionComponent = (e.target.parent as OptionComponent);
		if (this.isCorrect(e.target.text)) 
		{
			this.optionComponent.showCorrect();
			this.hideWrongInfo();
			this.showCorrectInfo();
			await lzlib.ThreadUtility.sleep(1000);
			Main.instance.gotoScene(new Question2Scene());
		}
		else
		{
			this.optionComponent.showWrong();
			this.showWrongInfo();
			//同步播放音频，播放完后隐藏提示信息
			// this.hideWrongInfo();
		}
	}

	private isCorrect(text: string): boolean
	{
		return QuestionAnswerRepository.answer[0] === text;
	}

	private showCorrectInfo(): void
	{
		this.messageBorderSmallImage.visible = true;
		this.alertCorrectInfoLabel.visible = true;
	}

	private hideCorrectInfo(): void
	{
		this.messageBorderSmallImage.visible = false;
		this.alertCorrectInfoLabel.visible = false;
	}

	private showWrongInfo(): void
	{
		this.messageBorderBigImage.visible = true;
		this.alertWrongInfoLabel.visible = true;
	}

	private hideWrongInfo(): void
	{
		this.messageBorderBigImage.visible = false;
		this.alertWrongInfoLabel.visible = false;
	}
	
}