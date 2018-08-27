interface MainView {
	playIntroductionAudio(): Promise<void>;
	/** 提升progress bar的base count，表示当前round已经完成 */
	addProgressBarBaseCount(delta: number): void;
	toastGamePassedMessage(): void;
	showGamePassedPanel(): void;
	playGamePassedAudio(): void;
	playGamePassedMovie(): void;
	/** 关闭游戏 */
	exit(): void;
	/** 启用goods */
	enableGoods(goods: GoodsComponent[]): void;
	/** 禁用goods */
	disableGoods(goods: GoodsComponent[]): void;
	updateGoodsStateToNormal(goods: GoodsComponent[]): void;
	highlightInstructionButton(): void;
	normalizeInstructionButton(): void;
	enableValidateButton(): void;
	disableValidateButton(): void;
	enableInstructionButton(): void;
	disableInstructionButton(): void;
	playInstructionAsync(instructionAudioName: string): Promise<void>;
	alertPlayingInstruction(): void;
	alertYouCanMoveGoodsNow(): Promise<void>;
	playSomeGoodsNotInRoomAudio(): void;
	playNotAllGoodsInCorrectPlayAudio(): void;
	openContinuePanel(): void;
	closeContinuePanel(): void;
	toastNextRoundMessage(): void;
	openNextRoundPanel(): void;
	closeNextRoundPanel(): void;
	updateProgress(inCorrectPlaceCount: number, inWrongPlaceCount: number): void;
	hideToastView(): void;
	reopenMyself(): void;
}