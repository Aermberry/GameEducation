interface Game4View {
	showNextQuestionAnimation(): void;
	showAlertInfo(info: string): void;
	showCorrectGroup(): void;
	showAlertSantaClaus(info: string): void;
	showCompleteAnimation(): void;
	showCorrectNameGroup(): void;
	showCorrectOfPart(): void;
	showPartBorder(string: string): void;
	showWrongInfo(string: string): void;
	hideRect(): void
 	hideAlertInfo(): void;
	hideLackNameGroup(): void;
	hideCorrectGroup(): void;
	playGame4CorrectAnimation(): void;
	disableButton(): void;
}