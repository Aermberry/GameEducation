class Question1Scene extends eui.Component implements  eui.UIComponent {

	private questionMarkImage: eui.Image;
	private xiaofangHeightImage: eui.Image;
	private alertAndOperationGroup: eui.Group;
	private hightButtonComponent: ButtonComponent;
	private shortButtonComponent: ButtonComponent;
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
		await this.playMP3();
		await lzlib.ThreadUtility.sleep(1000);
		this.showButton();
		this.hightButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHightButtonComponentTap, this);
		this.shortButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShortButtonComponentTap, this);
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
	}

	private async onHightButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.showWrongAlert();
		await lzlib.SoundUtility.playSound('streamsound_4_mp3');
		this.cloudAlertComponent.hideAlert();
	}

	private async onShortButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.hideAlert();
		this.cloudAlertComponent.showCorrectAlert();
		this.hideHightButtonComponent();
		await lzlib.SoundUtility.playSound('streamsound_5_mp3');
		await lzlib.ThreadUtility.sleep(1000);
		this.cloudAlertComponent.hideAlert();
		this.showCalcComponent();
	}

	private onNextQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question2Scene());
	}

	private async onCalcComponentTap(): Promise<void>
	{
		this.hideAlertAndOperationGroup();
		this.formulaComponent.showTitleImage();
		await lzlib.SoundUtility.playSound('streamsound_6_mp3');
		this.formulaComponent.showLeftImage();
		await lzlib.SoundUtility.playSound('streamsound_7_mp3');
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound_8_mp3');
		this.formulaComponent.showResultImage();
		await lzlib.SoundUtility.playSound('streamsound_9_mp3');
		this.showAnswer();
	}


	private playStartAnimation(): void
	{
		this.startAnimation.play();
	}

	private async playMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound_0_mp3');
		await lzlib.SoundUtility.playSound('streamsound_1_mp3');
		await lzlib.SoundUtility.playSound('streamsound_2_mp3');
		await lzlib.SoundUtility.playSound('streamsound_3_mp3');
	}

	private showCalcComponent(): void
	{
		this.calcComponent.visible = true;
	}
	
	private showButton(): void
	{
		this.hightButtonComponent.visible = true;
		this.shortButtonComponent.visible = true;
	}

	private showAnswer(): void
	{
		this.xiaofangHeightImage.visible = true;
		this.questionMarkImage.alpha = 0;
	}

	private hideHightButtonComponent(): void
	{
		this.hightButtonComponent.visible = false;
	}

	private hideAlertAndOperationGroup(): void
	{
		this.alertAndOperationGroup.visible = false;
	}

}