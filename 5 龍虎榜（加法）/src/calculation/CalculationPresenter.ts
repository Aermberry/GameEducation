class CalculationPresenter {
	private view: ICalculationView;
	public numberGenerator: INumberGenerator;
	public maxQuestionCount = 3;
	public correctAnswerCount = 0;
	private carryNeed = false;
	private answerSum: SumAndCarry;
	private correctSum: SumAndCarry;
	private questionIndex: number;
	private questionPairs: number[][] = null;
	public isClear = false;
	private timer = null;

	public constructor() {
	}

	public async loadView(view: ICalculationView): Promise<void>
	{
		this.view = view;
		this.numberGenerator = new MediumNumberGenerator();
		this.questionPairs = this.range(0, this.maxQuestionCount).map(() => this.numberGenerator.generate(), this);
		await this.view.getNameAsync();
		this.carryNeed = await this.view.confirmCarryNeedAsync();
		this.view.correctAnswerCount = 0;
		for (this.questionIndex = 0; this.questionIndex < this.maxQuestionCount; this.questionIndex++) {
			try {
				this.view.questionIndex = this.questionIndex + 1;
				let pair = this.questionPairs[this.questionIndex];
				let addend = this.view.addend = pair[0];
				let augend = this.view.augend = pair[1];
				
				this.questionIndex == 0 && (this.view.showFInishTip());
				//判断是否为最后一题
				if(this.questionIndex+1 == this.maxQuestionCount){
					this.view.showOperation();
					this.view.hideNextQuestionButton();
				}

				this.timer = setInterval(async () => {
					if(this.isClear)
					{
						this.isClear = false;
						this.view.clearUserInput();
						this.answerSum = await this.getAnswerSumAndCarryAsync();	
					}
				},100)
				this.answerSum = await this.getAnswerSumAndCarryAsync();
				this.correctSum = this.getCorrectSumAndCarry(addend, augend);
				// if (this.answerSum.equals(this.correctSum, this.carryNeed)) {
				// 	this.correctAnswerCount++;
				// 	this.view.correctAnswerCount = this.correctAnswerCount;
				// 	this.view.alertAnswerCorrect();
				// 	this.view.openBox();
				// } else {
				// 	this.view.alertAnswerWrong();
				// }
				this.view.enableFinishImage();
				await this.view.nextQuestionButtonClickAsync();
				this.view.disableFinishImage();
				this.view.showFinishImage();
				this.view.closeBox();
				this.view.hideNextQuestionButton();
				this.view.hideCorrectGroup();
				this.view.hideAnswerStatus();
				this.view.clearUserInput();
			} catch (ex) {
				if (ex.message == EraseError.message) {
					//重新做该题
					this.view.clearUserInput();
					this.questionIndex--;
				} else {
					throw ex;
				}
			}
		}

	}

	range(start: number, count: number): number[] 
	{
		var ans = [];
		for (let i = 0; i <= count; i++) {
			ans.push(start + i);
		}
		return ans;
	}

	//当点击完成按钮时
	public async onInputFinish(): Promise<void>
	{		
			if (this.answerSum.equals(this.correctSum, this.carryNeed)) {
				this.correctAnswerCount++;
				this.view.correctAnswerCount = this.correctAnswerCount;
				this.view.alertAnswerCorrect();
				this.view.openBox();
			} else {
				this.view.alertAnswerWrong();
			}
			clearInterval(this.timer);
			// this.view.hideFInishTip();
			this.view.hideFinishImage();
			this.questionIndex+1 != this.maxQuestionCount && this.view.showNextQuestionButton();
			this.view.showCorrectGroup();
			await this.showCorrectSumAndCarry(this.correctSum);
	}


	/**
	 * 获取用户输入的和、进位
	 */
	private async getAnswerSumAndCarryAsync(): Promise<SumAndCarry>
	{
		let sumArray = [];
		let carryArray = [];
		for (let position = 0; position < 4; position++) {
			this.view.changeAnswerSumToEditMode(position);
			sumArray[position] = await this.view.getSumAsync(position);
			this.view.changeAnswerSumToViewMode(position);

			if (position == 3 && sumArray[position] == 0) {
				this.view.setAnswerSum('', position);
			}

			if (this.carryNeed && position < 2) {
				this.view.changeAnswerCarryToEditMode(position);
				carryArray[position] = await this.view.getCarryAsync(position);
				this.view.changeAnswerCarryToViewMode(position);
			}
		}

		return new SumAndCarry(parseInt(sumArray.reverse().join(''), 10), parseInt(carryArray.reverse().join(''), 10));
	}

	private getCorrectSumAndCarry(addend: number, augend: number): SumAndCarry
	{
		return new SumAndCarry(addend + augend, this.getCarry(addend, augend));
	}

	/**
	 * 获取和的进位
	 */
	private getCarry(addend: number, augend: number): number
	{
		let carryArray = [0];
		for (let position = 0; position < this.getMaxNumberLength(addend, augend); position++) {
			carryArray[position + 1] = Math.floor((this.getDigitAtPosition(addend, position) + this.getDigitAtPosition(augend, position) + carryArray[position]) / 10);
		}
		return parseInt(carryArray.reverse().join(''), 10) / 10 % 100;
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

	/** 显示正确的和、进位 */
	private async showCorrectSumAndCarry(result: SumAndCarry): Promise<void>
	{
		for (let position = 0; position < 4; position++) {
			this.view.changeCorrectSumToEditMode(position);
			this.view.setCorrectSum(this.getDigitAtPosition(result.sum, position).toString(), position);
			await lzlib.ThreadUtility.sleep(500);
			this.view.changeCorrectSumToViewMode(position);

			if (position == 3 && this.getDigitAtPosition(result.sum, position) == 0) {
				this.view.setCorrectSum('', position);
			}

			if (this.carryNeed && position < 2) {
				this.view.changeCorrectCarryToEditMode(position);
				this.view.setCorrectCarry(this.getDigitAtPosition(result.carry, position).toString(), position);
				await lzlib.ThreadUtility.sleep(500);
				this.view.changeCorrectCarryToViewMode(position);

				if (this.getDigitAtPosition(result.carry, position) == 0) {
					this.view.setCorrectCarry('', position);
				}
			}
		}
	}
}