class Question6Scene extends eui.Component implements  eui.UIComponent {
	
	private titleImage: eui.Image;
	private leftImage: eui.Image;
	private rightImage: eui.Image;
	private resultImage: eui.Image;
	private calcComponent: CalcComponents;
	private nextQuestionComponent: NextQuestionComponent;
	private lastQuestionComponent: LastQuestionComponent;

	private startAnimation: egret.tween.TweenGroup;
	private flickerAnimation: egret.tween.TweenGroup;
	
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any): void
	{
		super.partAdded(partName,instance);
	}


	protected async childrenCreated(): Promise<void>
	{
		super.childrenCreated();
		this.nextQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionComponent, this);
		this.lastQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLastQuestionComponent, this);
		this.playStartAnimation();
		await this.playMP3();
		this.calcComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCalcComponentTap, this);

	}

	private onNextQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question7Scene());
	}

	private onLastQuestionComponent(): void
	{
		Main.instance.gotoScene(new Question5Scene());
	}

	private async onCalcComponentTap(): Promise<void>
	{
		this.hideCalcComponent();
		this.flickerAnimation.play();
		await lzlib.SoundUtility.playSound('streamsound6_1_mp3');
		this.showTitleImage();
		await lzlib.SoundUtility.playSound('streamsound6_2_mp3');
		this.showLeftImage();
		this.showRightImage();
		await lzlib.SoundUtility.playSound('streamsound6_3_mp3');
		this.showResultImage();
		await lzlib.SoundUtility.playSound('streamsound6_4_mp3');
	}

	private playStartAnimation(): void
	{
		this.startAnimation.play(0);
	}

	private async playMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound6_0_mp3');
	}

	private showCalcComponent(): void
	{
		this.calcComponent.visible = true;
	}
	
	public showTitleImage(): void
	{
		this.titleImage.visible = true;
	}

	public showLeftImage(): void
	{
		this.leftImage.visible = true;
	}

	public showRightImage(): void
	{
		this.rightImage.visible = true;
	}

	public showResultImage(): void
	{
		this.resultImage.visible = true;
	}


	private hideCalcComponent(): void
	{
		this.calcComponent.visible = false;
	}

}