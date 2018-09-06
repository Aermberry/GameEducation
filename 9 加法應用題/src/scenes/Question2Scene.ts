class Question2Scene extends eui.Component implements eui.UIComponent {
	private motion_1: egret.tween.TweenGroup;
	private motion_2: egret.tween.TweenGroup;
	private motion_3: egret.tween.TweenGroup;
	private image37: eui.Image;
	private image38: eui.Image;
	private image39: eui.Image;
	private image40: eui.Image;
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
		Main.instance.gotoScene(new Question3Scene());
	}
	// 列式计算按钮事件
	private onExamplesButtonClick(): void {
		this.playExamples();
	}
	// 上一题按钮事件
	private onLastButtonClick(): void {
		Main.instance.gotoScene(new Question1Scene());
	}

	private async playGame(): Promise<void> {
		this.motion_1.play(0);
		this.motion_2.play(0);
		await lzlib.SoundUtility.playSound('add_2streamsound 0_mp3');
		this.examplesButton.visible = true;
	}

	private async playExamples(): Promise<void> {
		this.examplesButton.visible = false;
		this.motion_3.play(0);
		await lzlib.SoundUtility.playSound('add_2streamsound 1_mp3');
		this.image37.visible = true;
		this.image38.visible = true;
		await lzlib.SoundUtility.playSound('add_2streamsound 2_mp3');
		this.image39.visible = true;
		await lzlib.SoundUtility.playSound('add_2streamsound 3_mp3');
		this.image40.visible = true;
		await lzlib.SoundUtility.playSound('add_2streamsound 4_mp3');
	}
}