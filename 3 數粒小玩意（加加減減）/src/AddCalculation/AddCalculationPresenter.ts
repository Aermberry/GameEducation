class AddCalculationPresenter {
	private view: IAddCalculationView;
	private addend = 0;
	private augend = 0;

	public constructor(addend: number, augend: number) {
		this.addend = addend;
		this.augend = augend;
	}

	public loadView(view: IAddCalculationView, ) {
		this.view = view;
		this.view.addend = this.addend;
		this.view.augend = this.augend;
	}

	public async onStartButtonClick(): Promise<void>
	{
		this.view.hideStartButton();
		this.view.showRestartButton();

		var carry = 0;
		let sumLength = (this.addend + this.augend).toString().length;
		for	(let position = 0; position < sumLength; position++) {
			let correctSum = this.getDigitAtPosition(this.addend, position) + this.getDigitAtPosition(this.augend, position) + carry;
			this.view.highlightOperand(position);
			if (sumLength != 4 || position < sumLength - 1) {
				//最后一位不需要移动操作数
				await this.view.moveAddendToAugend(position);
				await this.view.mergeAddendAndAugend(position);
			}
			await this.confirmSum(correctSum, position);

			if (position < this.getMaxNumberLength(this.addend, this.augend) - 1) {
				//最后一位不需要确认进位
				await this.confirmCarryNeed(correctSum)
				if (correctSum >= 10) {
					this.view.setCarry(1, position);
					await this.view.mergeCarry(position);
					
				}
			}

			let answerSum = (this.addend + this.augend).toString();

			if (position == answerSum.length - 1 )
			{
				//應彈出 問用戶重新開始還是繼續
				this.view.showAlertImage();
			} 			
		
			this.view.normalizeOperand(position);
			carry = this.getDigitAtPosition(correctSum, 1);
		}

		this.view.startCongratulation();
	}

	/**
	 * 计算某一位的和
	 */
	private async confirmSum(correctSum: number, position: number): Promise<void>
	{
		this.view.changeSumToEditMode(position);
		while (await this.view.getSumAsync(position) != this.getDigitAtPosition(correctSum, 0).toString()) {
			this.view.alertThingCarefully();
		}
		this.view.changeSumToViewMode(position);
	}

	/**
	 * 确认是否需要进位
	 */
	private async confirmCarryNeed(correctSum: number): Promise<void>
	{
		this.view.showNeedCarryDialog();
		while(await this.view.confirmNeedCarryAsync() != (correctSum >= 10)) {
			this.view.alertThingCarefully();
		}
		this.view.hideNeedCarryDialog();
	}

	public onRestartButtonClick(): void
	{
		this.view.openInputExpressoionScene();
	}

	public onExitButtonClick(): void
	{
		this.view.exit();
	}

	/**
	 * 获取两个数最大的是多少位
	 */
	private getMaxNumberLength(left: number, right: number): number
	{
		return Math.max(left, right).toString().length;
	}

	/**
	 * 获取指定位置的数字
	 */
	public getDigitAtPosition(num: number, position: number): number
	{
		let str = num.toString();
		return position >= str.length ? 0 : parseInt(str[str.length - position - 1], 10);
	}
}