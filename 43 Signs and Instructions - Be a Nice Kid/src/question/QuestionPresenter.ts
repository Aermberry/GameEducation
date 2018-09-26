class QuestionPresenter {
	
	private questionRepo = new QuestionRepository();
	private view: QuestionView;
	private questionsLeft = 3;
	private answeredQuestions: Question[] = []; //the questions have been answered
	private options: Question[] = []; //four options to select
	private answer: Question; //the correct answer
	
	public constructor() {
	}
	
	public loadView(view: QuestionView): void
	{
		this.view = view;
		this.view.loadBoy(BoyRepository.boys[BoyRepository.currentBoy])
		this.showCurrentQuestion();
	}

	private showCurrentQuestion(): void
	{
		this.view.cleartRadioSelect()
		this.view.showOptionAnswerGroup();
		this.answer = this.questionRepo.random(1, this.answeredQuestions)[0];
		this.options = this.questionRepo.random(3, [this.answer]).concat([this.answer]);
		this.options.shuffle();
		this.view.answer = this.answer;
		this.view.options = this.options;
		this.view.playMP3();
		this.view.showOptionAndAnswer();
	}

	public onOptionSelect(optionIndex: number): void
	{
		if (this.options[optionIndex] == this.answer) {
			this.view.hideRepeatLabel();
			this.view.hideHornComponent();
			this.view.disableOptionSelect();
			this.view.showContinueButton();
			this.view.showLikeImage();
			this.view.showAnswer(this.answer.sentence);
			this.answeredQuestions.push(this.answer);
			this.questionsLeft--;
			if (this.questionsLeft == 0) { 
				this.view.openFinishScene();
			}
		} else {
			this.view.alertSelectWrong();
		}
	}

	public async onContinueButtonClick(): Promise<void>
	{
		this.view.hideOptionAnswerGroup();
		
		await lzlib.ThreadUtility.sleep(2000);
		// await this.view.offerGift(); //give gift to main role
		this.view.showHornComponent();
		this.view.showOkButton();
		this.view.showRepeatLabel();
		this.view.hideLikeImage();
		this.view.hideAnswer();
		this.view.enableOptionSelect();
		
		this.showCurrentQuestion();
	}

}