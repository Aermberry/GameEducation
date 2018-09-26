interface QuestionView {
	answer: Question;
	options: Question[];
	showLikeImage(): void;
	showOptionAnswerGroup(): void;
	showOption(arr: Question[]): void;
	showOptionAndAnswer(): void;
	showContinueButton(): void;
	showOkButton(): void;
	showAnswer(str: string): void;
	hideAnswer(): void;
	hideLikeImage(): void;
	hideRepeatLabel(): void;
	hideHornComponent(): void;
	hideOptionAnswerGroup(): void;
	showRepeatLabel(): void;
	showHornComponent(): void;
	disableOptionSelect(): void;
	enableOptionSelect(): void;
	playMP3(): Promise<void>;
	setAnswer(question: Question): void;
	openFinishScene(): void;
	alertSelectWrong(): void;
	cleartRadioSelect(): void
	loadBoy(source: string): void;
}