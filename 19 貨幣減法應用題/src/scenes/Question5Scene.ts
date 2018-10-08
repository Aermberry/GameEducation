class Question5Scene extends eui.Component implements  eui.UIComponent {
	
	private shiLabel: eui.Label;
	private	geLabel: eui.Label;
	private baiRestLabel: eui.Label;
	private shiRestLabel: eui.Label;
	private geRestLabel: eui.Label;
	private baiUnderlineRect: eui.Rect;
	private shiUnderlineRect: eui.Rect;
	private geUnderlineRect: eui.Rect;
	private tenyuanGroup: eui.Group;
	private yuanAndJiao: eui.Group;
	private priceLeftGroup: eui.Group;
	private priceRightGroup: eui.Group;
	private lineFormulaImage: eui.Image;
	private brotherAndToycarImage: eui.Image;
	private calcComponent: CalcComponents;
	private formulaComponent: FormulaComponent;
	private lastQuestionComponent: LastQuestionComponent;

	private startAnimation: egret.tween.TweenGroup;
	private jiaoFlickerAnimation: egret.tween.TweenGroup;
	private jiaoAndRestFlickerAnimation: egret.tween.TweenGroup;
	private yuanAndRestFlickerAnimation: egret.tween.TweenGroup;

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
		this.lastQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLastQuestionTap, this);
		this.playStartAnimation();
		await this.playMP3();
		this.showCalcComponent();
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
	}

	private async onCalcComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.calcComponent.visible = false;
		await lzlib.SoundUtility.playSound('streamsound5_2_mp3');
		this.hideToyCarAndBrother();
		this.formulaComponent.showTitleImage();
		this.formulaComponent.showLeftImage();
		await lzlib.SoundUtility.playSound('streamsound5_3_mp3');
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound5_4_mp3');
		this.showYuanAndJiao();
		this.showPriceLeft();
		this.showPriceRight();
		this.showLineFormulaImage();
		await lzlib.SoundUtility.playSound('streamsound5_5_mp3');
		this.jiaoFlickerAnimation.play();
		await lzlib.SoundUtility.playSound('streamsound5_6_mp3');
		await lzlib.SoundUtility.playSound('streamsound5_7_mp3');
		this.showUnderLineAndRestBaiWei();
		this.showUnderLineAndRestShiWei();
		await lzlib.SoundUtility.playSound('streamsound5_8_mp3');
		this.showUnderLineAndRestGeWei();
		await lzlib.ThreadUtility.sleep(500);
		this.jiaoAndRestFlickerAnimation.play();
		await lzlib.SoundUtility.playSound('streamsound5_9_mp3');
		this.showGeWei();
		this.yuanAndRestFlickerAnimation.play();
		await lzlib.SoundUtility.playSound('streamsound5_10_mp3');
		this.showShiWei();
		lzlib.SoundUtility.playSound('streamsound5_11_mp3');
		await lzlib.ThreadUtility.sleep(1500);
		this.formulaComponent.showResultImage();
	}

	private onLastQuestionTap(): void
	{
		Main.instance.gotoScene(new Question4Scene());
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

	private showUnderLineAndRestBaiWei(): void
	{
		this.baiRestLabel.visible = true;	
		this.baiUnderlineRect.visible = true;
	}

	private showUnderLineAndRestShiWei(): void
	{
		this.shiRestLabel.visible = true;
		this.shiUnderlineRect.visible = true;	
	}

	private showUnderLineAndRestGeWei(): void
	{
		this.geRestLabel.visible = true;
		this.geUnderlineRect.visible = true;	
	}

	private async playMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound5_0_mp3');
		await lzlib.SoundUtility.playSound('streamsound5_1_mp3');
	}

	private playStartAnimation(): void
	{
		this.startAnimation.play();
	}

	private hideToyCarAndBrother(): void
	{	
		this.tenyuanGroup.visible = false;
		this.brotherAndToycarImage.visible = false;
	}

}