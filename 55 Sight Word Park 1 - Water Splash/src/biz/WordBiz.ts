class WordBiz {
	private wordRepo = new WordRepository()
	private allWords: string[] = [];

	public constructor() {
	}

	public random(wordCount: number): string[]
	{
		this.allWords = this.wordRepo.getAll(wordCount);
		let words = [];

		while (words.length < wordCount) {
			words.push(this.randomOneWord(words));
		}

		return words;
	}

	private randomOneWord(usedWords: string[]): string
	{
		let newWord = '';
		do {
			newWord = this.allWords[Math.randomMinMax(0, this.allWords.length - 1)];
		} while (usedWords.indexOf(newWord) >= 0);

		return newWord;
	}
}