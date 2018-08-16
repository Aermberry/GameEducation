class Question3AnswerScene extends eui.Component implements  eui.UIComponent {
	private topCheckBox: eui.CheckBox;
	private middleCheckBox: eui.CheckBox;
	private bottomCheckBox: eui.CheckBox;
	private resultGroup: eui.Group;
	private resultImage: eui.Image;
	private resultLabel: eui.Label;
	private nextSceneButton: ImageButton;
	private exitButton: ImageButton;
	private startButtonTipLabel: eui.Label;

	private currentSoundChannel: egret.SoundChannel;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.topCheckBox.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTopCheckBoxClick, this);
		this.middleCheckBox.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMiddleCheckBoxClick, this);
		this.bottomCheckBox.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBottomCheckBoxClick, this);
		this.nextSceneButton.once(egret.TouchEvent.TOUCH_TAP, this.onNextPageButtonClick, this);
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitButtonClick, this);
		this.playQuestionSound();
	}

	private async playQuestionSound(): Promise<void>
	{
		await ThreadUtility.playSound('sound 17 (news_q3.mp3)_mp3');
		await ThreadUtility.playSound('sound 16 (news_q3_c1.mp3)_mp3');
		await ThreadUtility.playSound('sound 15 (news_q3_c2.mp3)_mp3');
		await ThreadUtility.playSound('sound 14 (news_q3_c3.mp3)_mp3');
		this.topCheckBox.enabled = true;
		this.middleCheckBox.enabled = true;
		this.bottomCheckBox.enabled = true;
	}

	private async onTopCheckBoxClick(): Promise<void>
	{
		this.showWrongResultGroup();
		this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('sound 34 (inst_fb_3a.mp3)_mp3') as egret.Sound).play(0, 1);
		await ThreadUtility.sleep(3000);
		this.resultGroup.visible = false;
	}

	private async onMiddleCheckBoxClick(): Promise<void>
	{
		this.showCorrectResultGroup();
		this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('sound 33 (inst_fb_3b.mp3)_mp3') as egret.Sound).play(0, 1);
		this.topCheckBox.enabled = false;
		this.middleCheckBox.enabled = false;
		this.bottomCheckBox.enabled = false;
		this.nextSceneButton.enabled = true;
		await ThreadUtility.sleep(3000);
		this.resultGroup.visible = false;
	}

	private async onBottomCheckBoxClick(): Promise<void>
	{
		this.showWrongResultGroup();
		this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('sound 32 (inst_fb_3c.mp3)_mp3') as egret.Sound).play(0, 1);
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
		Main.instance.gotoScene(new Question4Scene());
	}

	private onExitButtonClick(e: egret.TouchEvent): void
	{
		window.close();
	}
}