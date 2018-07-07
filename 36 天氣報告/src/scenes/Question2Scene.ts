class Question2Scene extends eui.Component implements  eui.UIComponent {
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
		await ThreadUtility.playSound('sound 4 (wQ23.mp3)_mp3');
		this.questionNumberLabel.text = "天氣報告\r第二節";
		await ThreadUtility.sleep(1000);
		this.questionNumberLabel.visible = false;

		this.radioGroup.visible = true;
		TweenGroupUtility.playAnimation(this.radioTweenGroup);
		await ThreadUtility.playSound('sound 2 (wreport1.mp3)_mp3');
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
		Main.instance.gotoScene(new Question2AnswerScene());
	}

	private onExitButtonClick(e: egret.TouchEvent): void
	{
		window.close();
	}
}