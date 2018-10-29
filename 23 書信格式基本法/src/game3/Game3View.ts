interface Game3View {
	showNextQuestionAnimation(): void;
	showNextLevelAnimation(): void;
	showAlertInfo(info: string): void;
	showCorrectGroup(): void;
	showAlertBoy(info: string): void;
	showNextLevelComponent(): void;
	showCorrectOfPart(): void;
	showPartBorder(string: string): void;
	showWrongInfo(string: string): void;
	hideRect(): void
 	hideAlertInfo(): void;
	hideLackNameGroup(): void;
	hideCorrectGroup(): void;
	playGame3CorrectAnimation(): void;
	showContentDownAnimation(): void;
}