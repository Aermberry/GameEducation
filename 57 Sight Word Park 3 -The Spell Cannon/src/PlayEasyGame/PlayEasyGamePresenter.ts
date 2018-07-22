class PlayEasyGamePresenter {
	private wordBiz = new WordBiz();
    private letterBiz = new LetterBiz();
	private castleWord = ''; //城堡上的单词
    private correctChar = ''; //正确的字母，用户要选中正确的字母，才能发射炮弹
	public view: IPlayEasyGameView;

	public constructor() 
	{
	}

	/**
		1. 从词库中随机选一个单词出来，不能跟之前选择的单词重复
		2. 从单词中随机选一个位置，该位置对应的字母记为x，加上从a-z字母表中随机选两个字母（必须跟x不一样），跟x组成bomb list。。
		3. 混洗bomb list
		5. 当用户从bomb list选出x，系统提示选择正确并发炮，城堡血量-1；；当用户从bomb list选择其他字母，系统提示选择错，不发炮，城堡血量不减，用户继续从bomb list选择字母。
		6. 当城堡血量=0时，系统提示用户通关。
	 */
	public async playGame(): Promise<void>
	{
		this.view.castleBlood = 20;
		this.view.enableAllBombs();
		this.initCastleWordAndBombs();
	}

	private initCastleWordAndBombs(): void
	{
		this.castleWord = this.wordBiz.random();
		let replacedIndex = Math.randomMinMax(0, this.castleWord.length - 1);
		this.correctChar = this.castleWord[replacedIndex];
		this.view.castleWord = this.castleWord.replaceAt(replacedIndex, '_');
		this.view.bombChars = this.letterBiz.random(this.correctChar);
	}

	public async onBombSelected(selectedBomb: string): Promise<void>
	{
		this.view.disableAllBombs();
		if (this.correctChar == selectedBomb) {
			this.view.castleWord = this.castleWord;
			this.view.playCorrectAnimation();
			await this.view.shoot();
			this.view.markCastleShot();
			this.initCastleWordAndBombs();
		} else {
			this.view.playWrongAnimation();
		}

		if (!this.view.isCastleGood) {
			this.view.disableAllBombs();
			this.view.playGameCompleteAnimation();
		}
		this.view.enableAllBombs();
	}

	public onSpeakerClick(): void
	{
		this.view.playCastleWord(this.castleWord);
	}
}