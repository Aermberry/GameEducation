interface MainView {
	/** 提升progress bar的base count，表示当前round已经完成 */
	addProgressBarBaseCount(delta: number): void;
	/** 播放通关动画 */
	playGamePassedAnimation(): void;
	/** 关闭游戏 */
	exit(): void;
	/** 启用goods */
	enableGoods(goods: GoodsComponent[]): void;
	/** 禁用goods */
	disableGoods(goods: GoodsComponent[]): void;
	highlightInstructionButton(): void;
	normalizeInstructionButton(): void;
	enableValidateButton(): void;
	disableValidateButton(): void;
	enableInstructionButton(): void;
	disableInstructionButton(): void;
	playInstructionAsync(instructionAudioName: string): Promise<void>;
	alertPlayingInstruction(): void;
	alertYouCanMoveGoodsNow(): void;
	alertSomeGoodsNotInRoom(): void;
	alertNotAllGoodsInCorrectPlace(): void;
	showNextRoundPanel(): void;
	closeNextRoundPanel(): void;
	updateProgress(inCorrectPlaceCount: number, inWrongPlaceCount: number): void;

}