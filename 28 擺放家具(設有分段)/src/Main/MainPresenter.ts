class MainPresenter {
	private view: MainView;
	private rounds: RoundPresenter[];
	private currentRound: RoundPresenter;

	public constructor() {
	}

	public async loadView(view: MainView, goods: GoodsComponent[]): Promise<void>
	{
		this.view = view;
		this.rounds = [
			new RoundPresenter(view, 'sound 11 (contentSoundRaw0)_mp3', goods.slice(0, 3), false),
			new RoundPresenter(view, 'sound 10 (contentSoundRaw1)_mp3', goods.slice(3, 6), false),
			new RoundPresenter(view, 'sound 9 (contentSoundRaw2)_mp3', goods.slice(6, 8), true)
		];
		this.currentRound = this.rounds[0];
		await this.view.playIntroductionAudio();
		this.view.hideToastView();
		this.currentRound.play();
	}

	public onInstructionButtonClick(): void
	{
		this.currentRound.onInstructionButtonClick();
	}

	public onValidateButtonClick(): void
	{
		this.currentRound.onValidateButtonClick();
	}

	public onContinueButtonClick(): void
	{
		this.currentRound.onContinueButtonClick();
	}

	public onNextRoundButtonClick(): void
	{
		this.view.addProgressBarBaseCount(this.currentRound.goods.length);
		this.currentRound = this.rounds[this.rounds.indexOf(this.currentRound) + 1];
		this.currentRound.play();
	}

	public onReplayButtonClick(): void
	{
		this.view.reopenMyself();
	}

	public onExitButtonClick(): void
	{
		this.view.exit();
	}
}