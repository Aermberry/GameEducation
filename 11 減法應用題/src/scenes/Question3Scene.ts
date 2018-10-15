class Question3Scene extends eui.Component implements  eui.UIComponent {
		
	private calcComponent: CalcComponents;
	private nextQuestionComponent: NextQuestionComponent;
	private formulaComponent: FormulaComponent;
	private lastQuestionComponent: LastQuestionComponent;
	
	private startAnimation: egret.tween.TweenGroup;
	private waterFlicker: egret.tween.TweenGroup;
	
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
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
	}

	private async onCalcComponentTap(): Promise<void>
	{
		this.hideCalcComponent();
		await lzlib.SoundUtility.playSound('streamsound3_1_mp3');
		await this.waterFlickerAnimation();
		await lzlib.ThreadUtility.sleep(1750);
		this.formulaComponent.showTitleImage();
		await lzlib.SoundUtility.playSound('streamsound3_2_mp3');
		this.formulaComponent.showLeftImage();
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound3_3_mp3');
		this.formulaComponent.showResultImage();
		await lzlib.SoundUtility.playSound('streamsound3_4_mp3');
	}

	private onNextQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question4Scene());
	}

	private onLastQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question2Scene());
	}

	private async playMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound3_0_mp3');
	}

	private playStartAnimation(): void
	{
		this.startAnimation.play();
	}

	private waterFlickerAnimation(): void
	{
		this.waterFlicker.play();
	}
	
	private hideCalcComponent(): void
	{
		this.calcComponent.visible = false;
	}

	
}