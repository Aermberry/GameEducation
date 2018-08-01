interface IPlayingView {
	words: string[];
	puzzleCharacters: string[][];

	/** 用户本次选中的字母，不包括之前选中的字母 */
	readonly currentSelectedChars: string[];
	/** 取消当前选择的字母 */
	deselectChars(): void;
	/** 锁定当前选中的字母，不允许用户再更改，同时清空当前选中的字母 */
	lockCurrentSelectChars(): void;
	/** 把左侧单词列表的指定行标志为已删除 */
	markWordAsDeleted(rowIndex: number): void;
	/** 把左边的单列表的所有行标志为未删除 */
	markWordsAsNormal(): void;
	/** 显示成功射中的动画和声音 */
	playGoodJobMovie(): void;
	playReadyGoMovie(): void;
	playCompleteAnimation(): Promise<void>;
}