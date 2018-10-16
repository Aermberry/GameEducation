class Question3Scene extends eui.Component implements  eui.UIComponent {
	
		
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


	protected async childrenCreated():Promise<void>
	{
		super.childrenCreated();
		this.playQuestionOptionMP3();
		this.initTap();
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
		console.log('clicked');
		this.optionComponent && this.optionComponent.hideMark();
		this.optionComponent = (e.currentTarget as OptionComponent);
		if (this.optionGroup.getChildIndex(e.currentTarget) == 2) 
		{
			this.removeTap();
			this.optionComponent.showCorrect();
			this.hideWrongInfo();
			this.showCorrectInfo();
			await this.playCorrectMP3();
			await lzlib.ThreadUtility.sleep(1000);
			Main.instance.gotoScene(new Question4Scene());
		}
		else
		{
			this.optionComponent.showWrong();
			this.showWrongInfo();
			await this.playWrongMP3()
			await this.playAnwerMP3();
			this.hideWrongInfo();
			this.optionComponent.hideMark();
		}
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

	private async playQuestionOptionMP3(): Promise<void>
	{
		return lzlib.SoundUtility.playSound('start_scene_question3_option_mp3');
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
		await lzlib.SoundUtility.playSound('first_mp3');

		await lzlib.SoundUtility.playSound('question_scene_question3_answer_mp3');

		await lzlib.SoundUtility.playSound('second_mp3');

		await lzlib.SoundUtility.playSound('question_scene_question4_answer_mp3');
		
		
	}
	
}