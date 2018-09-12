class Question2Scene extends eui.Component implements  eui.UIComponent {
	
	private textBackgroundImage: eui.Image;
	private question2StartImage: eui.Image;
	private questionMarkImage: eui.Image;
	private	sisterImage: eui.Image;
	private sisterAndMoneyImage: eui.Image;
	private sisterAndMoneyAndCoinImage: eui.Image;
	private messageBorderSisterImage: eui.Image;
	private alertAndOperationGroup: eui.Group;
	private lessButtonComponent: ButtonComponent;
	private muchButtonComponent: ButtonComponent;
	private calcComponent: CalcComponents;
	private cloudAlertComponent: CloudAlertComponent;
	private formulaComponent: FormulaComponent;
	private nextQuestionComponent: NextQuestionComponent;
	private lastQuestionComponent: LastQuestionComponent;

	private startAnimation: egret.tween.TweenGroup;
	
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected async childrenCreated():Promise<void>
	{
		super.childrenCreated();
		this.nextQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionComponent, this);
		this.lastQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLastQuestionComponent, this);
		await this.playMP3AndShow();
		await lzlib.ThreadUtility.sleep(1000);
		this.showButton();
		this.lessButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLessButtonComponentTap, this);
		this.muchButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMuchButtonComponentTap, this);
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
	}

	private async onMuchButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.hideAlert();
		this.cloudAlertComponent.showCorrectAlert();
		this.hideButtonComponent();
		await lzlib.SoundUtility.playSound('streamsound2_5_mp3');
		await lzlib.ThreadUtility.sleep(1000);
		this.cloudAlertComponent.hideAlert();
		this.showCalcComponent();
	}

	private async onLessButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{

		this.cloudAlertComponent.showWrongAlert();
		await lzlib.SoundUtility.playSound('streamsound2_4_mp3');
		this.cloudAlertComponent.hideAlert();
	}

	private onNextQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question3Scene());
	}

	private onLastQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question1Scene());
	}

	private async onCalcComponentTap(): Promise<void>
	{
		this.hideAlertAndOperationGroup();
		this.formulaComponent.showTitleImage();
		await lzlib.SoundUtility.playSound('streamsound2_6_mp3');
		this.formulaComponent.showLeftImage();
		this.hideQuestionMark();
		this.showSisterAndMoneyImage();
		await lzlib.SoundUtility.playSound('streamsound2_7_mp3');
		this.formulaComponent.showRightImage();
		this.showSisterAndMoneyAndCoinImage();
		await lzlib.SoundUtility.playSound('streamsound2_8_mp3');
		this.formulaComponent.showResultImage();
		await lzlib.SoundUtility.playSound('streamsound2_9_mp3');
	}

	private playStartAnimation(): void
	{
		this.startAnimation.play();
	}

	private async playMP3AndShow(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound2_0_mp3');
		this.showSister();
		await lzlib.SoundUtility.playSound('streamsound2_1_mp3');
		this.showQuestion();
		await lzlib.SoundUtility.playSound('streamsound2_2_mp3');
		this.showCloudAlertComponent();
		await lzlib.SoundUtility.playSound('streamsound2_3_mp3');
		this.showButton();

	}
		
	private showSister(): void
	{
		this.sisterImage.visible = true;
		this.questionMarkImage.visible = true;
	}

	private showQuestion(): void
	{
		this.textBackgroundImage.visible = true;
		this.question2StartImage.visible = true;
	}

	private showSisterAndMoneyImage(): void
	{
		this.sisterAndMoneyImage.visible = true;
	}

	private showSisterAndMoneyAndCoinImage(): void
	{
		this.sisterAndMoneyAndCoinImage.visible = true;
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

	private showCalcComponent(): void
	{
		this.calcComponent.visible = true;
	}

	private hideQuestionMark(): void
	{
		this.questionMarkImage.visible = false;
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