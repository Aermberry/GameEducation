interface ICalculationView {
	questionIndex: number;

	minuend: number;
	subtrahend: number;

	/** 令和的指定位进入编辑模式 */
	changeDifferenceToEditMode(position: number): void;
	/** 令和的指定位进入只读模式 */
	changeDifferenceToViewMode(position: number): void;

	/** 读取用户输入的指定位的和 */
	getDifferenceAsync(position: number): Promise<string>;
	/** 用户输入的和是错误的，显示详细错误 */
	showDifferenceError(minuend: number, subtrahend: number): void;
	/** 用户输入的和是错误的，隐藏详细错误 */
	hideDifferenceError(): void;
	/** 简单提示用户输入的和是错误的 */
	changeDifferenceStatusToWrong(position: number): void;
	/** 简单提示用户输入的和是正确的 */
	changeDifferenceStatusToCorrect(position: number): void;

	/** 显示是否需要退位的对话框 */
	showNeedBorrowDialog(): void;
	/** 隐藏是否需要退位的对话框 */
	hideNeedBorrowDialog(): void;
	/** 获取用户是否需要退位的选择 */
	confirmNeedBorrowAsync(): Promise<boolean>;
	/** 显示用户“是否退位”选择错误的提示 */
	showNeedBorrowError(): void;
	/** 隐藏用户“是否退位”选择错误的提示 */
	hideNeedBorrowError(): void;

	/** 令新被减数的指定位进入编辑模式 */
	changeNewMinuendToEditMode(position: number, borrowTime: number): void;
	/** 令新被减数的指定位进入只读模式 */
	changeNewMinuendToViewMode(position: number, borrowTime: number): void;
	/** 获取用户输入的退位数 */
	getNewMinuendAsync(position: number, borrowTime: number): Promise<string>;
	/** 简单提示用户输入的退位是错误的 */
	changeNewMinuendStatusToWrong(position: number, borrowTime: number): void;
	/** 简单提示用户输入的退位是正确的 */
	changeNewMinuendStatusToCorrect(position: number, borrowTime: number): void;
	/** 设置新被减数的指定位的值 */
	setNewMinuend(value: number, position: number, borrowTime: number): void;
	/** 显示新被减数错误的提示 */
	showNewMinuendError(minuend: number, position: number): void;
	/** 十位已向百位借1，變成10，又借1給個位，變成9。*/
	showMenuendIsTenError(): void;
	/** 隐藏新被减数错误的提示 */
	hideNewMinuendError(): void;
	/** 显示提示“十位是0, 再向百位借” */
	showBorrowOneFromHundredBecauseTenIsZeroTip(minuend: number): Promise<void>;
	/** 隐藏显示“十位是0, 再向百位借" */
	hideBorrowOneFromHundredBecauseTenIsZeroTip(): void;
	/** 十位借给个位后，移下多少？ */
	showHowMuchDecadeLeftAfterUnitBorrowOneTip(): void;

	/** 播放被减数被删除的动画 */
	playMinuendDeleteMovie(position: number, borrowTime: number): void;
	/** 隐藏被减数被删除的动画 */
	hideMinuendDeleteMovies(): void;

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