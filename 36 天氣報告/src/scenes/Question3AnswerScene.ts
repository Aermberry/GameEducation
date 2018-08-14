class Question3AnswerScene extends eui.Component implements  eui.UIComponent {
	private topCheckBox: eui.CheckBox;
	private middleCheckBox: eui.CheckBox;
	private bottomCheckBox: eui.CheckBox;
	private checkboxs:eui.CheckBox[] = [];

	private topCheckBoxImage: eui.Image;
	private middleCheckBoxImage: eui.Image;
	private bottomCheckBoxImage: eui.Image; 
	private weatherImages: eui.Image[] = [];

	private resultGroup: eui.Group;
	private resultImage: eui.Image;
	private resultLabel: eui.Label;
	private replayButton: ImageButton;
	private nextSceneButton: ImageButton;
	private exitButton: ImageButton;
	private startButtonTipLabel: eui.Label;

	private currentSoundChannel: egret.SoundChannel;
	private allWeathers = ['cloudy', 'spissatus', 'rainy', 'sunny', 'thunderstorm', 'shower'];
	private weathersForSelect = []; //供用户选择的三个天气
	private weather: Weather; //实际的天气

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
		this.checkboxs = [this.topCheckBox, this.middleCheckBox, this.bottomCheckBox];
		this.weatherImages = [this.topCheckBoxImage, this.middleCheckBoxImage, this.bottomCheckBoxImage];

		for (let checkbox of this.checkboxs) {
			checkbox.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCheckBoxClick, this);
		}
		this.replayButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReplayButtonClick, this);
		this.nextSceneButton.once(egret.TouchEvent.TOUCH_TAP, this.onNextPageButtonClick, this);
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitButtonClick, this);
		this.setCheckBoxImages();
	}

	private onReplayButtonClick(): void
	{
		this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('sound 1 (wreport2.mp3)_mp3') as egret.Sound).play(0, 1);
	}

	private setCheckBoxImages(): void
	{
		//从所有天气排除目标天气，再随机选两个出来
		let leftWeathers = this.allWeathers.filter(value => value != this.weather.result);
		leftWeathers.shuffle();
		this.weathersForSelect = [this.weather.result].concat(leftWeathers.slice(0, 2));
		//目标天气加上两个随机天气，最后混洗，最后变成三个包括目标天气的随机天气，完美。
		this.weathersForSelect.shuffle();
		for (let i = 0; i < this.weathersForSelect.length; i++) {
			this.weatherImages[i].source = this.weathersForSelect[i] + '_png';
		}
	}

	private onCheckBoxClick(e: egret.TouchEvent): void
	{
		let selectedIndex = Number((e.target as eui.Component).name);
		if (this.weather.result == this.weathersForSelect[selectedIndex]) {
			this.alertUserCorrect();
		} else {
			this.alertUserWrong();
		}
	}

	private async alertUserCorrect(): Promise<void>
	{
		this.showCorrectResultGroup();
		this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('you_are_correct_mp3') as egret.Sound).play(0, 1);
		for (let checkbox of this.checkboxs) {
			checkbox.enabled = false;
		}
		this.nextSceneButton.enabled = true;
		await ThreadUtility.sleep(3000);
		this.resultGroup.visible = false;
	}

	private async alertUserWrong(): Promise<void>
	{
		this.showWrongResultGroup();
		this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('wrong_answer_mp3') as egret.Sound).play(0, 1);
		await ThreadUtility.sleep(3000);
		this.resultGroup.visible = false;
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

	private stopCurrentSoundChannel(): void
	{
		if (this.currentSoundChannel != null) {
			this.currentSoundChannel.stop();
		}
	}

	private onNextPageButtonClick(e: egret.TouchEvent): void
	{
		this.stopCurrentSoundChannel();
		Main.instance.gotoScene(new CompleteScene());
	}

	private onExitButtonClick(e: egret.TouchEvent): void
	{
		window.close();
	}
}