class Question2Scene extends eui.Component implements  eui.UIComponent {
	
	private priceLeftGroup: eui.Group;
	private priceRightGroup: eui.Group;
	private yuanAndJiao: eui.Group;
	private iceCreamImage: eui.Image;
	private bananaShipImage: eui.Image;
	private calcComponent: CalcComponents;
	private formulaComponent: FormulaComponent;
	private lineFormulaImage: eui.Image;
	private tenyuanLeftCoinComponent: CoinComponent;
	private yuanLeftCoinComponent: CoinComponent;
	private jiaoLeftCoinComponent: CoinComponent;
	private jiaoRightCoinComponent: CoinComponent;
	private yuanRightCoinComponent1: CoinComponent;
	private yuanRightCoinComponent2: CoinComponent;
	private tenyuanRightCoinComponent: CoinComponent;
	private nextQuestionComponent: NextQuestionComponent;

	private startAnimation: egret.tween.TweenGroup;
	private goodsMoveAnimation: egret.tween.TweenGroup;
	private jiaoCoinMoveAnimation: egret.tween.TweenGroup;
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
		await lzlib.SoundUtility.playSound('streamsound2_2_mp3');
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound2_3_mp3');
		this.showYuanAndJiao();
		await lzlib.SoundUtility.playSound('streamsound2_4_mp3');
		this.showPriceLeft();
		await lzlib.SoundUtility.playSound('streamsound2_5_mp3');
		this.showPriceRight();
		await lzlib.SoundUtility.playSound('streamsound2_6_mp3');
		this.showLineFormulaImage();
		this.jiaoCoinMoveAnimation.play(0);
		await lzlib.SoundUtility.playSound('streamsound2_7_mp3');
		this.yuanCoinMoveAnimation.play(0);
		await lzlib.SoundUtility.playSound('streamsound2_8_mp3');
		lzlib.SoundUtility.playSound('streamsound2_9_mp3');
		this.formulaComponent.showResultImage();
	}

	private onNextQuestionTap(): void
	{
		Main.instance.gotoScene(new Question3Scene());
	}


	private playStartAnimation(): void
	{
		this.startAnimation.play(0);
	}
			
	private async playStartMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound2_0_mp3');
	}

	private async playOnCalcTapMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound2_1_mp3');
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
		this.yuanLeftCoinComponent.visible = true;
	}

	private showPriceRight(): void
	{
		this.priceRightGroup.visible = true;
		this.tenyuanRightCoinComponent.visible = true;
		this.yuanRightCoinComponent1.visible = true;
		this.yuanRightCoinComponent2.visible = true;
		this.jiaoRightCoinComponent.visible = true;
	}

	private showLineFormulaImage(): void
	{
		this.lineFormulaImage.visible = true;
	}

	private hideGoods(): void
	{
		this.iceCreamImage.visible = false;
		this.bananaShipImage.visible = false;
	}
	
}