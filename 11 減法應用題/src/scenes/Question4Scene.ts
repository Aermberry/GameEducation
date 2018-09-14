class Question4Scene extends eui.Component implements  eui.UIComponent {
	
	private arrow14Image: eui.Image;
	private answerImage: eui.Image;
	private questionMarkAndArrowImage: eui.Image;
	private calcComponent: CalcComponents;
	private nextQuestionComponent: NextQuestionComponent;
	private formulaComponent: FormulaComponent;
	private lastQuestionComponent: LastQuestionComponent;
	
	private startAnimation: egret.tween.TweenGroup;
	
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
		this.nextQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionComponent, this);
		this.lastQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLastQuestionComponent, this);
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
		this.playStartAnimation();
		await this.playMP3();
	}

	private async onCalcComponentTap(): Promise<void>
	{
		this.hideCalcComponent();
		await lzlib.SoundUtility.playSound('streamsound4_1_mp3');
		this.formulaComponent.showTitleImage();
		await lzlib.SoundUtility.playSound('streamsound4_2_mp3');
		this.formulaComponent.showLeftImage();
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound4_3_mp3');
		this.formulaComponent.showResultImage();
		this.showAnswer();
		await lzlib.SoundUtility.playSound('streamsound4_4_mp3');
	}

	private onNextQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question5Scene());
	}

	private onLastQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question3Scene());
	}

	private playStartAnimation(): void
	{
		this.startAnimation.play();
	}

	private async playMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound4_0_mp3');
	}

	private showCalcComponent(): void
	{
		this.calcComponent.visible = true;
	}

	private showAnswer(): void
	{
		this.answerImage.visible = true;
		this.arrow14Image.visible = true;
		this.questionMarkAndArrowImage.visible = false;
	}

	private hideCalcComponent(): void
	{
		this.calcComponent.visible = false;
	}

}