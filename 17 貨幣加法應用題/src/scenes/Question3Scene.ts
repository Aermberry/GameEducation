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

	private hideAnimation: egret.tween.TweenGroup;
	private lastWeekAnimation: egret.tween.TweenGroup;
	private currentWeekAnimation: egret.tween.TweenGroup;

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
		this.playLastWeekAnimation();
		await lzlib.SoundUtility.playSound('streamsound3_0_mp3');
		this.playCurrentWeekAnimation();
		await lzlib.SoundUtility.playSound('streamsound3_1_mp3');
		await lzlib.SoundUtility.playSound('streamsound3_2_mp3');
		this.showCalcComponent();
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
		
	}

	private async onCalcComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.calcComponent.visible = false;
		await lzlib.SoundUtility.playSound('streamsound3_3_mp3');
		this.playHideAnimation();
		this.formulaComponent.showTitleImage();
		this.formulaComponent.showLeftImage();
		await lzlib.SoundUtility.playSound('streamsound3_4_mp3');
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound3_5_mp3');
		this.showYuanAndJiao();
		await lzlib.SoundUtility.playSound('streamsound3_6_mp3');
		this.showPriceLeft();
		this.showPriceRight();
		this.showLineFormulaImage();
		lzlib.SoundUtility.playSound('streamsound3_7_mp3');
		await lzlib.ThreadUtility.sleep(4000);
		this.showGeWei();
		lzlib.SoundUtility.playSound('streamsound3_8_mp3');
		await lzlib.ThreadUtility.sleep(6000);
		this.showShiWei();
		this.showBaiWei();
		this.formulaComponent.showResultImage();
		lzlib.SoundUtility.playSound('streamsound3_9_mp3');

	}

	private playLastWeekAnimation(): void
	{
		this.lastWeekAnimation.play(0);
	}

	private playCurrentWeekAnimation(): void
	{
		this.currentWeekAnimation.play(0);
	}

	private playHideAnimation(): void
	{
		this.hideAnimation.play(0);
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
	
}