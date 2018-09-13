class Question4Scene extends eui.Component implements  eui.UIComponent {
	
	private height135ArrowImage: eui.Image;
	private height135LineRect: eui.Image;
	private heightButtonComponent: ButtonComponent;
	private shortButtonComponent: ButtonComponent;
	private calcComponent: CalcComponents;
	private alertAndOperationGroup: eui.Group;
	private nextQuestionComponent: NextQuestionComponent;
	private cloudAlertComponent: CloudAlertComponent;
	private formulaComponent: FormulaComponent;
	private lastQuestionComponent: LastQuestionComponent;
	
	private startAnimation: egret.tween.TweenGroup;
	private correctAnimation: egret.tween.TweenGroup;
	
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
		await this.playMP3Show();
		this.shortButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShortButtonComponentTap, this);
		this.heightButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHeightButtonComponentTap, this);
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
		this.nextQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionComponent, this);
		this.lastQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLastQuestionComponent, this);
	}

	private async onShortButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.showWrongAlert();
		await lzlib.SoundUtility.playSound('streamsound4_2_mp3');
		this.cloudAlertComponent.hideAlert();
	}

	private async onHeightButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.hideAlert();
		this.cloudAlertComponent.showCorrectAlert();
		this.playCorrectAnimation();
		this.hideButtonComponent();
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
		this.showAnswer();
		await lzlib.SoundUtility.playSound('streamsound4_7_mp3');
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

	private playCorrectAnimation(): void
	{
		this.correctAnimation.play();
	}

	private async playMP3Show(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound4_0_mp3');
		await lzlib.SoundUtility.playSound('streamsound4_1_mp3');
		this.showButton();
	}
		
	private showButton(): void
	{
		this.heightButtonComponent.visible = true;
		this.shortButtonComponent.visible = true;
	}

	private showCalcComponent(): void
	{
		this.calcComponent.visible = true;
	}

	private showAnswer(): void
	{
		this.height135LineRect.visible = true;
		this.height135ArrowImage.visible = true;
	}

	private hideButtonComponent(): void
	{
		this.shortButtonComponent.visible = false;
	}

	private hideAlertAndOperationGroup(): void
	{
		this.alertAndOperationGroup.visible = false;
	}

	
}