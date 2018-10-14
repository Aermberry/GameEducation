interface ICalculationView {
	questionIndex: number;
	correctAnswerCount: number;

	/** 要求用户输入姓名 */
	getNameAsync(): Promise<string>
	/** 向用户确认是是否要输入退位，在游戏一开始的时候出现。
	 * 如果用户选择是，在做题的每一步系统都会咨问用户是否要退位。
	 * 如果用户选择否，系统就不会再问用户是否要退位。 */
	confirmInputBorrowNeedAsync(): Promise<boolean>;
	/** 在做题的每一步系统都会咨问用户是否要退位 */
	confirmBorrowNeedAsync(): Promise<boolean>;

	minuend: number;
	subtrahend: number;

	/** 令差的指定位进入编辑模式 */
	changeAnswerDifferenceToEditMode(position: number): void;
	/** 令差的指定位进入只读模式 */
	changeAnswerDifferenceToViewMode(position: number): void;
	/** 获取用户输入的差 */
	getDifferenceAsync(position: number): Promise<number>;
	setAnswerDifference(value: string, position: number): void;
	/** 令退位的指定位进入编辑模式 */
	changeAnswerNewMinuendToEditMode(position: number, borrowTime: number): void;
	/** 令退位的指定位进入只读模式 */
	changeAnswerNewMinuendToViewMode(position: number, borrowTime: number): void;
	/** 获取用户输入的退位数 */
	getNewMinuendAsync(position: number, borrowTime: number): Promise<number>;
	/** 设置新被减数的指定位的值 */
	setAnswerNewMinuend(value: string, position, borrowTime: number): void;
	/** 播放被减数被删除的动画 */
	playAnswerMinuendDeleteMovie(position: number, borrowTime: number): void;
	/** 隐藏被减数被删除的动画 */
	hideAnswerMinuendDeleteMovies(): void;
	/** 显示完成按钮的提示 */
	alertFinishTips(): Promise<void>;
	/** 等待用户点击“完成按钮" */
	confirmFinishButtonClick(): Promise<void>

	/** 设置指定位的差 */
	setCorrectDifference(sum: string, position: number): void;
	/** 设置指定位的退位 */
	setCorrectNewMinuend(carry: string, position: number, borrowTime: number): void;
	/** 播放被减数被删除的动画 */
	playCorrectMinuendDeleteMovie(position: number, borrowTime: number): void;
	/** 隐藏被减数被删除的动画 */
	hideCorrectMinuendDeleteMovies(): void;

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
}