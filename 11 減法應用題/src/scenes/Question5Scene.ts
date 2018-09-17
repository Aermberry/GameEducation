class Question5Scene extends eui.Component implements  eui.UIComponent {
	
	private calcComponent: CalcComponents;
	private nextQuestionComponent: NextQuestionComponent;
	private formulaComponent: FormulaComponent;
	private lastQuestionComponent: LastQuestionComponent;
	
	private xiaowenAnimation: egret.tween.TweenGroup;
	private ziwuAnimation: egret.tween.TweenGroup;
	private flickerAnimation: egret.tween.TweenGroup;

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
		this.playXiaowenAnimation();
		await this.playMP3AndShow();
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
		this.nextQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionComponent, this);
		this.lastQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLastQuestionComponent, this);
	}
	
	private async onCalcComponentTap(): Promise<void>
	{
		this.hideCalcComponent();
		this.formulaComponent.showTitleImage();
		await lzlib.SoundUtility.playSound('streamsound5_3_mp3');
		await lzlib.SoundUtility.playSound('streamsound5_4_mp3');
		this.formulaComponent.showLeftImage();
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound5_5_mp3');
		this.formulaComponent.showResultImage();
		await lzlib.SoundUtility.playSound('streamsound5_6_mp3');
	}

	private onNextQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question6Scene());
	}

	private onLastQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question4Scene());
	}

	private playXiaowenAnimation(): void
	{
		this.xiaowenAnimation.play();
	}

	private async playMP3AndShow(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound5_0_mp3');
		this.ziwuAnimation.play();
		await lzlib.SoundUtility.playSound('streamsound5_1_mp3');
		this.flickerAnimation.play();
		await lzlib.SoundUtility.playSound('streamsound5_2_mp3');
	}
		

	private showCalcComponent(): void
	{
		this.calcComponent.visible = true;
	}

	private hideCalcComponent(): void
	{
		this.calcComponent.visible = false;
	}

	private hideCoatAndSweaterImage(): void
	{
		
	}
	
}