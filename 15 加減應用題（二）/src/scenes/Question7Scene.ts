class Question7Scene extends eui.Component implements  eui.UIComponent {
	
	private zhiqiangNumberImage: eui.Image;
	private zhiqiangMovieClipPlayer: MovieClipPlayer;
	private damingMovieClipPlayer: MovieClipPlayer;
	private alertAndOperationGroup: eui.Group;
	private muchButtonComponent: ButtonComponent;
	private lessButtonComponent: ButtonComponent;
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


	protected async childrenCreated(): Promise<void>
	{
		super.childrenCreated();
		this.playStartAnimation();
		await this.playMP3();
		await lzlib.ThreadUtility.sleep(5000);
		this.showButton();
		this.muchButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHightButtonComponentTap, this);
		this.lessButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShortButtonComponentTap, this);
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
		this.nextQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionComponent, this);
		this.lastQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLastQuestionComponent, this);
	}

	private async onHightButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.hideAlert();
		this.cloudAlertComponent.showCorrectAlert();
		this.hideWrongButtonComponent();
		this.damingMovieClipPlayer.stop();
		await lzlib.SoundUtility.playSound('streamsound7_3_mp3');
		await lzlib.ThreadUtility.sleep(1000);
		this.cloudAlertComponent.hideAlert();
		this.showCalcComponent();
	}

	private async onShortButtonComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.cloudAlertComponent.showWrongAlert();
		await lzlib.SoundUtility.playSound('streamsound7_2_mp3');
		this.cloudAlertComponent.hideAlert();
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
		this.zhiqiangMovieClipPlayer.stop();
		this.formulaComponent.showTitleImage();
		await lzlib.SoundUtility.playSound('streamsound7_4_mp3');
		this.formulaComponent.showLeftImage();
		await lzlib.SoundUtility.playSound('streamsound7_5_mp3');
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound7_6_mp3');
		this.formulaComponent.showResultImage();
		await lzlib.SoundUtility.playSound('streamsound7_7_mp3');
		this.showAnswer();
	}


	private playStartAnimation(): void
	{
		this.startAnimation.play();
	}


	private async playMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound7_0_mp3');
		await lzlib.SoundUtility.playSound('streamsound7_1_mp3');

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
		this.zhiqiangNumberImage.visible = true;
	}

	private hideWrongButtonComponent(): void
	{
		this.lessButtonComponent.visible = false;
	}

	private hideAlertAndOperationGroup(): void
	{
		this.alertAndOperationGroup.visible = false;
	}
	
}