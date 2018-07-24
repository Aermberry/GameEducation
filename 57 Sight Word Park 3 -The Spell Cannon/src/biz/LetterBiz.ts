class LetterBiz {
	private letters = new LettersRepository().getAll();

	public constructor() {
	}

	/**
	 *  从字母表中随机取出一个字母 
	 */
	public randomLetter(): string
	{
		return this.letters[Math.randomMinMax(0, this.letters.length - 1)];
	}

	/**
	 * 从字母表抽两个字母出来，加上target，混洗后返回。
	 * 三个字母必须是不同的字母。
	 */
	public random(target: string): string[]
	{
		let randomChars = [target];
		while (randomChars.length < 3) {
			let candidate = '';
			do {
				candidate = this.letters[Math.randomMinMax(0, this.letters.length - 1)];
			} while (randomChars.indexOf(candidate) >= 0);
			randomChars.push(candidate);
		}
		randomChars.shuffle();
		return randomChars;
	}
}