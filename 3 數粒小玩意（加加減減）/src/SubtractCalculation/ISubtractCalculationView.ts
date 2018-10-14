interface ISubtractCalculationView {
	minuend: number;
	subtrahend: number;
	hideStartButton(): void;
	showRestartButton(): void;
	/** highlight操作数，包括expressionGroup和demoGroup里的操作数 */
	highlightOperand(position: number): void;
	/** 不再highlight操作数，包括expressionGroup和demoGroup里的操作数 */
	normalizeOperand(position: number): void;
	/** 把被加数移动到加数旁边 */
	//moveAddendToAugend(position: number): Promise<void>;
	/** 合并被加数和加数 */
	//mergeAddendAndAugend(position: number): Promise<void>;
	/** 借位 */
	borrowOneFrom(position: number): Promise<void>;
	/** 令差的指定位进入编辑模式 */
	changeDifferenceToEditMode(position: number): void;
	/** 令差的指定位进入只读模式 */
	changeDifferenceToViewMode(position: number): void;
	/** 读取用户输入的指定位的差 */
	getDifferenceAsync(position: number): Promise<string>;
	/** 显示仔细想一想的提示 */
	alertThingCarefully(): Promise<void>;
	/** 显示是否需要退位的对话框 */
	showNeedBorrowDialog(): void;
	/** 隐藏是否需要退位的对话框 */
	hideNeedBorrowDialog(): void;
	/** 获取用户是否需要退位的选择 */
	confirmNeedBorrowAsync(): Promise<boolean>;
	/** 设置新被减数的指定位的值 */
	setNewMinuend(value: number, position: number, borrowTime: number): void;
	/** 显示提示“十位是0, 再向百位借” */
	alertBorrowOneFromHundredBecauseTenIsZeroTip(minuend: number): Promise<void>;
	/** 播放被减数被删除的动画 */
	playMinuendDeleteMovie(position: number, borrowTime: number): void;

	openInputExpressoionScene(): void;
	exit(): void;
	/** 显示通关动画 */
	startCongratulation(): void;
}