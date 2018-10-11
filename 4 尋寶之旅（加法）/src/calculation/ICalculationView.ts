interface ICalculationView {
	questionIndex: number;

	addend: number;
	augend: number;

	/** 令和的指定位进入编辑模式 */
	changeSumToEditMode(position: number): void;
	/** 令和的指定位进入只读模式 */
	changeSumToViewMode(position: number): void;

	/** 令进位的指定位进入编辑模式 */
	changeCarryToEditMode(position: number): void;
	/** 令进位的指定位进入只读模式 */
	changeCarryToViewMode(position: number): void;

	/** 读取用户输入的指定位的和 */
	getSumAsync(position: number): Promise<string>;
	/** 用户输入的个位的和是错误的，显示详细错误 */
	showFirstSumError(addend: number, augend: number): void;
	/** 用户输入的和是错误的，显示详细错误 */
	showSumError(addend: number, augend: number): void;
	/** 用户输入的和是错误的，隐藏详细错误 */
	hideSumError(): void;
	/** 简单提示用户输入的和是错误的 */
	changeSumStatusToWrong(position: number): void;
	/** 简单提示用户输入的和是正确的 */
	changeSumStatusToCorrect(position: number): void;

	/** 显示是否需要进位的对话框 */
	showNeedCarryDialog(): void;
	/** 隐藏是否需要进位的对话框 */
	hideNeedCarryDialog(): void;
	/** 获取用户是否需要进位的选择 */
	confirmNeedCarryAsync(): Promise<boolean>;
	/** 显示用户“是否进位”选择错误的提示 */
	showNeedCarryError(): void;
	/** 隐藏用户“是否进位”选择错误的提示 */
	hideNeedCarryError(): void;

	/** 获取用户输入的进位数 */
	getCarryAsync(position: number): Promise<string>;
	/** 简单提示用户输入的进位是错误的 */
	changeCarryStatusToWrong(position: number);
	/** 简单提示用户输入的进位是正确的 */
	changeCarryStatusToCorrect(position: number);

	showAngle(): void;
	hideAngel(): void;

	showNextQuestionButton(): void;
	hideNextQuestionButton(): void;
	/** 等待用户点击“下一题" */
	nextQuestionButtonClickAsync(): Promise<void>;
	boyshowhie(): void;

	openBox(): void;
	closeBox(): void;

	/** 清除用户的输入 */
	clearUserInput(): void;

	/** 显示通关动画 */
	startCongratulation(): void;
	/** 关闭通关动画 */
	stopCongratulation(): void;
}