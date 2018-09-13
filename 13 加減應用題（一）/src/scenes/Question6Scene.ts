class Question6Scene extends eui.Component implements  eui.UIComponent {
	
	private trousersPriceImage: eui.Image;
	private alertAndOperationGroup: eui.Group;
	private expensiveButtonComponent: ButtonComponent;
	private cheapButtonComponent: ButtonComponent;
	private calcComponent: CalcComponents;
	private cloudAlertComponent: CloudAlertComponent;
	private formulaComponent: FormulaComponent;
	private nextQuestionComponent: NextQuestionComponent;
	private lastQuestionComponent: LastQuestionComponent;

	private startAnimation: egret.tween.TweenGroup;
	
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any): void
	{
		super.partAdded(partName,instance);
	}


	protected async childrenCreated(): Promise<void>
	{
		super.childrenCreated();
		this.nextQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionComponent, this);
		this.lastQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLastQuestionComponent, this);
		this.playStartAnimation();
		await this.playMP3();
		this.showButton();
		this.expensiveButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExpensiveButtonComponentTap, this);
		this.cheapButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCheapButtonComponentTap, this);
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
		this.nextQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionComponent, this);
		this.lastQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLastQuestionComponent, this);
	}

	private async onCheapButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.hideAlert();
		this.cloudAlertComponent.showCorrectAlert();
		this.hideWrongButtonComponent();
		this.playCorrectAnimation();
		await lzlib.SoundUtility.playSound('streamsound6_3_mp3');
		await lzlib.ThreadUtility.sleep(1000);
		this.cloudAlertComponent.hideAlert();
		this.showCalcComponent();
	}

	private async onExpensiveButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.showWrongAlert();
		await lzlib.SoundUtility.playSound('streamsound6_2_mp3');
		this.cloudAlertComponent.hideAlert();
	}

	private onNextQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question7Scene());
	}

	private onLastQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question5Scene());
	}

	private async onCalcComponentTap(): Promise<void>
	{
		this.hideAlertAndOperationGroup();
		this.formulaComponent.showTitleImage();
		await lzlib.SoundUtility.playSound('streamsound6_4_mp3');
		this.formulaComponent.showLeftImage();
		await lzlib.SoundUtility.playSound('streamsound6_5_mp3');
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound6_6_mp3');
		this.showAnswer();
		this.formulaComponent.showResultImage();
		await lzlib.SoundUtility.playSound('streamsound6_7_mp3');
	}


	private playStartAnimation(): void
	{
		this.startAnimation.play(0);
	}

	private playCorrectAnimation(): void
	{
		
	}

	private async playMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound6_0_mp3');
		await lzlib.SoundUtility.playSound('streamsound6_1_mp3');
	}

	private showCalcComponent(): void
	{
		this.calcComponent.visible = true;
	}

	private showAnswer(): void
	{
		this.trousersPriceImage.visible = true;
	}
	
	private showButton(): void
	{
		this.expensiveButtonComponent.visible = true;
		this.cheapButtonComponent.visible = true;
	}

	private hideWrongButtonComponent(): void
	{
		this.expensiveButtonComponent.visible = false;
	}

	private hideAlertAndOperationGroup(): void
	{
		this.alertAndOperationGroup.visible = false;
	}

}