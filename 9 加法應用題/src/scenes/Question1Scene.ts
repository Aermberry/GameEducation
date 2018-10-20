class Question1Scene extends eui.Component implements eui.UIComponent {
	private movement_1: egret.tween.TweenGroup;
	private movement_2: egret.tween.TweenGroup;
	private movement_3: egret.tween.TweenGroup;
	private movement_4: egret.tween.TweenGroup;
	private currentSoundChannel:egret.SoundChannel;
	//SoundChannel

	private exitButton: ImageButton;
	private nextButton: ImageButton;
	private examplesButton: ImageButton;

	private flas = false;  //

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
		this.examplesButton.visible = false;
		this.playExamples();
	}
	private async playGame(): Promise<void> {
		this.movement_1.play(0);
		await lzlib.SoundUtility.playSound('add_1streamsound_0_mp3');

		this.movement_2.play(0);
		await lzlib.SoundUtility.playSound('add_1streamsound_1_mp3');

		this.movement_3.play(0);
		await lzlib.SoundUtility.playSound('add_1streamsound_2_mp3');
		await lzlib.SoundUtility.playSound('add_1streamsound_3_mp3');
		this.examplesButton.visible = true;
	}
	private async playExamples():Promise<void> {
		this.movement_4.play(0);
		await lzlib.SoundUtility.playSound('add_1streamsound_4_mp3');
		await lzlib.SoundUtility.playSound('add_1streamsound_5_mp3');
		await lzlib.SoundUtility.playSound('add_1streamsound_6_mp3');
	}
	private stopCurrentSoundChannel(): void
	{
		if (this.currentSoundChannel != null) {
			this.currentSoundChannel.stop();
		}
	}

}