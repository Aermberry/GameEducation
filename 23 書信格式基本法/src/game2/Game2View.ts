interface Game2View {
	showNextQuestionAnimation(): void;
	showNextLevelAnimation(): void;
	showAlertInfo(info: string): void;
	showCorrectGroup(): void;
	showCorrectNameGroup(): void;
	showAlertElder(info: string): void;
	showNextLevelComponent(): void;
 	hideAlertInfo(): void;
	hideLackNameGroup(): void;
	hideCorrectGroup(): void;
	alertYouAreCorrect(): void;
}