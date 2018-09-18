class Question1Scene extends eui.Component implements  eui.UIComponent {
	
	private tenyuanGroup: eui.Group;
	private yuanGroup1: eui.Group;
	private yuanGroup2: eui.Group;
	private jiaoGroup1: eui.Group;
	private jiaoGroup2: eui.Group;
	private textBackgroundImage: eui.Image;
	private questionStartImage: eui.Image;
	private yuanAndJiao: eui.Group;
	private priceLeftGroup: eui.Group;
	private priceRightGroup: eui.Group;
	private shiUnderlineRect: eui.Rect;
	private geUnderlineRect: eui.Rect;
	private shiRestLabel: eui.Label;
	private geRestLabel: eui.Label;
	private geLabel: eui.Label;
	private shiLabel: eui.Label;
	private baiLabel: eui.Label;
	private lineFormulaImage: eui.Image;
	private calcComponent: CalcComponents;
	private formulaComponent: FormulaComponent;
	private nextQuestionComponent: NextQuestionComponent;

	private geFlickerAnimation: egret.tween.TweenGroup;
	private yuanCoinMoveAnimation: egret.tween.TweenGroup;
	private yuanFlickerAnimation: egret.tween.TweenGroup;
	private showJiaoAnimation: egret.tween.TweenGroup;
	private alphaJiaoAnimation: egret.tween.TweenGroup;
	private alphaYuanAnimation: egret.tween.TweenGroup;
	private alphaTenYuanAnimation: egret.tween.TweenGroup;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		this.nextQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionTap, this);
		this.playStartMP3AndShow();
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
	}

	private async onCalcComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.calcComponent.visible = false;
		await lzlib.SoundUtility.playSound('streamsound1_2_mp3');
		this.formulaComponent.showTitleImage();
		await lzlib.ThreadUtility.sleep(500);
		this.formulaComponent.showLeftImage();
		await lzlib.SoundUtility.playSound('streamsound1_3_mp3');
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound1_4_mp3');
		this.showYuanAndJiao();
		await lzlib.SoundUtility.playSound('streamsound1_5_mp3');
		this.showPriceLeft();
		this.showCoin();
		await lzlib.SoundUtility.playSound('streamsound1_6_mp3');
		this.showPriceRight();
		await lzlib.SoundUtility.playSound('streamsound1_7_mp3');
		this.showLineFormulaImage();
		this.geFlickerAnimation.play();
		await lzlib.SoundUtility.playSound('streamsound1_8_mp3');
		await lzlib.SoundUtility.playSound('streamsound1_9_mp3');
		this.yuanCoinMoveAnimation.play();
		await lzlib.SoundUtility.playSound('streamsound1_10_mp3');
		this.yuanFlickerAnimation.play();
		await lzlib.SoundUtility.playSound('streamsound1_11_mp3');
		this.showShiUnderlineAndSuperScript();
		await lzlib.SoundUtility.playSound('streamsound1_12_mp3');
		this.showJiaoAnimation.play();
		await lzlib.SoundUtility.playSound('streamsound1_13_mp3');
		this.showGeUnderlineAndSuperScript();
		await lzlib.SoundUtility.playSound('streamsound1_14_mp3');
		await lzlib.SoundUtility.playSound('streamsound1_15_mp3');
		this.alphaJiaoAnimation.play();
		await lzlib.SoundUtility.playSound('streamsound1_16_mp3');
		this.showGeLabel();
		await lzlib.SoundUtility.playSound('streamsound1_17_mp3');
		this.alphaYuanAnimation.play();
		this.showShiLabel();
		await lzlib.SoundUtility.playSound('streamsound1_18_mp3');
		this.alphaTenYuanAnimation.play();
		this.showBaiLabel();
		lzlib.SoundUtility.playSound('streamsound1_19_mp3');
		await lzlib.ThreadUtility.sleep(6000);
		this.formulaComponent.showResultImage();
		await lzlib.SoundUtility.playSound('streamsound1_20_mp3');
	}

	private onNextQuestionTap(): void
	{
		Main.instance.gotoScene(new Question2Scene());
	}

	private showCoin(): void
	{
		this.tenyuanGroup.visible = true;
		this.yuanGroup1.visible = true;
		this.yuanGroup2.visible = true;
		this.jiaoGroup1.visible = true;
		this.yuanGroup2.visible = true;
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

	private showShiUnderlineAndSuperScript(): void
	{
		this.shiRestLabel.visible = true;
		this.shiUnderlineRect.visible = true;
	}

	private showGeUnderlineAndSuperScript(): void
	{
		this.geRestLabel.visible = true;
		this.geUnderlineRect.visible = true;
	}

	private async playStartMP3AndShow(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound1_0_mp3');
		this.showQuestion();
		await lzlib.SoundUtility.playSound('streamsound1_1_mp3');
		this.showCalcComponent();
	}
	
	
}