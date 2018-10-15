class Question1Scene extends eui.Component implements  eui.UIComponent {

	private alertAndOperationGroup: eui.Group;
	private muchButtonComponent: ButtonComponent;
	private lessButtonComponent: ButtonComponent;
	private calcComponent: CalcComponents;
	private cloudAlertComponent: CloudAlertComponent;
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
		this.playStartAnimation();
		await this.playMP3AndShow();
		await lzlib.ThreadUtility.sleep(1000);
		this.showButton();
		this.muchButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHightButtonComponentTap, this);
		this.lessButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShortButtonComponentTap, this);
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
	}

	private async onHightButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.hideAlert();
		this.cloudAlertComponent.showCorrectAlert();
		this.hideButtonComponent();
		await lzlib.SoundUtility.playSound('streamsound1_3_mp3');
		await lzlib.ThreadUtility.sleep(1000);
		this.cloudAlertComponent.hideAlert();
		this.showCalcComponent();
	}

	private async onShortButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.showWrongAlert();
		await lzlib.SoundUtility.playSound('streamsound1_2_mp3');
		this.cloudAlertComponent.hideAlert();
	}

	private onNextQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question2Scene());
	}

	private async onCalcComponentTap(): Promise<void>
	{
		this.hideAlertAndOperationGroup();
		this.formulaComponent.showTitleImage();
		await lzlib.SoundUtility.playSound('streamsound1_4_mp3');
		this.formulaComponent.showLeftImage();
		lzlib.SoundUtility.playSound('streamsound1_5_mp3');
		await lzlib.ThreadUtility.sleep(2000);
		this.formulaComponent.showRightImage();
		await lzlib.ThreadUtility.sleep(1000);
		this.formulaComponent.showResultImage();
		await lzlib.SoundUtility.playSound('streamsound1_6_mp3');
	}


	private playStartAnimation(): void
	{
		this.startAnimation.play();
	}

	private async playMP3AndShow(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound1_0_mp3');
		this.showCloudAlertComponent();
		await lzlib.SoundUtility.playSound('streamsound1_1_mp3');
		this.showButton();
	}

	private showCalcComponent(): void
	{
		this.calcComponent.visible = true;
	}

	private showCloudAlertComponent(): void
	{
		this.cloudAlertComponent.visible = true;
	}
	
	private showButton(): void
	{
		this.muchButtonComponent.visible = true;
		this.lessButtonComponent.visible = true;
	}

	private hideButtonComponent(): void
	{
		this.lessButtonComponent.visible = false;
	}

	private hideAlertAndOperationGroup(): void
	{
		this.alertAndOperationGroup.visible = false;
	}

}