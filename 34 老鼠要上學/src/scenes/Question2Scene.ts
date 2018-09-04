class Question2Scene extends eui.Component implements  eui.UIComponent {
	
	private optionGroup: eui.Group;
	private messageBorderBigImage: eui.Image;
	private cockImage: eui.Image;
	private alertWrongInfoLabel: eui.Label;

	private optionComponent: OptionComponent;

	private startCockAnimation: egret.tween.TweenGroup;
	private correctAnimation: egret.tween.TweenGroup;
	
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
		this.playStartCockAnimation();
	}

	private playStartCockAnimation(): void
	{
		this.startCockAnimation.playLoopAsync();
	}

	private stopStartCockAnimation(): void
	{
		this.startCockAnimation.stop();
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
			this.hideCockImage();
			this.showCorrectInfo();
			await lzlib.ThreadUtility.sleep(2500);
			Main.instance.gotoScene(new Question3Scene());
		}
		else
		{
			this.optionComponent.showWrong();
			this.stopStartCockAnimation();
			this.showWrongInfo();
			//同步播放音频，播放完后隐藏提示信息并且重新播放playStartCockAnimation();
			// this.hideWrongInfo();
			// this.startCockAnimation()
		}
	}

	private isCorrect(text: string): boolean
	{
		return QuestionAnswerRepository.answer[1] === text;
	}

	private showCorrectInfo(): void
	{
		this.correctAnimation.play(0);
	}

	private hideCorrectInfo(): void
	{
		// this.messageBorderSmallImage.visible = false;
		// this.alertCorrectInfoLabel.visible = false;
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

	private hideCockImage(): void
	{
		this.cockImage.visible = false;
	}
	
}