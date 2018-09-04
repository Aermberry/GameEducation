class Question4Scene extends eui.Component implements  eui.UIComponent {
	
	private optionGroup: eui.Group;
	private messageBorderBigImage: eui.Image;
	private optionComponent: OptionComponent;
	
	private correctAlertInfo: egret.tween.TweenGroup;
	private startMouseAnimation:egret.tween.TweenGroup;

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
			// this.hideWrongInfo();
			this.showCorrectAnimation();
			await lzlib.ThreadUtility.sleep(4000);
			Main.instance.gotoScene(new FinishScene());
		}
		else
		{
			// this.optionComponent.showWrong();
			// this.stopStartCockAnimation();
			// this.showWrongInfo();
			//同步播放音频，播放完后隐藏提示信息并且重新播放playStartCockAnimation();
			// this.hideWrongInfo();
			// this.startCockAnimation()
		}
	}

	private isCorrect(text: string): boolean
	{
		return QuestionAnswerRepository.answer[3] === text;
	}

	private showCorrectAnimation(): void
	{
		this.correctAlertInfo.play(0);
	}

	private hideCorrectInfo(): void
	{
		// this.messageBorderSmallImage.visible = false;
		// this.alertCorrectInfoLabel.visible = false;
	}


	
}