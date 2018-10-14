class SubtractCalculationPresenter {
	private view: ISubtractCalculationView;
	private minuend = 0;
	private subtrahend = 0;
	private borrowTimes = []; //被减数每一位的已退位次数

	public constructor(minuend: number, subtrahend: number) 
	{
		this.minuend = minuend;
		this.subtrahend = subtrahend;
	}

	public loadView(view: ISubtractCalculationView): void
	{
		this.view = view;
		this.view.minuend = this.minuend;
		this.view.subtrahend = this.subtrahend;
	}

	public async onStartButtonClick(): Promise<void>
	{
		this.view.hideStartButton();
		this.view.showRestartButton();

		let minuend = this.splitNumber(this.minuend);
		let subtrahend = this.splitNumber(this.subtrahend);
		let result = this.minuend - this.subtrahend;
		this.borrowTimes = [0, 0, 0];
		
		for	(let position = 0; position < result.toString().length; position++) {
			this.view.highlightOperand(position);
			let correctDifference = minuend[position] - subtrahend[position];
			if (position < minuend.length - 1) {
				//最后一位不需要确认退位
				if (await this.confirmBorrowNeed(correctDifference)) {
					let borrowedComponent = await this.borrowOneFrom(minuend, position + 1);
					borrowedComponent.play
					minuend[position] += 10;
					this.view.playMinuendDeleteMovie(position, this.borrowTimes[position]);
					this.view.setNewMinuend(minuend[position], position, this.borrowTimes[position]);
				}
			}
			await this.calculateDifferenceBit(minuend[position], subtrahend[position], position);
			this.view.normalizeOperand(position);
		}

		this.view.startCongratulation();
	}

	/**
	 * 计算某一位的差
	 */
	private async calculateDifferenceBit(minuend: number, subtrahend: number, position: number): Promise<void>
	{
		let correctDifference = minuend - subtrahend;
		this.view.changeDifferenceToEditMode(position);
		var candidateDifference = await this.view.getDifferenceAsync(position);
		while (candidateDifference != correctDifference.toString()) {
			this.view.alertThingCarefully();
			candidateDifference = await this.view.getDifferenceAsync(position);
		}
		this.view.changeDifferenceToViewMode(position);
	}

	/**
	 * 确认是否需要退位
	 */
	private async confirmBorrowNeed(correctDifference: number): Promise<boolean>
	{
		this.view.showNeedBorrowDialog();
		while(await this.view.confirmNeedBorrowAsync() != (correctDifference < 0)) {
			this.view.alertThingCarefully();
		}
		this.view.hideNeedBorrowDialog();
		return correctDifference < 0;
	}

	/**
	 * 从本位借1给低位
	 */
	private async borrowOneFrom(minuend: number[], position: number): Promise<void>
	{
		if (minuend[position] < 1) {
			this.view.alertBorrowOneFromHundredBecauseTenIsZeroTip(minuend[position + 1]);
			await this.borrowOneFrom(minuend, position + 1);
			minuend[position] += 10;
			this.view.setNewMinuend(minuend[position], position, this.borrowTimes[position]);
			this.borrowTimes[position]++;
		}
		minuend[position]--;
		await this.view.borrowOneFrom(position);
		await this.confirmNewMinuend(minuend[position], position);
		this.borrowTimes[position]++;
	}

	/**
	 * 确认用户输入的被减数与新减数一致
	 * minuend是新的被减数
	 * position是被借位的被减数的第几位
	 */
	private async confirmNewMinuend(minuend: number, position: number): Promise<void>
	{
		this.view.playMinuendDeleteMovie(position, this.borrowTimes[position]);
		this.view.setNewMinuend(minuend, position, this.borrowTimes[position]);
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

	/**
	 * 把十进制数变成数字串，例如输入123, 返回[3,2,1]
	 */
	private splitNumber(num: number): number[]
	{
		return num.toString().split('').map(digit => parseInt(digit, 10)).reverse();
	}
}