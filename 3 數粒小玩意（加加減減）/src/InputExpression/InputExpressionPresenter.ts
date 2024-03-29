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

	public async onSubmitButtonClick(): Promise<void>
	{
		let pattern = /^([0-9]{1,3})(\+|\-)([0-9]{1,3})$/;
		if (pattern.test(this.expression) == false)
		{
			//應彈出"請按指示輸入橫式"
			this.view.showEmptyImage();
			await lzlib.ThreadUtility.sleep(1500);
			this.view.hideEmptyImage();
			return;
		}

		if (this.expression.indexOf('+') >= 0) {
			
			let operands = this.expression.split('+');
			
			this.view.stopIntroductionMP3();
			this.view.openAddCalculationScene(parseInt(operands[0], 10), parseInt(operands[1], 10));
		} 

		else {
			let operands = this.expression.split('-');
			let leftNumber = parseInt(operands[0], 10);
			let rightNumber = parseInt(operands[1], 10);

			if (leftNumber < rightNumber)
			{
				//弹出"不夠減，再試一次"
				this.view.showNotEnoughImage();
				await lzlib.ThreadUtility.sleep(1500);
				this.view.hideNotEnoughImage();
				return;
			}
			
			this.view.stopIntroductionMP3();
			this.view.openSubtractCalculationScene(leftNumber, rightNumber);

		}
	}
}