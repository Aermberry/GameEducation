class PlayingPresenter {
	private wordBiz = new WordBiz();
	private puzzleBiz = new PuzzleBiz();
	private view: IPlayingView;
	private words: string[] = []; //puzzle中的单词表
	private wordsCopy: string[] = [] //保存初始的words
	private correctWordCount = 0; //答对的单词
	private difficulty: Difficulty;

	public constructor() {
	}

	public loadView(view: IPlayingView, difficulty: Difficulty): void {
		this.view = view;
		this.difficulty = difficulty;
		this.initGame();
	}

	private initGame(): void {
		this.view.playReadyGoMovie();
		this.nextPuzzleButtonClick();
		this.wordsCopy = this.onCopyArry(this.words)
		// console.log("wordsCopy:" + this.wordsCopy)
	}

	// 保存初始的數組
	private onCopyArry(words: string[]): string[] {
		let arry: string[] = [];
		words.forEach(element => {
			arry.push(element)
		});
		return arry
	}

	public onShootButtonClick(): void {
		let selectedWord = this.view.currentSelectedChars.join('');
		if (this.words.indexOf(selectedWord) >= 0) {
			this.view.lockCurrentSelectChars();
			// console.log("當前的wordsCopy:" + this.wordsCopy)
			// console.log("wordsCopy中的index:" + this.wordsCopy.indexOf(selectedWord))
			this.view.markWordAsDeleted(this.wordsCopy.indexOf(selectedWord));
			// console.log(selectedWord)
			// console.log(this.words)
			this.handleWords(this.words, selectedWord);
			// console.log(this.words)
			this.view.playGoodJobMovie();
			this.correctWordCount++;
			// console.log("正確的個數：" + this.correctWordCount)
			// console.log("words的個數：" + this.words.length)
		}
		// if (this.correctWordCount == this.words.length) {
		// 	this.view.playCompleteAnimation();
		// }
		if (this.correctWordCount == this.wordsCopy.length) {
			this.view.playCompleteAnimation();
		}
	}

	private handleWords(words: string[], selectedWord: string): void {
		let index = words.indexOf(selectedWord);
		words.splice(index, 1);
	}

	public onHintsBtnImgClick(): void {
		// console.log("num:" + this.correctWordCount);
		this.view.tipsanswer(0, this.words);
	}

	public onResetButtonClick(): void {
		this.view.deselectChars();
	}

	public nextPuzzleButtonClick(): void {
		this.correctWordCount = 0;
		this.view.words = this.words = this.wordBiz.random(this.difficulty == Difficulty.easy ? 5 : 6);
		this.view.puzzleCharacters = this.puzzleBiz.generate(this.words, this.difficulty == Difficulty.easy ? 5 : 8);
		this.view.deselectChars();
		this.view.markWordsAsNormal();
	}

	public onRestartButtonClick(): void {
		this.initGame();
	}
}