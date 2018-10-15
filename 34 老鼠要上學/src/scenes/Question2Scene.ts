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


	protected async childrenCreated():Promise<void>
	{
		super.childrenCreated();
		this.playQuestionOptionMP3();
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

	private removeTap(): void
	{
		this.optionGroup.$children.map((item) => {
			item.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOptionTap, this);
		})
	}

	private async onOptionTap(e:egret.TouchEvent): Promise<void>
	{
		this.optionComponent && this.optionComponent.hideMark();
		this.optionComponent = (e.currentTarget as OptionComponent);
		if (this.optionGroup.getChildIndex(e.currentTarget) == 1) 
		{
			this.removeTap();
			this.optionComponent.showCorrect();
			this.hideWrongInfo();
			this.hideCockImage();
			this.showCorrectInfo();
			await this.playCorrectMP3();
			await lzlib.ThreadUtility.sleep(1000);
			Main.instance.gotoScene(new Question3Scene());
		}
		else
		{
			this.optionComponent.showWrong();
			this.stopStartCockAnimation();
			this.showWrongInfo();
			await this.playWrongMP3();
			await this.playAnwerMP3();
			this.hideWrongInfo();
			this.playStartCockAnimation();
			this.optionComponent.hideMark();
		}
	}

	private showCorrectInfo(): void
	{
		this.correctAnimation.play(0);
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

	private async playQuestionOptionMP3(): Promise<void>
	{
		return lzlib.SoundUtility.playSound('start_scene_question2_option_mp3');
	}

	private async playWrongMP3(): Promise<void>
	{
		return lzlib.SoundUtility.playSound('wrong_dlalog_mp3');
	}

	private async playCorrectMP3(): Promise<void>
	{
		return lzlib.SoundUtility.playSound('correct_mp3');
	}

	private async playAnwerMP3(): Promise<void>
	{
		return lzlib.SoundUtility.playSound('question_scene_question2_answer_mp3');
	}
	
}