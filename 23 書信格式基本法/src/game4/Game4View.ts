interface Game4View {
	showNextQuestionAnimation(): void;
	showAlertInfo(info: string): void;
	showCorrectGroup(): void;
	showAlertSantaClaus(info: string): void;
	showCompleteAnimation(): void;
	showCorrectNameGroup(): void;
	showCorrectOfPart(): void;
 	hideAlertInfo(): void;
	hideLackNameGroup(): void;
	hideCorrectGroup(): void;
	playGame4CorrectAnimation(): void;
}