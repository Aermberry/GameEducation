class Question5Scene extends eui.Component implements  eui.UIComponent {
	
	private restLabel: eui.Label;
	private baiLabel: eui.Label;
	private shiLabel: eui.Label;
	private	geLabel: eui.Label;
	private yuanAndJiao: eui.Group;
	private priceLeftGroup: eui.Group;
	private priceRightGroup: eui.Group;
	private coinGroup: eui.Group
	private meImage: eui.Image;
	private lineFormulaImage: eui.Image;
	private meAndSisterImage: eui.Image;
	private calcComponent: CalcComponents;
	private formulaComponent: FormulaComponent;
	private lastQuestionComponent: LastQuestionComponent;

	private meCoinShowAnimation: egret.tween.TweenGroup;
	private sisterCoinShowAnimation: egret.tween.TweenGroup;
	private coinMoveAnimation: egret.tween.TweenGroup;
	private geweiAnimation: egret.tween.TweenGroup;
	private shiweiAnimation: egret.tween.TweenGroup;
	 
	
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
		this.lastQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLastQuestionTap, this);
		this.startRun();
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);
	}

	private async onCalcComponentTap(e: egret.TouchEvent): Promise<void>
	{
		this.calcComponent.visible = false;
		lzlib.SoundUtility.playSound('streamsound5_1_mp3');
		await lzlib.ThreadUtility.sleep(8000);
		this.coinMoveAnimation.play(0);
		await lzlib.ThreadUtility.sleep(5000);
		this.hideSisterAndCoin();
		this.showMeImage();
		this.formulaComponent.showTitleImage();
		await lzlib.ThreadUtility.sleep(1000);
		this.formulaComponent.showLeftImage();
		await lzlib.SoundUtility.playSound('streamsound5_2_mp3');
		this.formulaComponent.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound5_3_mp3');
		this.showYuanAndJiao();
		this.showPriceLeft();
		this.showPriceRight();
		this.showLineFormulaImage();
		this.hideRestLabel();
		await lzlib.SoundUtility.playSound('streamsound5_4_mp3');

		this.geweiAnimation.play(0)
		await lzlib.SoundUtility.playSound('streamsound5_5_mp3');
		this.showGeWei();
		this.shiweiAnimation.play(0);
		await lzlib.SoundUtility.playSound('streamsound5_6_mp3');
		this.showShiWei();
		await lzlib.ThreadUtility.sleep(1000);
		this.showBaiWei();
		await lzlib.SoundUtility.playSound('streamsound5_7_mp3');
		this.formulaComponent.showResultImage();

	}

	private onLastQuestionTap(): void
	{
		Main.instance.gotoScene(new Question4Scene());
	}

	private async startRun(): Promise<void>
	{
		this.meCoinShowAnimation.play(0);
		lzlib.SoundUtility.playSound('streamsound5_0_mp3');
		await lzlib.ThreadUtility.sleep(2000);
		this.sisterCoinShowAnimation.play(0);
		await lzlib.ThreadUtility.sleep(5000);
		this.showCalcComponent();	
	}

	private showCalcComponent(): void
	{
		this.calcComponent.visible = true;
	}

	private showMeImage(): void
	{
		this.meImage.visible = true;
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

	private hideSisterAndCoin(): void
	{
		this.meImage.visible = true;
		this.coinGroup.visible = false;
		this.meAndSisterImage.visible = false;
	}

	private hideRestLabel(): void
	{
		this.restLabel.alpha = 0;
	}

	
}