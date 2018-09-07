class Question2Scene extends eui.Component implements  eui.UIComponent {
	
	private sportswomanImage: eui.Image;
	private formula2AnswerImage: eui.Image;
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

	private async onMuchButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.showWrongAlert();
		await lzlib.SoundUtility.playSound('streamsound2_2_mp3');
		this.cloudAlertComponent.hideAlert();
	}

	private async onLessButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.hideAlert();
		this.cloudAlertComponent.showCorrectAlert();
		this.hideHightButtonComponent();
		await lzlib.SoundUtility.playSound('streamsound2_3_mp3');
		await lzlib.ThreadUtility.sleep(1000);
		this.cloudAlertComponent.hideAlert();
		this.showSportswomanImage();
		this.showCalcComponent();
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
		await lzlib.SoundUtility.playSound('streamsound2_4_mp3');
		this.formulaComponent.showLeftImage();
		await lzlib.SoundUtility.playSound('streamsound2_5_mp3');
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound2_6_mp3');
		this.formulaComponent.showResultImage();
		await lzlib.SoundUtility.playSound('streamsound2_7_mp3');
		this.showAnswer();
	}


	private playStartAnimation(): void
	{
		this.startAnimation.play();
	}

	private async playMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound2_0_mp3');
		await lzlib.SoundUtility.playSound('streamsound2_1_mp3');
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

	private showAnswer(): void
	{
		this.formula2AnswerImage.visible = true;
	}

	private showSportswomanImage(): void
	{
		this.sportswomanImage.visible = true;
	}

	private hideHightButtonComponent(): void
	{
		this.muchButtonComponent.visible = false;
	}
	
	private hideAlertAndOperationGroup(): void
	{
		this.alertAndOperationGroup.visible = false;
	}
}