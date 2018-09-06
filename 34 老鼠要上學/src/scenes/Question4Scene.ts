class Question4Scene extends eui.Component implements  eui.UIComponent {
	
	private optionGroup: eui.Group;
	private wrongAlertGroup: eui.Group;
	private messageBorderBigImage: eui.Image;
	private optionComponent: OptionComponent;
	
	private correctAlertInfo: egret.tween.TweenGroup;
	private wrongAlertAnimation:egret.tween.TweenGroup;

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
		this.optionComponent && this.optionComponent.hideMark();
		this.optionComponent = (e.currentTarget as OptionComponent);
		if (this.optionGroup.getChildIndex(e.currentTarget) == 3) 
		{
			this.removeTap();
			this.optionComponent.showCorrect();
			this.showCorrectAnimation();
			await this.playCorrectMP3();
			await lzlib.ThreadUtility.sleep(4000);
			Main.instance.gotoScene(new FinishScene());
		}
		else
		{
			this.optionComponent.showWrong();
			this.showWrongAlertGroup();
			this.playWrongAnimation();
			await this.playWrongMP3();
			await this.playAnwerMP3();
			this.hideWrongAlertGroup();
			this.optionComponent.hideMark();
		}
	}

	private showCorrectAnimation(): void
	{
		this.correctAlertInfo.play(0);
	}


	private async playQuestionOptionMP3(): Promise<void>
	{
		return lzlib.SoundUtility.playSound('start_scene_question4_option_mp3');
	}

	private async playCorrectMP3(): Promise<void>
	{
		return lzlib.SoundUtility.playSound('correct_mp3');
	}

	private async playWrongMP3(): Promise<void>
	{
		return lzlib.SoundUtility.playSound('wrong_dlalog_mp3');
	}

	private async playAnwerMP3(): Promise<void>
	{
		return lzlib.SoundUtility.playSound('question_scene_question4_answer_mp3');
	}

	private playWrongAnimation(): void
	{
		this.wrongAlertAnimation.play(0);
	}

	private showWrongAlertGroup(): void
	{
		this.wrongAlertGroup.visible = true;
	}
	

	private hideWrongAlertGroup(): void
	{
		this.wrongAlertGroup.visible = false;
	}
	
}