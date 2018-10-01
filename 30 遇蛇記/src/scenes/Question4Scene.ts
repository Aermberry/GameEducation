class Question4Scene extends eui.Component implements  eui.UIComponent {
	private topAnswerCheckbox: eui.CheckBox;
	private bottomAnswerCheckbox: eui.CheckBox;
	private topSpeakerButton: ImageButton;
	private bottomSpeakerButton: ImageButton;
	private nextSceneButton: ImageButton;
	private exitButton: ImageButton;

	private topSpeakerButtonPlayed = false; //用户是否已经播放顶部答案
	private bottomSpeakerButtonPlayed = false; //用户是否已经播放底部答案

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

		this.playGame();
	}

	private async playGame(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('dad_found_snake_is_fake.mp3');
		this.topSpeakerButton.enabled = true;
		this.bottomSpeakerButton.enabled = true;
	}

	private onTopSpeakerButtonClick(e: egret.TouchEvent): void
	{
		lzlib.SoundUtility.playSound('what_the_fuck_who_place_a_fake_snake_herer.mp3');
		this.topSpeakerButtonPlayed = true
		this.confirmBothSpeakersArePlayed()
	}

	private onBottomSpeakerButtonClick(e: egret.TouchEvent): void
	{
		lzlib.SoundUtility.playSound('wa_it_is_a_fake_snake_and_almost_die_of_fear_just_then.mp3');
		this.bottomSpeakerButtonPlayed = true
		this.confirmBothSpeakersArePlayed()
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
		if (this.topAnswerCheckbox.selected) {
			lzlib.SoundUtility.playSound('fangfang_found_the_snake_is_fake_and_laugh.mp3');
		}
	}

	private onBottomAnswerCheckboxClick(e: egret.TouchEvent): void
	{
		this.topAnswerCheckbox.selected = false;
		if (this.bottomAnswerCheckbox.selected) {
			lzlib.SoundUtility.playSound('you_are_right_and_go_to_next_page.mp3');
		}
		this.topAnswerCheckbox.enabled = false;
		this.bottomAnswerCheckbox.enabled = false;
		this.nextSceneButton.enabled = true;
		this.isCompleted = true;
	}

	private onNextPageButtonClick(e: egret.TouchEvent): void
	{
		Main.instance.gotoScene(new CompleteScene());
	}

	private onExitButtonClick(e: egret.TouchEvent): void
	{
		window.close();
	}
}