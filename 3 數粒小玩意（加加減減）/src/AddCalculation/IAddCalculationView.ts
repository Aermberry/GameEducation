interface IAddCalculationView {
	addend: number;
	augend: number;
	hideStartButton(): void;
	showRestartButton(): void;
	/** highlight操作数，包括expressionGroup和demoGroup里的操作数 */
	highlightOperand(position: number): void;
	/** 不再highlight操作数，包括expressionGroup和demoGroup里的操作数 */
	normalizeOperand(position: number): void;
	/** 把被加数移动到加数旁边 */
	moveAddendToAugend(position: number): Promise<void>;
	/** 合并被加数和加数 */
	mergeAddendAndAugend(position: number): Promise<void>;
	/** 合并进位 */
	mergeCarry(position: number): Promise<void>
	/** 设置进位 */
	setCarry(carry: number, position: number): void;
	/** 令和的指定位进入编辑模式 */
	changeSumToEditMode(position: number): void;
	/** 令和的指定位进入只读模式 */
	changeSumToViewMode(position: number): void;
	/** 读取用户输入的指定位的和 */
	getSumAsync(position: number): Promise<string>;
	/** 显示仔细想一想的提示 */
	alertThingCarefully(): Promise<void>;
	/** 显示是否需要进位的对话框 */
	showNeedCarryDialog(): void;
	/** 隐藏是否需要进位的对话框 */
	hideNeedCarryDialog(): void;
	/** 获取用户是否需要进位的选择 */
	confirmNeedCarryAsync(): Promise<boolean>;

	openInputExpressoionScene(): void;
	exit(): void;
	/** 显示通关动画 */
	startCongratulation(): void;
}