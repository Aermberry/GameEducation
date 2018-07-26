class CalculationPresenter {
	public view: ICalculationView;
	public expressionRepo: IExpressionRepository;
	private borrowTimes = []; //被减数每一位的已退位次数

	public constructor() {
	}

	public set degree(value: Degree)
	{
		switch (value) {
			case Degree.junior:
			this.expressionRepo = new JuniorExpressionRepository();
			break;

			case Degree.medium:
			this.expressionRepo = new MediumExpressionRepository();
			break;

			default:
			this.expressionRepo = new SeniorExpressionRepository();
			break;
		}
	}

	/**
	 * 	1. 系统从最低位起，取第一位的被减数和减数，向用户确认是否需要退位
		2. 用户输入退位数，系统判断是否正确
		3. 用户输入差值，系统确认是否正确
		4. 系统进入下一位
	 */
	public async startCalulation(): Promise<void>
	{
		this.resetUI();
		let expressions = this.expressionRepo.getAll();
		expressions.shuffle();
		for (let questionIndex = 0; questionIndex < expressions.length; questionIndex++) {
			this.view.questionIndex = questionIndex + 1;
			let expression = expressions[questionIndex];
			this.view.minuend = expression.minuend;
			let minuend = this.splitNumber(expression.minuend);
			this.view.subtrahend = expression.subtrahend;
			let subtrahend = this.splitNumber(expression.subtrahend);
			let result = expression.minuend - expression.subtrahend;
			this.borrowTimes = [0, 0, 0];
			
			for	(let position = 0; position < result.toString().length; position++) {
				let correctDifference = minuend[position] - subtrahend[position];
				this.view.changeDifferenceToEditMode(position);
				if (position < minuend.length - 1) {
					//最后一位不需要确认退位
					if (await this.confirmBorrowNeed(correctDifference)) {
						await this.borrowOneFrom(minuend, position + 1);
						minuend[position] += 10;
						this.view.playMinuendDeleteMovie(position, this.borrowTimes[position]);
						this.view.setNewMinuend(minuend[position], position, this.borrowTimes[position]);
					}
				}
				await this.calculateDifferenceBit(minuend[position], subtrahend[position], position);
				this.view.changeDifferenceToViewMode(position);
			}

			if (questionIndex != expressions.length - 1) {
				//这不是最后一题，用户可以按下一题
				this.view.showNextQuestionButton();
				this.view.openBox();
				await this.view.nextQuestionButtonClickAsync();
				this.view.hideNextQuestionButton();
				this.view.hideMinuendDeleteMovies();
				this.view.closeBox();
				this.view.clearUserInput();
			}
		}

		this.view.showAngle();
		this.view.startCongratulation();
	}

	private resetUI(): void
	{
		this.view.hideAngel();
		this.view.hideDifferenceError();
		this.view.hideNeedBorrowDialog();
		this.view.hideNeedBorrowError();
		this.view.closeBox();
		this.view.clearUserInput();
		this.view.stopCongratulation();
	}

	/**
	 * 计算某一位的差
	 */
	private async calculateDifferenceBit(minuend: number, subtrahend: number, position: number): Promise<void>
	{
		let correctDifference = minuend - subtrahend;
		var candidateDifference = await this.view.getDifferenceAsync(position);
		while (candidateDifference != correctDifference.toString()) {
			this.view.showAngle();
			this.view.showDifferenceError(minuend, subtrahend);
			this.view.changeDifferenceStatusToWrong(position);
			candidateDifference = await this.view.getDifferenceAsync(position);
		}
		this.view.hideAngel();
		this.view.hideDifferenceError();
		this.view.changeDifferenceStatusToCorrect(position);
	}

	/**
	 * 确认是否需要退位
	 */
	private async confirmBorrowNeed(correctDifference: number): Promise<boolean>
	{
		this.view.showNeedBorrowDialog();
		while(await this.view.confirmNeedBorrowAsync() != (correctDifference < 0)) {
			this.view.showAngle();
			this.view.showNeedBorrowError();
		}
		this.view.hideAngel();
		this.view.hideNeedBorrowDialog();
		this.view.hideNeedBorrowError();
		return correctDifference < 0;
	}

	/**
	 * 从本位借1给低位
	 */
	private async borrowOneFrom(minuend: number[], position: number): Promise<void>
	{
		if (minuend[position] < 1) {
			this.view.showBorrowOneFromHundredBecauseTenIsZeroTip(minuend[position + 1]);
			await this.borrowOneFrom(minuend, position + 1);
			minuend[position] += 10;
			this.view.setNewMinuend(minuend[position], position, this.borrowTimes[position]);
			this.borrowTimes[position]++;
			this.view.hideBorrowOneFromHundredBecauseTenIsZeroTip();
			this.view.showHowMuchDecadeLeftAfterUnitBorrowOneTip();
		}
		minuend[position]--;
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
		this.view.changeNewMinuendToEditMode(position, this.borrowTimes[position]);
		this.view.playMinuendDeleteMovie(position, this.borrowTimes[position]);
		let candidateNewMinuend = await this.view.getNewMinuendAsync(position, this.borrowTimes[position]);
		while (candidateNewMinuend != minuend.toString()) {
			this.view.showAngle();
			if (minuend + 1 == 10) {
				this.view.showMenuendIsTenError();
			} else {
				this.view.showNewMinuendError(minuend + 1, position - 1);
			}
			this.view.changeNewMinuendStatusToWrong(position, this.borrowTimes[position]);
			candidateNewMinuend = await this.view.getNewMinuendAsync(position, this.borrowTimes[position]);
		}
		this.view.hideAngel();
		this.view.hideNewMinuendError();
		this.view.changeNewMinuendStatusToCorrect(position, this.borrowTimes[position]);
		this.view.changeNewMinuendToViewMode(position, this.borrowTimes[position]);
		this.view.setNewMinuend(minuend, position, this.borrowTimes[position]);
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

	/**
	 * 把十进制数变成数字串，例如输入123, 返回[3,2,1]
	 */
	private splitNumber(num: number): number[]
	{
		return num.toString().split('').map(digit => parseInt(digit, 10)).reverse();
	}
}