interface IInputExpressionView {
	expression: string;
	openAddCalculationScene(addend: number, augend: number): void;
	openSubtractCalculationScene(minuend: number, subtrahend: number): void;
	showNotEnoughImage(): void;
	hideNotEnoughImage(): void;
	showEmptyImage(): void;
	hideEmptyImage(): void;
	stopIntroductionMP3(): void;
}