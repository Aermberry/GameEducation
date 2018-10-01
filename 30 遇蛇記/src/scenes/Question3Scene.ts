class Question3Scene extends eui.Component implements  eui.UIComponent {
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
		await lzlib.SoundUtility.playSound('fangfang_see_dad_is_nearby_and_she_is_not_so_afraid.mp3');
		this.topSpeakerButton.enabled = true;
		this.bottomSpeakerButton.enabled = true;
	}

	private onTopSpeakerButtonClick(e: egret.TouchEvent): void
	{
		lzlib.SoundUtility.playSound('yi_why_there_is_a_price_on_its_neck.mp3');
		this.topSpeakerButtonPlayed = true
		this.confirmBothSpeakersArePlayed()
	}

	private onBottomSpeakerButtonClick(e: egret.TouchEvent): void
	{
		lzlib.SoundUtility.playSound('the_snake_is_lying_motionless_with_price_on_its_neck.mp3');
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
			lzlib.SoundUtility.playSound('you_are_right_and_go_to_next_page.mp3');
		}
		this.topAnswerCheckbox.enabled = false;
		this.bottomAnswerCheckbox.enabled = false;
		this.nextSceneButton.enabled = true;
		this.isCompleted = true;
	}

	private onBottomAnswerCheckboxClick(e: egret.TouchEvent): void
	{
		this.topAnswerCheckbox.selected = false;
		if (this.bottomAnswerCheckbox.selected) {
			lzlib.SoundUtility.playSound('dad_feel_strange_and_would_not_be_certain.mp3');
		}
	}

	private onNextPageButtonClick(e: egret.TouchEvent): void
	{
		Main.instance.gotoScene(new Question4Scene());
	}

	private onExitButtonClick(e: egret.TouchEvent): void
	{
		window.close();
	}
}