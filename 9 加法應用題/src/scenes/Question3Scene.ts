class Question3Scene extends eui.Component implements eui.UIComponent {
	private motion_card_1: egret.tween.TweenGroup;
	private motion_card_2: egret.tween.TweenGroup;
	private exitButton: ImageButton;
	private nextButton: ImageButton;
	private examplesButton: ImageButton;
	private lastButton: ImageButton;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		mouse.enable(this.stage);
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitButtonClick, this);
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextButtonClick, this);
		this.examplesButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExamplesButtonClick, this)
		this.lastButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLastButtonClick, this)
		this.playGame();
	}
	// 结束事件
	private onExitButtonClick(): void {
		window.close();
	}
	// 下一题按钮时间
	private onNextButtonClick(): void {
		Main.instance.gotoScene(new Question4Scene());
	}
	// 列式计算按钮事件
	private onExamplesButtonClick(): void {
		this.playExamples();
	}
	// 上一题按钮事件
	private onLastButtonClick(): void {
		Main.instance.gotoScene(new Question2Scene());
	}

	private async playGame(): Promise<void> {
		this.motion_card_1.play(0);
		await lzlib.SoundUtility.playSound('add_3streamsound 0_mp3');
		await lzlib.SoundUtility.playSound('add_3streamsound 1_mp3');


	}

	private async playExamples(): Promise<void> {
		this.motion_card_2.play(0);
		await lzlib.SoundUtility.playSound('add_3streamsound 2_mp3');
		await lzlib.SoundUtility.playSound('add_3streamsound 3_mp3');
		await lzlib.SoundUtility.playSound('add_3streamsound 4_mp3');
	}
}