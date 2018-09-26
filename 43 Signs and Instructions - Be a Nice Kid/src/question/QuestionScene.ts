class QuestionScene extends eui.Component implements  eui.UIComponent,QuestionView {
	
	private likeImage: eui.Image;
	private selectedChildImage: eui.Image;
	private boyCleanImage: eui.Image;
	private answerHornComponent: HornComponent;
	private optionsGroup: eui.Group;
	private cloudAlertGroup: eui.Group;
	private optionAnswerGroup: eui.Group;
	private answerLabel: eui.Label;
	private repeatLabel: eui.Label;
	private okButtonComponent: ButtonComponent;
	private continueButtonComponent: ButtonComponent;

	public answer: Question;
	public options: Question[];
	private questionPresenter = new QuestionPresenter();

	private cloudAlertAnimation: egret.tween.TweenGroup;
	private gift1Animation: egret.tween.TweenGroup;
	private gift2Animation: egret.tween.TweenGroup;
	private gift3Animation: egret.tween.TweenGroup;
	private gift4Animation: egret.tween.TweenGroup;
	private gift5Animation: egret.tween.TweenGroup;
	private gift6Animation: egret.tween.TweenGroup;
	private gift7Animation: egret.tween.TweenGroup;
	private gift8Animation: egret.tween.TweenGroup;
	private gift9Animation: egret.tween.TweenGroup;

	public giftAnimations: egret.tween.TweenGroup[];

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected async childrenCreated(): Promise<void>
	{
		super.childrenCreated();
		this.giftAnimations = [this.gift1Animation, this.gift2Animation, this.gift3Animation, this.gift4Animation,this.gift5Animation, this.gift6Animation, this.gift7Animation, this.gift8Animation, this.gift9Animation];
		this.questionPresenter.loadView(this);
		this.continueButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onContinueClick, this);
		this.okButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkClick, this);
	}

	private onOkClick(e: egret.TouchEvent): void
	{
		this.optionsGroup.$children.map((group) => {
			let radioButton = group.$children[2] as eui.RadioButton;
			if(radioButton.currentState == 'upAndSelected')
			{
				this.questionPresenter.onOptionSelect(this.optionsGroup.getChildIndex(group));
			}
		});
	}

	private onContinueClick(e: egret.TouchEvent): void
	{
		this.questionPresenter.onContinueButtonClick();
	}

	public cleartRadioSelect(): void
	{
		this.optionsGroup.$children.map((group) => {
			(group.$children[2] as eui.RadioButton).selected = false;
		})
	}

	public showLikeImage(): void
	{
		this.likeImage.visible = true;
	}

	public showOptionAndAnswer(): void
	{
		this.showOption();
		this.setAnswer();
	}

	public async alertSelectWrong(): Promise<void>
	{
		this.cloudAlertGroup.visible = true;
		this.cloudAlertAnimation.play(-1);
		lzlib.SoundUtility.playSound('streamsound 27_mp3');
		await lzlib.ThreadUtility.sleep(2600);
		this.cloudAlertGroup.visible = false;
	}

	public showAnswer(text: string): void
	{
		this.answerLabel.visible = true;
		this.answerLabel.text = text;
	}

	public showOptionAnswerGroup(): void
	{
		this.optionAnswerGroup.visible = true;
	}

	public showOkButton(): void
	{
		this.continueButtonComponent.visible = false;
		this.okButtonComponent.visible = true;
	}

	public showContinueButton(): void
	{
		this.okButtonComponent.visible = false;
		this.continueButtonComponent.visible = true;
	}

	public showOption(): void
	{
		console.log(this.options);
		let index = 0;
		let obj = null;
		this.optionsGroup.$children.map((group) => {
			obj = this.options[index];
			let movie = (group.$children[0] as MovieClipPlayer);
			let horn = (group.$children[1] as HornComponent);
			horn.soundPath = obj.sound;
			movie.dataSet = obj.picture + '_json';
			movie.texture = obj.picture + '_png';
			movie.movieClipName = obj.picture;
			index++;
		})
	}

	public showRepeatLabel(): void
	{
		this.repeatLabel.visible = true;
	}

	public showHornComponent(): void
	{
		this.answerHornComponent.visible = true;
	}

	public hideAnswer(): void
	{
		this.answerLabel.visible = false;
	}

	public hideHornComponent(): void
	{
		this.answerHornComponent.visible = false;
	}

	public hideLikeImage(): void
	{
		this.likeImage.visible = false;
	}

	public hideRepeatLabel(): void
	{
		this.repeatLabel.visible = false;
	}

	public hideOptionAnswerGroup(): void
	{
		this.optionAnswerGroup.visible = false;
	}

	public disableOptionSelect(): void
	{
		this.optionsGroup.$children.map((group) => {
			group.$children[1].visible = false;
			group.$children[2].visible = false;
		})
	}

	public enableOptionSelect(): void
	{
		this.optionsGroup.$children.map((group) => {
			group.$children[1].visible = true;
			group.$children[2].visible = true;
		})
	}

	public async playIntroductionMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound1_7_mp3');
	}

	public setAnswer(): void
	{
		this.answerLabel.text = this.answer.sentence;
		this.answerHornComponent.soundPath = this.answer.sound;
	}

	public loadBoy(source: string): void
	{
		this.selectedChildImage.source = source;
	}

	public loadCleanBoy(source: string): void
	{
		this.boyCleanImage.source = source;
	}

	public openFinishScene(): void
	{
		Main.instance.gotoScene(new FinishScene());
	}

	public offerGift(animation: egret.tween.TweenGroup): void
	{
		animation.play(-1);
		console.log(animation);
	}

	public async playMP3(): Promise<void>
	{
		lzlib.SoundUtility.playSound(this.answer.sound);
	}

}