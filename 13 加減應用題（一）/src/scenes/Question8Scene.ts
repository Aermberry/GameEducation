class Question8Scene extends eui.Component implements  eui.UIComponent {
	
	private teacherGreenboxCorrectImage: eui.Image;
	private clotheCount3BImage: eui.Image;
	private questionMarkImage: eui.Image;
	private drinkLessGroup: eui.Group;
	private alertAndOperationGroup: eui.Group;
	private muchButtonComponent: ButtonComponent;
	private lessButtonComponent: ButtonComponent;
	private calcComponent: CalcComponents;
	private cloudAlertComponent: CloudAlertComponent;
	private formulaComponent: FormulaComponent;
	private nextQuestionComponent: NextQuestionComponent;
	private lastQuestionComponent: LastQuestionComponent;
	
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
		this.lastQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLastQuestionComponent, this);
		await this.playMP3AndShow();
		this.muchButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHightButtonComponentTap, this);
		this.lessButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShortButtonComponentTap, this);
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
		this.lastQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLastQuestionComponent, this);
	}

	private async onHightButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.showWrongAlert();
		await lzlib.SoundUtility.playSound('streamsound8_2_mp3');
		this.cloudAlertComponent.hideAlert();
	}

	private async onShortButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.hideAlert();
		this.showDrinkLessGroup();
		this.cloudAlertComponent.showCorrectAlert();
		this.hideWrongButtonComponent();
		await lzlib.SoundUtility.playSound('streamsound8_3_mp3');
		await lzlib.ThreadUtility.sleep(1000);
		this.cloudAlertComponent.hideAlert();
		this.showCalcComponent();
	}

	private async onCalcComponentTap(): Promise<void>
	{
		this.hideAlertAndOperationGroup();
		this.formulaComponent.showTitleImage();
		await lzlib.SoundUtility.playSound('streamsound8_4_mp3');
		this.formulaComponent.showLeftImage();
		await lzlib.SoundUtility.playSound('streamsound8_5_mp3');
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound8_6_mp3');
		this.formulaComponent.showResultImage();
		await lzlib.SoundUtility.playSound('streamsound8_7_mp3');
		this.hideQuestionMarkImage();
	}

	private onLastQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question7Scene());
	}

	private async playMP3AndShow(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound8_0_mp3');
		this.showCloudAlertComponent();
		await lzlib.SoundUtility.playSound('streamsound8_1_mp3');
		this.showButton();

	}

	private showCalcComponent(): void
	{
		this.calcComponent.visible = true;
	}

	private showDrinkLessGroup(): void
	{
		this.drinkLessGroup.visible = true;
	}
	
	private showButton(): void
	{
		this.muchButtonComponent.visible = true;
		this.lessButtonComponent.visible = true;
	}

	private showCloudAlertComponent(): void
	{
		this.cloudAlertComponent.visible = true;
	}

	private hideQuestionMarkImage(): void
	{
		this.questionMarkImage.visible = false;
	}

	private hideWrongButtonComponent(): void
	{
		this.muchButtonComponent.visible = false;
	}

	private hideAlertAndOperationGroup(): void
	{
		this.alertAndOperationGroup.visible = false;
	}
	
}