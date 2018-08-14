class Question1AnswerScene extends eui.Component implements  eui.UIComponent {
	private resultGroup: eui.Group;
	private resultImage: eui.Image;
	private resultLabel: eui.Label;
	private replayButton: ImageButton;
	private nextSceneButton: ImageButton;
	private exitButton: ImageButton;
	private weatherTextbox: eui.TextInput;
	private submitButton: eui.Button;

	private currentSoundChannel: egret.SoundChannel;
	private weather: Weather;

	public constructor(weather: Weather) {
		super();
		this.weather = weather;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		mouse.enable(this.stage);
		this.replayButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReplayButtonClick, this);
		this.nextSceneButton.once(egret.TouchEvent.TOUCH_TAP, this.onNextPageButtonClick, this);
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitButtonClick, this);
		this.weatherTextbox.addEventListener(egret.Event.CHANGE, this.onWeatherTextboxChange, this);
		this.submitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSubmitButtonClick, this);
	}

	private onReplayButtonClick(): void
	{
		this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('sound 3 (wreport0.mp3)_mp3') as egret.Sound).play(0, 1);
	}

	private showCorrectResultGroup(): void
	{
		this.resultGroup.visible = true;
		this.resultImage.source = 'correct_png';
		this.resultLabel.text = '正確';
	}

	private showWrongResultGroup(): void
	{
		this.resultGroup.visible = true;
		this.resultImage.source = 'wrong_png';
		this.resultLabel.text = '不太正確';
	}

	private hideResultGroup(): void
	{
		this.resultGroup.visible = false;
	}

	private onWeatherTextboxChange(): void
	{
		this.submitButton.enabled = true;
	}

	private async onSubmitButtonClick(): Promise<void>
	{
		this.stopCurrentSoundChannel();
		if (this.weatherTextbox.text.trim() != this.weather.result) {
			this.showWrongResultGroup();
			this.currentSoundChannel = (RES.getRes('wrong_answer_mp3') as egret.Sound).play(0, 1);
			await ThreadUtility.sleep(2000);
			this.hideResultGroup();
		} else {
			this.showCorrectResultGroup();
			this.currentSoundChannel = (RES.getRes('you_are_correct_mp3') as egret.Sound).play(0, 1);
			await ThreadUtility.sleep(3000);
			this.hideResultGroup();
			this.nextSceneButton.enabled = true;
		}
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
		Main.instance.gotoScene(new Question2Scene());
	}

	private onExitButtonClick(e: egret.TouchEvent): void
	{
		window.close();
	}
	
}