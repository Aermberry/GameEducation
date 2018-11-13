class Question4Scene extends eui.Component implements  eui.UIComponent {
	
	private coatAndSweaterImage: eui.Image;
	private coatAndSweaterNoQuestionImage: eui.Image;
	private priceImage: eui.Image;
	private expensiveButtonComponent: ButtonComponent;
	private cheapButtonComponent: ButtonComponent;
	private calcComponent: CalcComponents;
	private alertAndOperationGroup: eui.Group;
	private nextQuestionComponent: NextQuestionComponent;
	private cloudAlertComponent: CloudAlertComponent;
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
		this.playStartAnimation();
		await this.playMP3();
		await lzlib.ThreadUtility.sleep(1000);
		this.showButton();
		this.cheapButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCheapButtonComponentTap, this);
		this.expensiveButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExpensiveButtonComponentTap, this);
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
		this.nextQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionComponent, this);
		this.lastQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLastQuestionComponent, this);
	}

	private async onExpensiveButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.showWrongAlert();
		await lzlib.SoundUtility.playSound('streamsound4_2_mp3');
		this.cloudAlertComponent.hideAlert();
	}

	private async onCheapButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.hideAlert();
		this.cloudAlertComponent.showCorrectAlert();
		this.hideHightButtonComponent();
		await lzlib.SoundUtility.playSound('streamsound4_3_mp3');
		await lzlib.ThreadUtility.sleep(1000);
		this.cloudAlertComponent.hideAlert();
		this.showCalcComponent();
	}

	private async onCalcComponentTap(): Promise<void>
	{
		this.hideAlertAndOperationGroup();
		this.formulaComponent.showTitleImage();
		await lzlib.SoundUtility.playSound('streamsound4_4_mp3');
		this.formulaComponent.showLeftImage();
		await lzlib.SoundUtility.playSound('streamsound4_5_mp3');
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound4_6_mp3');
		this.formulaComponent.showResultImage();
		await lzlib.SoundUtility.playSound('streamsound4_7_mp3');
		this.hideCoatAndSweaterImage();
		this.showAnswer();
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
		await lzlib.SoundUtility.playSound('streamsound4_1_mp3');
	}
		
	private showButton(): void
	{
		this.expensiveButtonComponent.visible = true;
		this.cheapButtonComponent.visible = true;
	}

	private showCalcComponent(): void
	{
		this.calcComponent.visible = true;
	}

	private showAnswer(): void
	{
		this.priceImage.visible = true;
		this.coatAndSweaterNoQuestionImage.visible = true;	
	}

	private hideHightButtonComponent(): void
	{
		this.expensiveButtonComponent.visible = false;
	}

	private hideAlertAndOperationGroup(): void
	{
		this.alertAndOperationGroup.visible = false;
	}

	private hideCoatAndSweaterImage(): void
	{
		this.coatAndSweaterImage.visible = false;
	}
	
}