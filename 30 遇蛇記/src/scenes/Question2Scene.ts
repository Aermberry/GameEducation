class Question2Scene extends eui.Component implements  eui.UIComponent {
	private topAnswerCheckbox: eui.CheckBox;
	private bottomAnswerCheckbox: eui.CheckBox;
	private topSpeakerButton: ImageButton;
	private bottomSpeakerButton: ImageButton;
	private nextSceneButton: ImageButton;
	private exitButton: ImageButton;

	private topSpeakerButtonPlayed = false; //用户是否已经播放顶部答案
	private bottomSpeakerButtonPlayed = false; //用户是否已经播放底部答案

	private currentSoundChannel: egret.SoundChannel;
	private isCompleted = false;

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
		this.topSpeakerButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTopSpeakerButtonClick, this);
		this.bottomSpeakerButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBottomSpeakerButtonClick, this);
		this.topAnswerCheckbox.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTopAnswerCheckboxClick, this);
		this.bottomAnswerCheckbox.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBottomAnswerCheckboxClick, this);
		this.nextSceneButton.once(egret.TouchEvent.TOUCH_TAP, this.onNextPageButtonClick, this);
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitButtonClick, this);

		(RES.getRes('dad_heard_fangfang_crying_and_come_to_see_why_mp3') as egret.Sound)
		.play(0, 1)
		.once(egret.Event.SOUND_COMPLETE, this.onPlayQuestionComplete, this);
	}

	private onPlayQuestionComplete(e: egret.Event): void
	{
		this.topSpeakerButton.enabled = true;
		this.bottomSpeakerButton.enabled = true;
	}

	private onTopSpeakerButtonClick(e: egret.TouchEvent): void
	{
		this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('ask_fangfang_to_stop_crying_roughly_mp3') as egret.Sound).play(0, 1)
		this.topSpeakerButtonPlayed = true
		this.confirmBothSpeakersArePlayed()
	}

	private onBottomSpeakerButtonClick(e: egret.TouchEvent): void
	{
		this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('dont_afraid_dad_is_here_mp3') as egret.Sound).play(0, 1)
		this.bottomSpeakerButtonPlayed = true
		this.confirmBothSpeakersArePlayed()
	}

	private stopCurrentSoundChannel(): void
	{
		if (this.currentSoundChannel != null) {
			this.currentSoundChannel.stop();
		}
	}

	private confirmBothSpeakersArePlayed(): void
	{
		this.topAnswerCheckbox.enabled 
		= this.bottomAnswerCheckbox.enabled 
		= !this.isCompleted && this.topSpeakerButtonPlayed && this.bottomSpeakerButtonPlayed;
	}

	private onTopAnswerCheckboxClick(e: egret.TouchEvent): void
	{
		this.bottomAnswerCheckbox.selected = false;
		this.stopCurrentSoundChannel();
		if (this.topAnswerCheckbox.selected) {
			this.currentSoundChannel = (RES.getRes('dad_is_comforting_fangfang_and_would_not_be_rough_mp3') as egret.Sound)
			.play(0, 1);
		}
	}

	private onBottomAnswerCheckboxClick(e: egret.TouchEvent): void
	{
		this.topAnswerCheckbox.selected = false;
		this.stopCurrentSoundChannel();
		if (this.bottomAnswerCheckbox.selected) {
			this.currentSoundChannel = (RES.getRes('you_are_right_and_go_to_next_page_mp3') as egret.Sound)
			.play(0, 1);
		}
		this.topAnswerCheckbox.enabled = false;
		this.bottomAnswerCheckbox.enabled = false;
		this.nextSceneButton.enabled = true;
		this.isCompleted = true;
	}

	private onNextPageButtonClick(e: egret.TouchEvent): void
	{
		this.stopCurrentSoundChannel();
		Main.instance.gotoScene(new Question3Scene());
	}

	private onExitButtonClick(e: egret.TouchEvent): void
	{
		window.close();
	}
}