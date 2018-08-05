interface IInputExpressionView {
	expression: string;
	openAddCalculationScene(addend: number, augend: number): void;
	openSubtractCalculationScene(minuend: number, subtrahend: number): void;
}