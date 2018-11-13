class Question3Scene extends eui.Component implements eui.UIComponent {
	private motion_card_1: egret.tween.TweenGroup;
	private image4: eui.Image;
	private image5: eui.Image;
	private image6: eui.Image;
	private image7: eui.Image;
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
		this.examplesButton.visible = false;
		this.playExamples();
	}
	// 上一题按钮事件
	private onLastButtonClick(): void {
		Main.instance.gotoScene(new Question2Scene());
	}

	private async playGame(): Promise<void> {
<<<<<<< HEAD
		this.motion_card_1.play();
		await lzlib.SoundUtility.playSound('add_3streamsound 0_mp3');
		this.examplesButton.visible = true;
	}

	private async playExamples(): Promise<void> {
		this.examplesButton.visible = false;
		await lzlib.SoundUtility.playSound('add_3streamsound 1_mp3');
		this.image4.visible = true;
		this.image5.visible = true;
		await lzlib.SoundUtility.playSound('add_3streamsound 2_mp3');
		this.image6.visible = true;
		await lzlib.SoundUtility.playSound('add_3streamsound 3_mp3');
		this.image7.visible = true;
		await lzlib.SoundUtility.playSound('add_3streamsound 4_mp3');
=======
		this.motion_card_1.play(0);
		await lzlib.SoundUtility.playSound('add_3streamsound_0_mp3');
		await lzlib.SoundUtility.playSound('add_3streamsound_1_mp3');
		this.examplesButton.visible = true;


	}

	private async playExamples(): Promise<void> {
		this.motion_card_2.play(0);
		await lzlib.SoundUtility.playSound('add_3streamsound_2_mp3');
		await lzlib.SoundUtility.playSound('add_3streamsound_3_mp3');
		await lzlib.SoundUtility.playSound('add_3streamsound_4_mp3');
>>>>>>> 9-加法應用題
	}
}