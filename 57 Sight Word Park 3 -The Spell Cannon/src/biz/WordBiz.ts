class WordBiz {
	private allWords = new WordRepository().getAll(); //词库
    private usedWords = []; //已经用过的单词，不应再重复使用

	public constructor() {
	}

	/**
	 * 从词库中随机选一个单词出来，不能跟之前选择的单词重复
	 */
	public random(): string
	{
		let candidate = '';
		do {
			candidate = this.allWords[Math.randomMinMax(0, this.allWords.length - 1)];
		} while (this.usedWords.indexOf(candidate) >= 0);
		this.usedWords.push(candidate);
		return candidate;
	}
}