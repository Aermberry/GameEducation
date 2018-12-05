class CalculationPresenter {
	private view: ICalculationView;
	private expressionRepo: IExpressionRepository;
	private correctAnswerCount = 0;
	private borrowNeed = false; //是否需要输入退位
	private expressions: Expression[];//题目
	private isClear = true;

	public constructor() {
	}

	/**
	 * 	1. 系统从最低位起，取第一位的被减数和减数，向用户确认是否需要退位
		2. 用户输入退位数，系统判断是否正确
		3. 用户输入差值，系统确认是否正确
		4. 系统进入下一位
	 */
	public async loadView(view: ICalculationView): Promise<void>
	{
		this.view = view;
		this.expressionRepo = new MediumExpressionRepository();
		await this.view.getNameAsync();
		this.borrowNeed = await this.view.confirmInputBorrowNeedAsync();
		this.view.correctAnswerCount = 0;
		this.view.alertFinishTips();
		this.expressions = this.expressionRepo.getAll();
		this.expressions.shuffle();
		for (let questionIndex = 0; questionIndex < this.expressions.length; questionIndex++) {
			try {
				this.view.questionIndex = questionIndex + 1;
				let expression = this.expressions[questionIndex];
				this.view.minuend = expression.minuend;
				let minuend = this.splitNumber(expression.minuend);
				this.view.subtrahend = expression.subtrahend;
				let subtrahend = this.splitNumber(expression.subtrahend);
				
				//判断当前是否最后一题；
				if(questionIndex+1 == this.expressions.length)
				{
					this.view.showOperation();
				}

				let answerDifferrence = await this.getAnswerDifferenceAndNewMinuendAsync(expression.minuend, expression.subtrahend);
				let correctDifference = this.getCorrectDifferenceAndNewMinuend(expression.minuend, expression.subtrahend);
				await this.view.confirmFinishButtonClick();

				

				if (answerDifferrence.equals(correctDifference, this.borrowNeed)) {
					this.correctAnswerCount++;
					this.view.correctAnswerCount = this.correctAnswerCount;
					this.view.alertAnswerCorrect();
					this.view.openBox();
				} else {
					this.view.alertAnswerWrong();
				}
				//判断是否需要显示下一题；

				this.view.questionIndex != this.expressions.length && this.view.showNextQuestionButton();
				this.view.showCorrectGroup();
				await this.showCorrectDifferenceAndNewMinuend(correctDifference);
				
				await this.view.nextQuestionButtonClickAsync();
				this.view.closeBox();
				this.view.hideNextQuestionButton();
				this.view.hideCorrectGroup();
				this.view.hideAnswerStatus();
				this.view.hideAnswerMinuendDeleteMovies();
				this.view.hideCorrectMinuendDeleteMovies();
				this.view.clearUserInput();
			} catch (ex) {
				if (ex.message == EraseError.message) {
					//重新做该题
					this.view.clearUserInput();
					this.view.hideAnswerMinuendDeleteMovies();
					questionIndex--;
					console.log(questionIndex);
				} else {
					throw ex;
				}
			}
		}
	}

	/**
	 * 获取用户输入的差、新被减数
	 */
	private async getAnswerDifferenceAndNewMinuendAsync(minuend: number, subtrahend: number): Promise<DifferenceAndNewMinuend>
	{
		let differenceArray = [];
		let newMinuendArray = [[], [], []];
		let borrowTimes = [0, 0, 0]; //被减数每一位的已退位次数

		for (let position = 0; position < 3; position++) {
			if (this.borrowNeed && position < 2 && await this.view.confirmBorrowNeedAsync()) {
				let higherPosition = position + 1;
				this.view.playAnswerMinuendDeleteMovie(higherPosition, borrowTimes[higherPosition]);
				this.view.changeAnswerNewMinuendToEditMode(higherPosition, borrowTimes[higherPosition]);
				newMinuendArray[higherPosition].push(await this.view.getNewMinuendAsync(higherPosition, borrowTimes[higherPosition]));
				this.view.changeAnswerNewMinuendToViewMode(higherPosition, borrowTimes[higherPosition]);
				borrowTimes[higherPosition]++;

				this.view.playAnswerMinuendDeleteMovie(position, borrowTimes[position]);
				this.view.setAnswerNewMinuend((this.getDigitAtPosition(minuend, position) + 10 - borrowTimes[position]).toString(), position, borrowTimes[position])
				newMinuendArray[position].push((this.getDigitAtPosition(minuend, position) + 10));
			}
			this.view.changeAnswerDifferenceToEditMode(position);
			differenceArray[position] = await this.view.getDifferenceAsync(position);
			this.view.changeAnswerDifferenceToViewMode(position);

			if (position == 2 && differenceArray[position] == 0) {
				this.view.setAnswerDifference('', position);
			}
		}

		return new DifferenceAndNewMinuend(parseInt(differenceArray.reverse().join(''), 10), newMinuendArray);
	}

	private getCorrectDifferenceAndNewMinuend(minuend: number, subtrahend: number): DifferenceAndNewMinuend
	{
		return new DifferenceAndNewMinuend(minuend - subtrahend, this.getCorrectNewMinuend(this.splitNumber(minuend), this.splitNumber(subtrahend)));
	}

	/**
	 * 获取新的被减数
	 */
	private getCorrectNewMinuend(minuendArray: number[], subtrahendArray: number[]): number[][]
	{
		let newMinuend = [[], [], []];
		for (let position = 0; position < minuendArray.toString().length; position++) {
			if (minuendArray[position] < subtrahendArray[position]) {
				newMinuend[position].push(minuendArray[position] + 10);
				minuendArray[position + 1]--;
				newMinuend[position + 1].push(minuendArray[position + 1]);
			}
		}
		return newMinuend;
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

	/** 显示正确的差、新被减数 */
	private async showCorrectDifferenceAndNewMinuend(result: DifferenceAndNewMinuend): Promise<void>
	{
		let borrowTimes = [0, 0, 0];
		for (let position = 0; position < 3; position++) {
			if (this.borrowNeed) {
				if (result.newMinuend[position].length > borrowTimes[position]) {
					this.view.playCorrectMinuendDeleteMovie(position + 1, borrowTimes[position + 1]);
					this.view.setCorrectNewMinuend(result.newMinuend[position + 1][borrowTimes[position + 1]].toString(), position + 1, borrowTimes[position + 1]);
					borrowTimes[position + 1]++;

					this.view.playCorrectMinuendDeleteMovie(position, borrowTimes[position]);
					this.view.setCorrectNewMinuend(result.newMinuend[position][borrowTimes[position]].toString(), position, borrowTimes[position]);
					borrowTimes[position]++;
					await lzlib.ThreadUtility.sleep(500);
				}
			}

			if (position == 2 && this.getDigitAtPosition(result.difference, position) == 0) {
				this.view.setCorrectDifference('', position);
			} else {
				this.view.setCorrectDifference(this.getDigitAtPosition(result.difference, position).toString(), position);
			}
			await lzlib.ThreadUtility.sleep(500);
		}
	}

}