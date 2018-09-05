class GamePresenter {
	private sentenceRepo = new SentenceRepository();
	private conjunctionRepo = new ConjunctionRepository();
	private view: GameView;
	private sentence: Sentence;
	private sentenceIndex = 0;
	private leftConjuction: Conjunction;
	private rightConjunction: Conjunction;

	public constructor() {
	}

	public loadView(view: GameView, sentenceIndex: number): void {
		this.view = view;
		this.sentenceIndex = sentenceIndex;
		this.sentence = this.sentenceRepo.get(LevelBiz.instance.currentLevel, sentenceIndex);
		this.view.showAllConjunctions(this.conjunctionRepo.getAll());
		if (sentenceIndex == 0) {
			this.view.playAudioHowToPlay();
		}
	}

	public onConjunctionTouchBegin(): void {
		this.view.showConjunctionPlaceHolderInTrain();
	}

	public onConjunctionTouchCancel(): void {
		this.view.hideConjunctionPlaceHolderInTrain();
	}

	public onLeftConjunctionDrop(conjuctionIndex: number): void {
		this.leftConjuction = this.conjunctionRepo.get(conjuctionIndex);
		this.view.showLeftConjunction(this.leftConjuction.text);
		this.view.disableDropLeftConjunctionInTrain();
		this.view.hideConjunction(conjuctionIndex);
		this.view.hideConjunctionPlaceHolderInTrain();
		this.playSentenceWithConjunction();
	}

	public onRightConjunctionDrop(conjuctionIndex: number): void {
		this.rightConjunction = this.conjunctionRepo.get(conjuctionIndex);
		this.view.showRightConjunction(this.leftConjuction.text);
		this.view.disableDropRightConjunctionInTrain();
		this.view.hideConjunction(conjuctionIndex);
		this.view.hideConjunctionPlaceHolderInTrain();
		this.playSentenceWithConjunction();
	}

	private async playSentenceWithConjunction(): Promise<void> {
		if (this.leftConjuction != null && this.rightConjunction != null) {
			await this.view.playAudioYourSentenceIsAsync();
			await this.view.playAudio(this.leftConjuction.audioName);
			await this.view.playAudio(this.sentence.clauses[0].audioName);
			await this.view.playAudio(this.rightConjunction.audioName);
			await this.view.playAudio(this.sentence.clauses[1].audioName);
			await this.view.playAudioYouCanPressValidationButton();
			this.view.enableValidationButton();
		}
	}

	public async onValidationButtonClick(): Promise<void> {
		this.view.disableValidationButton();
		if (this.sentence.validate(this.leftConjuction, this.rightConjunction)) {
			this.view.playAudioYouAreCorrect();
			this.view.enableNextButton();
			this.view.playMovieTrainGo();
		} else {
			this.view.showAllConjunctions();
			this.view.hideConjunctionsInTrain();
			this.view.enableDropLeftConjunctionInTrain();
			this.view.enableDropRightConjunctionInTrain();
			await this.view.playAudioYouAreWrongAsync();
			this.view.playAudio(this.sentence.tipsAudioName);
		}
	}

	public async onNextButtonClick(): Promise<void> {
		this.sentenceIndex++;
		if (this.sentenceRepo.get(LevelBiz.instance.currentLevel, this.sentenceIndex) == null) {
			this.view.showCurrentLevelFinished();
			await lzlib.ThreadUtility.sleep(1500);
			LevelBiz.instance.currentLevel++;
			this.view.openBackgroundScene();
		} else {
			this.view.openGameScene(this.sentenceIndex);
		}
	}

	public onLeftGirlImageClick(): void {
		this.view.playAudio(this.sentence.clauses[0].audioName);
	}

	public onRightGirlImageClick(): void {
		this.view.playAudio(this.sentence.clauses[1].audioName);
	}
}