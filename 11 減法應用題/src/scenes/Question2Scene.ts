class Question2Scene extends eui.Component implements  eui.UIComponent {
	
	private calcComponent: CalcComponents;
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
		this.playStartAnimation();
		await this.playMP3();
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
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
		this.hideCalcComponent();
		this.formulaComponent.showTitleImage();
		await lzlib.SoundUtility.playSound('streamsound2_2_mp3');
		await lzlib.SoundUtility.playSound('streamsound2_3_mp3');
		this.formulaComponent.showLeftImage();
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound2_4_mp3');
		this.formulaComponent.showResultImage();
		await lzlib.SoundUtility.playSound('streamsound2_5_mp3');
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

	private showCalcComponent(): void
	{
		this.calcComponent.visible = true;
	}
	
	private hideCalcComponent(): void
	{
		this.calcComponent.visible = false;
	}
}