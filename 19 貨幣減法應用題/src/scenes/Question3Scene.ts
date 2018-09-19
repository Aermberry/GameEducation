class Question3Scene extends eui.Component implements  eui.UIComponent {
	
	private baiLabel: eui.Label;
	private shiLabel: eui.Label;
	private	geLabel: eui.Label;
	private yuanAndJiao: eui.Group;
	private formulaComponent: FormulaComponent;
	private calcComponent: CalcComponents;
	private lineFormulaImage: eui.Image;
	private priceLeftGroup: eui.Group;
	private priceRightGroup: eui.Group;
	private nextQuestionComponent: NextQuestionComponent;
	private lastQuestionComponent: LastQuestionComponent;

	private startAnimation: egret.tween.TweenGroup;
	private flickerCoinAnimation: egret.tween.TweenGroup;
	private hideSisterAndBookAnimation: egret.tween.TweenGroup;
	private jiaoFlickerAnimation: egret.tween.TweenGroup;
	private yuanFlickerAnimation: egret.tween.TweenGroup;

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
		await lzlib.SoundUtility.playSound('streamsound3_0_mp3');
		this.playFlickertAnimation();
		await lzlib.SoundUtility.playSound('streamsound3_1_mp3');
		this.showCalcComponent();
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
		
	}

	private async onCalcComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.calcComponent.visible = false;
		await lzlib.SoundUtility.playSound('streamsound3_2_mp3');
		this.PlaySisterAndBook();
		this.formulaComponent.showTitleImage();
		this.formulaComponent.showLeftImage();
		await lzlib.SoundUtility.playSound('streamsound3_3_mp3');
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound3_4_mp3');
		this.showYuanAndJiao();
		this.showPriceLeft();
		this.showPriceRight();
		this.showLineFormulaImage();
		await lzlib.SoundUtility.playSound('streamsound3_5_mp3');
		this.jiaoFlickerAnimation.play();
		await lzlib.SoundUtility.playSound('streamsound3_6_mp3');
		this.showGeWei();
		this.yuanFlickerAnimation.play();
		await lzlib.SoundUtility.playSound('streamsound3_7_mp3');
		this.showShiWei();
		this.showBaiWei();
		lzlib.SoundUtility.playSound('streamsound3_8_mp3');
		await lzlib.ThreadUtility.sleep(2000);
		this.formulaComponent.showResultImage();

	}

	private onNextQuestionTap(): void
	{
		Main.instance.gotoScene(new Question4Scene());
	}

	private onLastQuestionTap(): void
	{
		Main.instance.gotoScene(new Question2Scene());
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

	private showBaiWei(): void
	{
		this.baiLabel.visible = true;
	}

	private playStartAnimation(): void
	{
		this.startAnimation.play();
	}

	private playFlickertAnimation(): void
	{
		this.flickerCoinAnimation.play();
	}

	private PlaySisterAndBook(): void
	{
		this.hideSisterAndBookAnimation.play()
	}
	
}