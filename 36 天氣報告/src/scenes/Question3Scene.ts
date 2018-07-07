class Question3Scene extends eui.Component implements  eui.UIComponent {
	private startTipLabel: eui.Label;
	private nextSceneTipLabel: eui.Label;
	private questionNumberLabel: eui.Label;
	private startButton: eui.Image;
	private nextSceneButton: ImageButton;
	private exitButton: ImageButton;
	private startButtonTipLabel: eui.Label;
	private radioGroup: eui.Group;
	private radioTweenGroup: egret.tween.TweenGroup;

	private currentSoundChannel: egret.SoundChannel;
	private weathers = [
		new Weather('sound 26 (wQ01.mp3)_mp3', 'rainy'),
		new Weather('sound 24 (wQ02.mp3)_mp3', 'rainy'),
		new Weather('sound 23 (wQ03.mp3)_mp3', 'sunny'),
		new Weather('sound 22 (wQ04.mp3)_mp3', 'spissatus'),
		new Weather('sound 21 (wQ05.mp3)_mp3', 'spissatus'),
		new Weather('sound 20 (wQ06.mp3)_mp3', 'cloudy'),
		new Weather('sound 19 (wQ07.mp3)_mp3', 'thunderstorm'),
		new Weather('sound 18 (wQ08.mp3)_mp3', 'rainy'),
		new Weather('sound 17 (wQ09.mp3)_mp3', 'cloudy'),
		new Weather('sound 16 (wQ10.mp3)_mp3', 'cloudy'),
		new Weather('sound 15 (wQ11.mp3)_mp3', 'shower'),
		new Weather('sound 14 (wQ12.mp3)_mp3', 'thunderstorm'),
		new Weather('sound 13 (wQ13.mp3)_mp3', 'rainy'),
		new Weather('sound 12 (wQ14.mp3)_mp3', 'rainy')
	];
	private selectedWeather: Weather;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated(): void
	{
		super.childrenCreated();
		mouse.enable(this.stage);
		this.startButton.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onStartButtonRollOver, this);
		this.startButton.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onStartButtonRollOut, this);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStartButtonTouchBegin, this);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButtonClick, this);
		this.nextSceneButton.once(egret.TouchEvent.TOUCH_TAP, this.onNextPageButtonClick, this);
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitButtonClick, this);
	}

	private onStartButtonRollOver(e: mouse.MouseEvent): void
	{
		this.startButton.source = 'start_button_mouse_over_png';
	}

	private onStartButtonRollOut(e: mouse.MouseEvent): void
	{
		this.startButton.source = 'start_button_normal_png';
	}

	private onStartButtonTouchBegin(e: egret.TouchEvent): void
	{
		this.startButton.source = 'start_button_mouse_down_png';
	}

	private async onStartButtonClick(): Promise<void>
	{
		this.stopCurrentSoundChannel();

		this.startTipLabel.visible = false;
		this.startButton.visible = false;
		this.questionNumberLabel.visible = true;
		this.selectedWeather = this.weathers[Math.randomMinMax(0, this.weathers.length - 1)];
		await ThreadUtility.playSound(this.selectedWeather.audio);
		await ThreadUtility.playSound('sound 25 (wQ01-14_tail.mp3)_mp3');
		this.questionNumberLabel.text = "天氣報告\r第三節";
		await ThreadUtility.sleep(1000);
		this.questionNumberLabel.visible = false;

		this.radioGroup.visible = true;
		TweenGroupUtility.playAnimation(this.radioTweenGroup);
		await ThreadUtility.playSound('sound 1 (wreport2.mp3)_mp3');
		this.radioTweenGroup.stop();
		this.radioGroup.visible = false;
		this.nextSceneTipLabel.visible = true;
		this.nextSceneButton.enabled = true;
	}

	private stopCurrentSoundChannel(): void
	{
		if (this.currentSoundChannel != null) {
			this.currentSoundChannel.stop();
		}
	}

	private onNextPageButtonClick(e: egret.TouchEvent): void
	{
		this.stopCurrentSoundChannel();
		Main.instance.gotoScene(new Question3AnswerScene(this.selectedWeather));
	}

	private onExitButtonClick(e: egret.TouchEvent): void
	{
		window.close();
	}
}