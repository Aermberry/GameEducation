class InputExpressionPresenter {
	private view: IInputExpressionView;
	private expression = ''; //用户输入的横式

	public constructor() 
	{
	}

	public loadView(view: IInputExpressionView): void
	{
		this.view = view;
	}

	public onNumberPadKeyDown(e: KeyDownEvent): void
	{
		if (e.char == '' && this.expression.length > 0) {
			this.expression = this.expression.substr(0, this.expression.length - 1);
		} else {
			this.expression += e.char;
		}
		this.view.expression = this.expression;
	}

	public onSubmitButtonClick(): void
	{
		if (this.expression.indexOf('+') >= 0) {
			let operands = this.expression.split('+');
			this.view.openAddCalculationScene(parseInt(operands[0], 10), parseInt(operands[1], 10));
		} else {
			let operands = this.expression.split('-');
			this.view.openSubtractCalculationScene(parseInt(operands[0], 10), parseInt(operands[1], 10));
		}
	}
}