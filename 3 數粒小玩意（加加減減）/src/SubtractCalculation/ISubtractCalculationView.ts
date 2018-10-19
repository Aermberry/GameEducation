interface ISubtractCalculationView {
	minuend: number;
	subtrahend: number;
	hideStartButton(): void;
	showRestartButton(): void;
	/** highlight操作数，包括expressionGroup和demoGroup里的操作数 */
	highlightOperand(position: number): void;
	/** 不再highlight操作数，包括expressionGroup和demoGroup里的操作数 */
	normalizeOperand(position: number): void;
	/** 借位 */
	borrowOneFromMinuend(position: number): IParticleComponent;
	/** 把借位移动到被减数的左边 */
	moveBorrowToLeftOfMinuend(borrow: IParticleComponent, position: number): Promise<void>;
	/** 从借位移动指定数字到被减数 */
	moveAmountOfBorrowToMinuend(borrow: IParticleComponent, position: number, amount: number): Promise<void>;
	/** 把借位移动到减数的左边 */
	moveBorrowToLeftOfSubstrahend(borrow: IParticleComponent, position: number): Promise<void>;
	/** 把借位移动到减数的后面 */
	moveBorrowToBehideOfMinuend(borrow: IParticleComponent, position: number): Promise<void>;
	/** 把被减数移动到减数的右边 */
	moveMinuendToRightOfSubstrahend(position: number): Promise<void>;
	/** 把被减数移动到减数的后面 */
	moveMinuendToBehideOfSubstrahend(position: number): Promise<void>;
	/** 令借位的状态变成Separated */
	setBorrowStateToSeparated(borrow: IParticleComponent): Promise<void>;
	/** 令被减数和减数变成半透明 */
	translucientMinuendAndSubstrahend(position: number, tranlucientAmount: number): void;
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