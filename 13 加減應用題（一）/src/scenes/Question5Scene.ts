class Question5Scene extends eui.Component implements  eui.UIComponent {
	
	private questionMarkImage: eui.Image;
	private jiaPorkImage: eui.Image;
	private jiaSoldPorkInfoImage: eui.Image;
	private muchButtonComponent: ButtonComponent;
	private lessButtonComponent: ButtonComponent;
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
		this.lessButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLessButtonComponentTap, this);
		this.muchButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMuchButtonComponentTap, this);
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
		this.nextQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionComponent, this);
		this.lastQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLastQuestionComponent, this);
	}

	private async onLessButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.hideAlert();
		this.showPork();
		this.cloudAlertComponent.showCorrectAlert();
		this.hideQuestionMark();
		this.hideWrongButtonComponent();
		await lzlib.SoundUtility.playSound('streamsound5_3_mp3');
		await lzlib.ThreadUtility.sleep(1000);
		this.cloudAlertComponent.hideAlert();
		this.showCalcComponent();
	}

	private async onMuchButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.showWrongAlert();
		await lzlib.SoundUtility.playSound('streamsound4_2_mp3');
		this.cloudAlertComponent.hideAlert();
	}

	private async onCalcComponentTap(): Promise<void>
	{
		this.hideAlertAndOperationGroup();
		this.formulaComponent.showTitleImage();
		await lzlib.SoundUtility.playSound('streamsound5_4_mp3');
		this.formulaComponent.showLeftImage();
		await lzlib.SoundUtility.playSound('streamsound5_5_mp3');
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound5_6_mp3');
		this.formulaComponent.showResultImage();
		await lzlib.SoundUtility.playSound('streamsound5_7_mp3');
		this.hideCoatAndSweaterImage();
		this.showAnswer();
	}

	private onNextQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question6Scene());
	}

	private onLastQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question4Scene());
	}

	private playStartAnimation(): void
	{
		this.startAnimation.play();
	}

	private async playMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound5_0_mp3');
		await lzlib.SoundUtility.playSound('streamsound5_1_mp3');
	}
		
	private showButton(): void
	{
		this.muchButtonComponent.visible = true;
		this.lessButtonComponent.visible = true;
	}

	private showCalcComponent(): void
	{
		this.calcComponent.visible = true;
	}

	private showPork(): void
	{
		this.jiaPorkImage.visible = true;
	}

	private showAnswer(): void
	{
		this.jiaSoldPorkInfoImage.visible = true;
	}

	private hideQuestionMark(): void
	{
		this.questionMarkImage.alpha = 0;
	}

	private hideWrongButtonComponent(): void
	{
		this.muchButtonComponent.visible = false;
	}

	private hideAlertAndOperationGroup(): void
	{
		this.alertAndOperationGroup.visible = false;
	}

	private hideCoatAndSweaterImage(): void
	{
		
	}
	
}