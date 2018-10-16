class Question1Scene extends eui.Component implements  eui.UIComponent {
	
	private schoolBagImage: eui.Image;
	private waterCupImage: eui.Image;
	private yuanAndJiao: eui.Group;
	private priceLeftGroup: eui.Group;
	private priceRightGroup: eui.Group;
	private lineFormulaImage: eui.Image;
	private tenyuanLeftCoinComponent: CoinComponent;
	private jiaoLeftCoinComponent: CoinComponent;
	private jiaoRightCoinComponent1: CoinComponent;
	private jiaoRightCoinComponent2: CoinComponent;
	private tenyuanRightCoinComponent: CoinComponent;
	private calcComponent: CalcComponents;
	private formulaComponent: FormulaComponent;
	private nextQuestionComponent: NextQuestionComponent;

	private startAnimation: egret.tween.TweenGroup;
	private goodsMoveAnimation: egret.tween.TweenGroup;
	private jiaoCoinMoveAnimation: egret.tween.TweenGroup;
	private coinMoveRight: egret.tween.TweenGroup;
	private yuanCoinMoveAnimation: egret.tween.TweenGroup;

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
		this.playStartAnimation();
		this.playStartMP3();
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
	}

	private async onCalcComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.calcComponent.visible = false;
		this.playOnCalcTapMP3();
		await lzlib.ThreadUtility.sleep(4500);
		this.goodsMoveAnimation.play(0);
		await lzlib.ThreadUtility.sleep(7000);
		this.hideGoods();
		this.formulaComponent.showTitleImage();
		this.formulaComponent.showLeftImage();
		await lzlib.SoundUtility.playSound('streamsound1_2_mp3');
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound1_3_mp3');
		this.showYuanAndJiao();
		await lzlib.SoundUtility.playSound('streamsound1_4_mp3');
		this.showPriceLeft();
		await lzlib.SoundUtility.playSound('streamsound1_5_mp3');
		this.showPriceRight();
		await lzlib.SoundUtility.playSound('streamsound1_6_mp3');
		this.showLineFormulaImage();
		this.jiaoCoinMoveAnimation.play(0);
		lzlib.SoundUtility.playSound('streamsound1_7_mp3');
		await lzlib.ThreadUtility.sleep(14000);
		this.coinMoveRight.play(0);
		await lzlib.SoundUtility.playSound('streamsound1_8_mp3');
		this.yuanCoinMoveAnimation.play(0);
		lzlib.SoundUtility.playSound('streamsound1_9_mp3');
		await lzlib.ThreadUtility.sleep(8000);
		this.formulaComponent.showResultImage();
		await lzlib.ThreadUtility.sleep(2000);
		lzlib.SoundUtility.playSound('streamsound1_10_mp3');
	}

	private onNextQuestionTap(): void
	{
		Main.instance.gotoScene(new Question2Scene());
	}

	private showYuanAndJiao(): void
	{
		this.yuanAndJiao.visible = true;
	}

	private showPriceLeft(): void
	{
		this.priceLeftGroup.visible = true;
		this.tenyuanLeftCoinComponent.visible = true;
		this.jiaoLeftCoinComponent.visible = true;
	}

	private showPriceRight(): void
	{
		this.priceRightGroup.visible = true;
		this.tenyuanRightCoinComponent.visible = true;
		this.jiaoRightCoinComponent1.visible = true;
		this.jiaoRightCoinComponent2.visible = true;
	}

	private showLineFormulaImage(): void
	{
		this.lineFormulaImage.visible = true;
	}

	private hideGoods(): void
	{
		this.schoolBagImage.visible = false;
		this.waterCupImage.visible = false;
	}

	private async playStartMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound1_0_mp3');
	}

	private async playOnCalcTapMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound1_1_mp3');
	}

	private playStartAnimation(): void
	{
		this.startAnimation.play(0);
	}
	
}