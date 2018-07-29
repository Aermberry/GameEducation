interface ICalculationView {
	questionIndex: number;
	correctAnswerCount: number;

	/** 要求用户输入姓名 */
	getNameAsync(): Promise<string>
	/** 向用户确认是否需要输入进位 */
	confirmCarryNeedAsync(): Promise<boolean>

	addend: number;
	augend: number;

	/** 令和的指定位进入编辑模式 */
	changeAnswerSumToEditMode(position: number): void;
	/** 令和的指定位进入只读模式 */
	changeAnswerSumToViewMode(position: number): void;
	/** 获取用户输入的和 */
	getSumAsync(position: number): Promise<number>;
	setAnswerSum(sum: string, position: number): void;
	/** 令进位的指定位进入编辑模式 */
	changeAnswerCarryToEditMode(position: number): void;
	/** 令进位的指定位进入只读模式 */
	changeAnswerCarryToViewMode(position: number): void;
	/** 获取用户输入的进位数 */
	getCarryAsync(position: number): Promise<string>;

	/** 令和的指定位进入编辑模式 */
	changeCorrectSumToEditMode(position: number):void;
	/** 令和的指定位进入只读模式 */
	changeCorrectSumToViewMode(position: number): void;
	/** 设置指定位的和 */
	setCorrectSum(sum: string, position: number): void;
	/** 令进位的指定位进入编辑模式 */
	changeCorrectCarryToEditMode(position: number): void;
	/** 令进位的指定位进入只读模式 */
	changeCorrectCarryToViewMode(position: number): void;
	/** 设置指定位的进位 */
	setCorrectCarry(carry: string, position: number): void;

	showNextQuestionButton(): void;
	hideNextQuestionButton(): void;
	/** 等待用户点击“下一题" */
	nextQuestionButtonClickAsync(): Promise<void>;

	alertAnswerCorrect(): void;
	alertAnswerWrong(): void;
	hideAnswerStatus(): void;
	showCorrectGroup(): void;
	hideCorrectGroup(): void;
	openBox(): void;
	closeBox(): void;

	/** 清除用户的输入 */
	clearUserInput(): void;
	openRankingScene(): void;
}