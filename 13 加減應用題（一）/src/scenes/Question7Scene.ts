class Question7Scene extends eui.Component implements  eui.UIComponent {
	
	private zhiqiangNumberImage: eui.Image;
	private stickerPaperNumberImage: eui.Image;
	private sisterAndYoungerBrotherCorrectImage: eui.Image;
	private sisterAndYoungerBrotherAndQuestionMArkImage: eui.Image;
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
		this.nextQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionComponent, this);
		this.lastQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLastQuestionComponent, this);
		await this.playMP3AndShow();
		this.muchButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHightButtonComponentTap, this);
		this.lessButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShortButtonComponentTap, this);
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
		this.nextQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionComponent, this);
		this.lastQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLastQuestionComponent, this);
	}

	private async onHightButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.showWrongAlert();
		await lzlib.SoundUtility.playSound('streamsound7_2_mp3');
		this.cloudAlertComponent.hideAlert();
	}

	private async onShortButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.hideAlert();
		this.cloudAlertComponent.showCorrectAlert();
		this.showYoungeBrotherStickerPaper();
		this.hideWrongButtonComponent();
		await lzlib.SoundUtility.playSound('streamsound7_3_mp3');
		await lzlib.ThreadUtility.sleep(1000);
		this.cloudAlertComponent.hideAlert();
		this.showCalcComponent();
	}

	private onNextQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question8Scene());
	}

	private onLastQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question6Scene());
	}

	private async onCalcComponentTap(): Promise<void>
	{
		this.hideAlertAndOperationGroup();
		this.formulaComponent.showTitleImage();
		await lzlib.SoundUtility.playSound('streamsound7_4_mp3');
		this.formulaComponent.showLeftImage();
		await lzlib.SoundUtility.playSound('streamsound7_5_mp3');
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound7_6_mp3');
		this.formulaComponent.showResultImage();
		this.showAnswer();
		await lzlib.SoundUtility.playSound('streamsound7_7_mp3');
	}

	private async playMP3AndShow(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound7_0_mp3');
		this.showCloudAlertComponent();
		await lzlib.SoundUtility.playSound('streamsound7_1_mp3');
		this.showButton();
	}

	private showCalcComponent(): void
	{
		this.calcComponent.visible = true;
	}
	
	private showButton(): void
	{
		this.muchButtonComponent.visible = true;
		this.lessButtonComponent.visible = true;
	}

	private showAnswer(): void
	{
		this.stickerPaperNumberImage.visible = true;
	}

	private showCloudAlertComponent(): void
	{
		this.cloudAlertComponent.visible = true;
	}

	private showYoungeBrotherStickerPaper(): void
	{
		this.sisterAndYoungerBrotherCorrectImage.visible = true;
		this.sisterAndYoungerBrotherAndQuestionMArkImage.visible = false;
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