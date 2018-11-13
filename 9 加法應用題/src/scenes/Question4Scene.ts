class Question4Scene extends eui.Component implements eui.UIComponent {
	private motion_darts1: egret.tween.TweenGroup;
	private motion_darts2: egret.tween.TweenGroup;
	private motion_darts3: egret.tween.TweenGroup;
	private image10: eui.Image;
	private image11: eui.Image;
	private image12: eui.Image;
	private image13: eui.Image;
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
		Main.instance.gotoScene(new Question5Scene());
	}
	// 列式计算按钮事件
	private onExamplesButtonClick(): void {
		
		this.playExamples();
	}
	// 上一题按钮事件
	private onLastButtonClick(): void {
		Main.instance.gotoScene(new Question3Scene());
	}

	private async playGame(): Promise<void> {
		this.motion_darts1.play(0);
<<<<<<< HEAD
		await lzlib.SoundUtility.playSound('add_4streamsound 0_mp3');
		this.motion_darts2.play(0);
		await lzlib.SoundUtility.playSound('add_4streamsound 1_mp3');
		this.motion_darts3.play(0);
		await lzlib.SoundUtility.playSound('add_4streamsound 2_mp3');
		this.examplesButton.visible = true;
=======
		await lzlib.SoundUtility.playSound('add_4streamsound_0_mp3');
		await lzlib.SoundUtility.playSound('add_4streamsound_1_mp3');
		await lzlib.SoundUtility.playSound('add_4streamsound_2_mp3');
		await lzlib.SoundUtility.playSound('add_4streamsound_3_mp3');
		this.examplesButton.visible =true;

>>>>>>> 9-加法應用題
	}

	private async playExamples(): Promise<void> {
		this.examplesButton.visible = false;
<<<<<<< HEAD
		await lzlib.SoundUtility.playSound('add_4streamsound 3_mp3');
		this.image10.visible = true;
		this.image11.visible = true;
		await lzlib.SoundUtility.playSound('add_4streamsound 4_mp3');
		this.image12.visible = true;
		await lzlib.SoundUtility.playSound('add_4streamsound 5_mp3');
		this.image13.visible = true;
		await lzlib.SoundUtility.playSound('add_4streamsound 6_mp3');
=======
		this.motion_darts2.play(0);
		await lzlib.SoundUtility.playSound('add_4streamsound_4_mp3');
		await lzlib.SoundUtility.playSound('add_4streamsound_5_mp3');
		await lzlib.SoundUtility.playSound('add_4streamsound_6_mp3');
>>>>>>> 9-加法應用題
	}
}