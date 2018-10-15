class Question4Scene extends eui.Component implements  eui.UIComponent {
	
	private shiLabel: eui.Label;
	private	geLabel: eui.Label;
	private yuanGroup1: eui.Group;
	private yuanGroup2: eui.Group;
	private yuanGroup3: eui.Group;
	private jiaoGroup1: eui.Group;
	private priceLeftGroup: eui.Group;
	private priceRightGroup: eui.Group;
	private yuanAndJiao: eui.Group;
	private lineFormulaImage: eui.Image;
	private brotherAndHamburgerImage: eui.Image;
	private calcComponent: CalcComponents;
	private formulaComponent: FormulaComponent;
	private nextQuestionComponent: NextQuestionComponent;
	private lastQuestionComponent: LastQuestionComponent;

	private startAnimation: egret.tween.TweenGroup;
	private jiaoFlickerAnimation: egret.tween.TweenGroup;
	private tenyuanFlickerAnimation: egret.tween.TweenGroup;
	// private priceRightAnimation: egret.tween.TweenGroup;
	
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
		this.playStartAnimation();
		await this.playMP3();
		this.showCalcComponent();
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
	}

	private async onCalcComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.calcComponent.visible = false;
		lzlib.SoundUtility.playSound('streamsound4_2_mp3');
		this.hideCoinAndBrother();
		this.formulaComponent.showTitleImage();
		this.formulaComponent.showLeftImage();
		await lzlib.SoundUtility.playSound('streamsound4_3_mp3');
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound4_4_mp3');
		this.showYuanAndJiao();
		this.showPriceLeft();
		this.showPriceRight();
		this.showLineFormulaImage();
		await lzlib.SoundUtility.playSound('streamsound4_5_mp3');
		this.jiaoFlickerAnimation.play();
		await lzlib.SoundUtility.playSound('streamsound4_6_mp3');
		this.showGeWei();
		this.tenyuanFlickerAnimation.play();
		await lzlib.SoundUtility.playSound('streamsound4_7_mp3');
		this.showShiWei();
		lzlib.SoundUtility.playSound('streamsound4_8_mp3');
		await lzlib.ThreadUtility.sleep(2000);
		this.formulaComponent.showResultImage();

	}

	private onNextQuestionTap(): void
	{
		Main.instance.gotoScene(new Question5Scene());
	}

	private onLastQuestionTap(): void
	{
		Main.instance.gotoScene(new Question3Scene());
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

	private showGeWei(): void
	{
		this.geLabel.visible = true;
	}

	private showShiWei(): void
	{
		this.shiLabel.visible = true;
	}
	
	private async playMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound4_0_mp3');
		await lzlib.SoundUtility.playSound('streamsound4_1_mp3');
	}

	private playStartAnimation(): void
	{
		this.startAnimation.play();
	}

	private hideCoinAndBrother(): void
	{
		this.yuanGroup1.visible = false;
		this.yuanGroup2.visible = false;
		this.yuanGroup3.visible = false;
		this.jiaoGroup1.visible = false;
		this.brotherAndHamburgerImage.visible = false;
	}
	
}