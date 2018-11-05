class PlayProGamePresenter {
	private wordBiz = new WordBiz();
    private letterBiz = new LetterBiz();
    private correctWord = ''; //正确的单词，用户要选中正确的字母，才能发射炮弹
	public view: IPlayProGameView;

	public constructor() 
	{
	}

	/**
		1. 从词库中随机选一个单词出来，不能跟之前选择的单词重复
		2. 如果该单词含有5个或以上字母，系统对该单词进行混洗。
		3. 否则，系统从字母词中随机取出一个字母，然后随机插入到单词的一个位置。
		4. 当用户从bomb list选出x，系统提示选择正确并发炮，城堡血量-1；；当用户从bomb list选择其他字母，系统提示选择错，不发炮，城堡血量不减，用户继续从bomb list选择字母。
		5. 当城堡血量=0时，系统提示用户通关。
	 */
	public async playGame(): Promise<void>
	{
		this.view.castleBlood = 20;
		this.view.enableAllBombs();
		this.initCastleWordAndBombs();
	}

	private initCastleWordAndBombs(): void
	{
		this.correctWord = this.wordBiz.random();
		let castleWords = [this.correctWord];
		if (this.correctWord.length >= 5) {
			castleWords.push(this.shuffleString(this.shuffleString(this.correctWord)));
			castleWords.push(this.shuffleString(this.shuffleString(this.correctWord)));
		} else if(this.correctWord.length>=3) {
			castleWords.push(this.getInterpolatedWord(this.correctWord));
			castleWords.push(this.getInterpolatedWord(this.correctWord));
		}
		else{
			return
		}
		castleWords.shuffle();
		this.view.castleWords = castleWords;
	}

	/** 输入一个单词，混洗后返回一个新单词 */
	private shuffleString(str: string): string
	{
		let result = str.split('');
		result.shuffle();
		return result.join('');
	}

	private getInterpolatedWord(str: string): string
	{
		let char = this.letterBiz.randomLetter();//從字母表中隨機產生一個字符
		let insertIndex = Math.randomMinMax(0, str.length - 1);//從最大值到最小值的範圍裏產生一個隨機數

		// 從零開始截取到隨機數部分，拼接字符隨機字符char+以index為起點截取剩餘的部分
		return str.slice(0, insertIndex) + char + str.slice(insertIndex);
	}

	public async onBombSelected(selectedBomb: string, bombIndex: number): Promise<void>
	{
		this.view.disableAllBombs();
		if (this.correctWord == selectedBomb) {
			this.view.playCorrectAnimation();
			await this.view.shoot(bombIndex);
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
		this.view.playCastleWord(this.correctWord);
	}
}