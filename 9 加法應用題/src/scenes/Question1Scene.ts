class Question1Scene extends eui.Component implements eui.UIComponent {
	private movement_1: egret.tween.TweenGroup;
	private movement_2: egret.tween.TweenGroup;
	private movement_3: egret.tween.TweenGroup;
<<<<<<< HEAD
	private image6: eui.Image;
	private image7: eui.Image;
	private image8: eui.Image;
	private image9: eui.Image;
=======
	private movement_4: egret.tween.TweenGroup;
	//SoundChannel
>>>>>>> 9-加法應用題

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
		Main.instance.gotoScene(new Question2Scene());
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
<<<<<<< HEAD
		await lzlib.SoundUtility.playSound('add_1streamsound 2_mp3');
		this.examplesButton.visible = true;
	}
	private async playExamples():Promise<void> {
		this.examplesButton.visible = false;
		await lzlib.SoundUtility.playSound('add_1streamsound 3_mp3');
		this.image6.visible = true;
		this.image7.visible = true;
		await lzlib.SoundUtility.playSound('add_1streamsound 4_mp3');
		this.image8.visible = true;
		await lzlib.SoundUtility.playSound('add_1streamsound 5_mp3');
		this.image9.visible = true;
		await lzlib.SoundUtility.playSound('add_1streamsound 6_mp3');
=======
		await lzlib.SoundUtility.playSound('add_1streamsound_2_mp3');
		await lzlib.SoundUtility.playSound('add_1streamsound_3_mp3');
		this.examplesButton.visible = true;
		lzlib.SoundUtility.stopCurrentSound();
	}
	private async playExamples():Promise<void> {
		this.movement_4.play(0);
		await lzlib.SoundUtility.playSound('add_1streamsound_4_mp3');
		await lzlib.SoundUtility.playSound('add_1streamsound_5_mp3');
		await lzlib.SoundUtility.playSound('add_1streamsound_6_mp3');
		lzlib.SoundUtility.stopCurrentSound();
>>>>>>> 9-加法應用題
	}
}