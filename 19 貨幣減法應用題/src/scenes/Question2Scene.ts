class Question2Scene extends eui.Component implements  eui.UIComponent {
	
	private geLabel: eui.Label;
	private shiLabel: eui.Label;
	private baiLabel: eui.Label;
	private tenyuanGroup: eui.Group;
	private yuanGroup1: eui.Group;
	private yuanGroup2: eui.Group;
	private jiaoGroup1: eui.Group;
	private jiaoGroup2: eui.Group;
	private textBackgroundImage: eui.Image;
	private questionStartImage: eui.Image;
	private priceLeftGroup: eui.Group;
	private priceRightGroup: eui.Group;
	private yuanAndJiao: eui.Group;
	private calcComponent: CalcComponents;
	private formulaComponent: FormulaComponent;
	private lineFormulaImage: eui.Image;
	private nextQuestionComponent: NextQuestionComponent;
	private lastQuestionComponent: LastQuestionComponent;

	private geFlickerAnimation: egret.tween.TweenGroup;
	private alphaJiaoAnimation: egret.tween.TweenGroup;
	private calcYuanPartAnimation: egret.tween.TweenGroup;
	private flickerAndShowResultAnimation: egret.tween.TweenGroup;

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
		this.nextQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionTap, this);
		this.lastQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLastQuestionTap, this);
		await this.playStartMP3();
		this.showQuestion();
		await this.playQuestionMP3();
		this.showCalcComponent();
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
	}

	private async onCalcComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.calcComponent.visible = false;
		await lzlib.SoundUtility.playSound('streamsound2_2_mp3');
		this.formulaComponent.showTitleImage();
		await lzlib.ThreadUtility.sleep(500);
		this.formulaComponent.showLeftImage();
		await lzlib.SoundUtility.playSound('streamsound2_3_mp3');
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound2_4_mp3');
		this.showYuanAndJiao();
		await lzlib.SoundUtility.playSound('streamsound2_5_mp3');
		this.showPriceLeft();
		this.showCoin();
		await lzlib.SoundUtility.playSound('streamsound2_6_mp3');
		this.showPriceRight();
		await lzlib.SoundUtility.playSound('streamsound2_7_mp3');
		this.showLineFormulaImage();
		await lzlib.SoundUtility.playSound('streamsound2_8_mp3');
		this.geFlickerAnimation.play();
		await lzlib.SoundUtility.playSound('streamsound2_9_mp3');
		this.alphaJiaoAnimation.play();
		this.showGeLabel();
		await lzlib.SoundUtility.playSound('streamsound2_10_mp3');
		this.calcYuanPartAnimation.play();
		await lzlib.ThreadUtility.sleep(2500);
		this.flickerAndShowResultAnimation.play();
		await lzlib.SoundUtility.playSound('streamsound2_11_mp3');
		this.formulaComponent.showResultImage();
		await lzlib.SoundUtility.playSound('streamsound2_12_mp3');
	}

	private onNextQuestionTap(): void
	{
		Main.instance.gotoScene(new Question3Scene());
	}

	private onLastQuestionTap(): void
	{
		Main.instance.gotoScene(new Question1Scene());
	}

	private async playQuestionMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound2_1_mp3');
	}

	private async playStartMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound2_0_mp3');
	}

	private showCoin(): void
	{
		this.tenyuanGroup.visible = true;
		this.yuanGroup2.visible = true;
		this.jiaoGroup1.visible = true;
	}

	private showQuestion(): void
	{
		this.textBackgroundImage.visible = true;
		this.questionStartImage.visible = true;
	}

	private showCalcComponent(): void
	{
		this.calcComponent.visible = true;
	}

	private showYuanAndJiao(): void
	{
		this.yuanAndJiao.visible = true;
	}

	private showPriceLeft(): void
	{
		this.priceLeftGroup.visible = true;
	}

	private showPriceRight(): void
	{
		this.priceRightGroup.visible = true;

	}

	private showLineFormulaImage(): void
	{
		this.lineFormulaImage.visible = true;
	}
	
	private showGeLabel(): void
	{
		this.geLabel.visible = true;
	}

	private showShiLabel(): void
	{
		this.shiLabel.visible = true;
	}

	private showBaiLabel(): void
	{
		this.baiLabel.visible = true;
	}
}