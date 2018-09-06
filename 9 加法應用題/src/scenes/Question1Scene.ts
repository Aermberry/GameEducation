class Question1Scene extends eui.Component implements eui.UIComponent {
	private movement_1: egret.tween.TweenGroup;
	private movement_2: egret.tween.TweenGroup;
	private movement_3: egret.tween.TweenGroup;
	private movement_4: egret.tween.TweenGroup;

	private exitButton: ImageButton;
	private nextButton: ImageButton;
	private examplesButton: ImageButton;

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

	private onExitButtonClick(): void {
		window.close();
	}

	private onNextButtonClick(): void {
		Main.instance.gotoScene(new Question2Scene());
	}

	private onExamplesButtonClick(): void {
		this.playExamples();
	}

	private async playGame(): Promise<void> {
		this.movement_1.play(0);
		await lzlib.SoundUtility.playSound('add_1streamsound 0_mp3');

		this.movement_2.play(0);
		await lzlib.SoundUtility.playSound('add_1streamsound 1_mp3');

		this.movement_3.play(0);
		await lzlib.SoundUtility.playSound('add_1streamsound 2_mp3');
		await lzlib.SoundUtility.playSound('add_1streamsound 3_mp3');

		// this.movement_4.play(0);
		// await lzlib.SoundUtility.playSound('add_1streamsound 4_mp3');
		// await lzlib.SoundUtility.playSound('add_1streamsound 5_mp3');
		// await lzlib.SoundUtility.playSound('add_1streamsound 6_mp3');
	}
	private async playExamples():Promise<void> {
		this.movement_4.play(0);
		await lzlib.SoundUtility.playSound('add_1streamsound 4_mp3');
		await lzlib.SoundUtility.playSound('add_1streamsound 5_mp3');
		await lzlib.SoundUtility.playSound('add_1streamsound 6_mp3');
	}
}