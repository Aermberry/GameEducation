interface IPlayEasyGameView {
    /** 城堡血量>0, 返回true, 否则返回false */
	readonly isCastleGood: boolean;
    /** 向城堡开炮 */
    shoot(): Promise<void>;
    /** 播放用户选择成功字母的动画 */
    playCorrectAnimation(): void;
    /** 播放用户选择错误字母的动画 */
    playWrongAnimation(): void;
    /** 城堡上的单词 */
    castleWord: string;
    /** 炮弹上的字母列表 */
    bombChars: string[];
    /** 播放游戏通关动画 */
    playGameCompleteAnimation(): void;
    enableAllBombs(): void;
    disableAllBombs(): void;
    /** 城堡被炮弹击中，显示击中效果，城堡血减一 */
    markCastleShot(): void;
    /** 城堡的血量 */
    castleBlood: number;
    /** 播放城堡单词的声音 */
    playCastleWord(word: string): void;
}