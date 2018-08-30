interface Game3View {
	showNextQuestionAnimation(): void;
	showNextLevelAnimation(): void;
	showAlertInfo(info: string): void;
	showCorrectGroup(): void;
	showAlertBoy(info: string): void;
	showNextLevelComponent(): void;
 	hideAlertInfo(): void;
	hideLackNameGroup(): void;
	hideCorrectGroup(): void;
}