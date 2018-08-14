class Question2Scene extends eui.Component implements  eui.UIComponent {
	private startTipLabel: eui.Label;
	private nextSceneTipLabel: eui.Label;
	private questionNumberLabel: eui.Label;
	private startButton: eui.Button;
	private nextSceneButton: ImageButton;
	private exitButton: ImageButton;
	private startButtonTipLabel: eui.Label;
	private tableGroup: eui.Group;

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
		mouse.setButtonMode(this.startButton, true);
		mouse.setButtonMode(this.exitButton, true);
		this.startButton.once(egret.TouchEvent.TOUCH_TAP, this.onStartButtonClick, this);
		this.startButton.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onStartButtonMouseOver, this);
		this.startButton.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onStartButtonMouseOut, this);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStartButtonMouseDown, this);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_END, this.onStartButtonMouseUp, this);
		this.nextSceneButton.once(egret.TouchEvent.TOUCH_TAP, this.onNextPageButtonClick, this);
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitButtonClick, this);

		this.startScene();
	}

	private async startScene(): Promise<void>
	{
		await ThreadUtility.playSound('sound 21 (news_q2.mp3)_mp3');
		this.questionNumberLabel.visible = false;
		this.startTipLabel.visible = true;
		this.startButton.visible = true;
	}

	private onStartButtonMouseOver(): void
	{
		this.startButtonTipLabel.visible = true;
		(this.startButton.labelDisplay as eui.Label).textColor = 0xFBFDA5;
	}

	private onStartButtonMouseDown(): void
	{
		(this.startButton.labelDisplay as eui.Label).textColor = 0xFFFE54;
	}

	private onStartButtonMouseUp(): void
	{
		(this.startButton.labelDisplay as eui.Label).textColor = 0xFFFE54;
	}

	private onStartButtonMouseOut(): void
	{
		this.startButtonTipLabel.visible = false;
		(this.startButton.labelDisplay as eui.Label).textColor = 0xffffff;
	}

	private async onStartButtonClick(): Promise<void>
	{
		this.startButtonTipLabel.visible = false;
		this.startTipLabel.visible = false;
		this.startButton.visible = false;
		this.tableGroup.visible = true;
		await ThreadUtility.playSound('sound 4 (report_p2.mp3)_mp3');
		this.tableGroup.visible = false;
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