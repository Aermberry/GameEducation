class Question1Scene extends eui.Component implements  eui.UIComponent {

	private calcComponent: CalcComponents;
	private formulaComponent: FormulaComponent;
	private nextQuestionComponent: NextQuestionComponent;

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
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
		this.playStartAnimation();
		await this.playMP3();

	}

	private onNextQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question2Scene());
	}

	private async onCalcComponentTap(): Promise<void>
	{
		this.hideCalcComponent();
		this.formulaComponent.showTitleImage();
		await lzlib.SoundUtility.playSound('streamsound1_2_mp3');
		await lzlib.SoundUtility.playSound('streamsound1_3_mp3');
		this.formulaComponent.showLeftImage();
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound1_4_mp3');
		this.formulaComponent.showResultImage();
		await lzlib.SoundUtility.playSound('streamsound1_5_mp3');
	}

	private hideCalcComponent(): void
	{
		this.calcComponent.visible = false;
	}

	private async playMP3(): Promise<void>
	{
		lzlib.SoundUtility.playSound('streamsound1_0_mp3');
		await lzlib.ThreadUtility.sleep(6000);
		await lzlib.SoundUtility.playSound('streamsound1_1_mp3');
	}

	private playStartAnimation(): void
	{
		this.startAnimation.play(0);
	}
}