class Question1Scene extends eui.Component implements  eui.UIComponent {
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
		new Weather('sound 11 (wQ16.mp3)_mp3', '20'),
		new Weather('sound 9 (wQ17.mp3)_mp3', '20'),
		new Weather('sound 8 (wQ18.mp3)_mp3', '21'),
		new Weather('sound 7 (wQ19.mp3)_mp3', '21'),
		new Weather('sound 6 (wQ20.mp3)_mp3', '20'),
		new Weather('sound 5 (wQ22.mp3)_mp3', '22')
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
		mouse.setButtonMode(this.startButton, true);
		mouse.setButtonMode(this.exitButton, true);
		this.startButton.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onStartButtonRollOver, this);
		this.startButton.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onStartButtonRollOut, this);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStartButtonTouchBegin, this);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButtonClick, this);
		this.nextSceneButton.once(egret.TouchEvent.TOUCH_TAP, this.onNextPageButtonClick, this);
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitButtonClick, this);

		this.startScene();
	}

	private async startScene(): Promise<void>
	{
		this.currentSoundChannel = (RES.getRes('sound 28 (w_inst_intro.mp3)_mp3') as egret.Sound).play(0, 1);
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
		await ThreadUtility.playSound('sound 10 (wQ16-22_tail.mp3)_mp3');
		this.questionNumberLabel.text = "天氣報告\r第一節";
		await ThreadUtility.sleep(1000);
		this.questionNumberLabel.visible = false;

		this.radioGroup.visible = true;
		TweenGroupUtility.playAnimation(this.radioTweenGroup);
		await ThreadUtility.playSound('sound 3 (wreport0.mp3)_mp3');
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
		Main.instance.gotoScene(new Question1AnswerScene(this.selectedWeather));
	}

	private onExitButtonClick(e: egret.TouchEvent): void
	{
		window.close();
	}
}