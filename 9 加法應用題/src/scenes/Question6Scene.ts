class Question6Scene extends eui.Component implements eui.UIComponent {
	private motion_book1: egret.tween.TweenGroup;
	private motion_book2: egret.tween.TweenGroup;
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
		
	}
	// 列式计算按钮事件
	private onExamplesButtonClick(): void {
		this.playExamples();
	}
	// 上一题按钮事件
	private onLastButtonClick(): void {
		Main.instance.gotoScene(new Question5Scene());
	}

	private async playGame(): Promise<void> {
		this.motion_book1.play(0);
		await lzlib.SoundUtility.playSound('add_6streamsound 0_mp3');
		await lzlib.SoundUtility.playSound('add_6streamsound 1_mp3');
		await lzlib.SoundUtility.playSound('add_6streamsound 2_mp3');
		await lzlib.SoundUtility.playSound('add_6streamsound 3_mp3');


	}

	private async playExamples(): Promise<void> {
		this.motion_book2.play(0);
		await lzlib.SoundUtility.playSound('add_6streamsound 4_mp3');
		await lzlib.SoundUtility.playSound('add_6streamsound 5_mp3');
		await lzlib.SoundUtility.playSound('add_6streamsound 6_mp3');
	}
}