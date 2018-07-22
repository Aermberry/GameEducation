class CalculationPresenter {
	public view: ICalculationView;

	public constructor() {
	}

	/**
	 * 	1. 从最低位起，取第一位和进位，要求用户输入第一位相加的结果
		2. 用户输入后，系统判断是否正确
		3. 系统向用户确认是否需要进位
		4. 用户输入进位数，系统判断是否正确
		5. 系统进入下一位
	 */
	public async startCalulation(): Promise<void>
	{
		let addend = 456;
		let augend = 789;

		this.view.addend = addend;
		this.view.augend = augend;
		var carry = 0; //进位
		
		for	(let position = 0; position < (addend + augend).toString().length; position++) {
			let correctSum = this.getDigitAtPosition(addend, position) + this.getDigitAtPosition(augend, position) + carry;
			await this.calculateSumBit(addend, augend, carry, position);
			if (position < this.getMaxNumberLength(addend, augend) - 1) {
				//最后一位不需要确认进位
				this.view.changeCarryToEditMode(position);
				await this.confirmCarryNeed(correctSum); 
				await this.calculateCarry(correctSum, position);
				this.view.changeCarryToViewMode(position);
			}
			carry = this.getDigitAtPosition(correctSum, 1);
		}

		this.view.showAngle();
		this.view.congratulation();
	}

	/**
	 * 计算某一位的和
	 */
	private async calculateSumBit(addend: number, augend: number, carry: number, position: number): Promise<void>
	{
		let correctSum = this.getDigitAtPosition(addend, position) + this.getDigitAtPosition(augend, position) + carry;
		this.view.changeSumToEditMode(position);
		var candidateSum = await this.view.getSumAsync(position);
		while (candidateSum != this.getDigitAtPosition(correctSum, 0).toString()) {
			this.view.showAngle();
			if (position == 0) {
				this.view.showFirstSumError(this.getDigitAtPosition(addend, position), this.getDigitAtPosition(augend, position));
			} else {
				this.view.showSumError(this.getDigitAtPosition(addend, position), this.getDigitAtPosition(augend, position));
			}
			this.view.changeSumStatusToWrong(position);
			candidateSum = await this.view.getSumAsync(position);
		}
		this.view.hideAngel();
		this.view.hideSumError();
		this.view.changeSumStatusToCorrect(position);
		this.view.changeSumToViewMode(position);
	}

	/**
	 * 确认是否需要进位
	 */
	private async confirmCarryNeed(correctSum: number): Promise<void>
	{
		this.view.showNeedCarryDialog();
		while(await this.view.confirmNeedCarryAsync() != (correctSum >= 10)) {
			this.view.showAngle();
			this.view.showNeedCarryError();
		}
		this.view.hideAngel();
		this.view.hideNeedCarryDialog();
		this.view.hideNeedCarryError();
	}

	/**
	 * 计算进位
	 */
	private async calculateCarry(correctSum: number, position: number): Promise<void>
	{
		let candidateCarry = await this.view.getCarryAsync(position);
		while (candidateCarry != this.getDigitAtPosition(correctSum, 1).toString()) {
			this.view.showAngle();
			this.view.showNeedCarryError();
			this.view.changeCarryStatusToWrong(position);
			candidateCarry = await this.view.getCarryAsync(position);
		}
		this.view.hideAngel();
		this.view.hideNeedCarryError();
		this.view.changeCarryStatusToCorrect(position);
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
	private getDigitAtPosition(num: number, position: number): number
	{
		let str = num.toString();
		return position >= str.length ? 0 : parseInt(str[str.length - position - 1], 10);
	}
}