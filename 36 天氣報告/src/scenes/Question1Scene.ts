class Question1Scene extends eui.Component implements  eui.UIComponent {
	private startTipLabel: eui.Label;
	private nextSceneTipLabel: eui.Label;
	private questionNumberLabel: eui.Label;
	private startButton: eui.Image;
	private nextSceneButton: ImageButton;
	private startButtonTipLabel: eui.Label;
	private radioGroup: eui.Group;
	private radioTweenGroup: egret.tween.TweenGroup;

	private exitButton: eui.Image;
	private exit:eui.Image;


	private currentSoundChannel: egret.SoundChannel;

	private startMask: eui.Rect;
    private startButton2: eui.Button;
    private loadingAnim:egret.tween.TweenGroup

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
		mouse.setButtonMode(this.startButton2,true);
		this.startButton2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStartButton2Click,this);
		this.startButton.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onStartButtonRollOver, this);
		this.startButton.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onStartButtonRollOut, this);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStartButtonTouchBegin, this);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButtonClick, this);
		this.nextSceneButton.once(egret.TouchEvent.TOUCH_TAP, this.onNextPageButtonClick, this);
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitButtonClick, this);
		this.exitButton.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onRollOver, this);
		this.exitButton.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onRollOut, this);

		
	}

	private onRollOver():void {
		this.exit.visible = true;
		this.exitButton.scaleX = this.exitButton.scaleY = 1.1;
	}

	private onRollOut(): void{
		this.exit.visible = false;
		this.exitButton.scaleX = this.exitButton.scaleY = 1;
	}


	private async onStartButton2Click():Promise<void>{
		await this.loadingAnim.play(0);
		this.startButton2.visible=false;
		this.startMask.visible=false;
		await this.startScene();
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
		await ThreadUtility.playSound('sound 27 (w_to_next.mp3)_mp3');
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