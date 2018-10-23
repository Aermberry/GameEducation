class Question4Scene extends eui.Component implements  eui.UIComponent {
	
	private baiLabel: eui.Label;
	private shiLabel: eui.Label;
	private	geLabel: eui.Label;
	private priceLeftGroup: eui.Group;
	private priceRightGroup: eui.Group;
	private coinGroup: eui.Group;
	private yuanAndJiao: eui.Group;
	private textBackgroundImage: eui.Image;
	private question4StartImage: eui.Image;
	private lineFormulaImage: eui.Image;
	private thirtyComponent: CoinComponent;
	private calcComponent: CalcComponents;
	private formulaComponent: FormulaComponent;
	private nextQuestionComponent: NextQuestionComponent;
	private lastQuestionComponent: LastQuestionComponent;

	private coinMoveAnimation: egret.tween.TweenGroup;
	private geweiAnimation: egret.tween.TweenGroup;
	private shiweiAnimation: egret.tween.TweenGroup;
	private priceRightAnimation: egret.tween.TweenGroup;

	private isResolve = true;
	
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
		this.lastQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLastQuestionTap, this);
		this.startRun();
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
	}

	private async onCalcComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.calcComponent.visible = false;
		lzlib.SoundUtility.playSound('streamsound4_2_mp3');
		await lzlib.ThreadUtility.sleep(8000);
		this.coinMoveAnimation.play(0);
		await lzlib.ThreadUtility.sleep(7000);
		this.hideCalcGroup();
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
		this.priceRightAnimation.play(0);
		await lzlib.SoundUtility.playSound('streamsound4_6_mp3');
		this.geweiAnimation.play(0);
		await lzlib.SoundUtility.playSound('streamsound4_7_mp3');
		this.showGeWei();
		this.shiweiAnimation.play(0);
		await lzlib.SoundUtility.playSound('streamsound4_8_mp3');
		this.showShiWei();
		this.showBaiWei();
		lzlib.SoundUtility.playSound('streamsound4_9_mp3');
		await lzlib.ThreadUtility.sleep(800);
		this.formulaComponent.showResultImage();

	}

	private onNextQuestionTap(): void
	{
		this.isResolve = false;
		Main.instance.gotoScene(new Question5Scene());
	}

	private onLastQuestionTap(): void
	{
		Main.instance.gotoScene(new Question3Scene());
	}

	private async startRun(): Promise<void>
	{
		lzlib.SoundUtility.playSound('streamsound4_0_mp3');
		await this.sleep(4000);
		this.showCoin();
		await this.sleep(4000);
		this.showQuestion();
		await lzlib.SoundUtility.playSound('streamsound4_1_mp3');
		this.showCalcComponent();	
	}

	private showCoin(): void
	{
		this.thirtyComponent.visible = true;
	}

	private showQuestion(): void
	{
		this.textBackgroundImage.visible = true;
		this.question4StartImage.visible = true;
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

	private hideCalcGroup(): void
	{
		this.coinGroup.visible = false;
	}
	private sleep(ms = 0): Promise<void>
	{
		return new Promise<void>((resolve, reject)=> {
			setTimeout(() => {
				if(this.isResolve)
				{
					resolve();
				}
			}, ms)
		});
	}
	
}