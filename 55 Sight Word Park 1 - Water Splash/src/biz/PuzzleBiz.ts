class PuzzleBiz {
	private chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	
	public constructor() {

	}

	public generate(words: string[], dimension: number): string[][]
	{
		return this.populate(words.map(word => word.split('')), dimension);
	}

	/** 填充空白 */
	private populate(puzzle: string[][], dimension: number): string[][]
	{
		while (puzzle.length < dimension) {
			puzzle.push([]);
		}

		for (let row of puzzle) {
			while (row.length < dimension) {
				row.push(this.chars[Math.randomMinMax(0, this.chars.length - 1)]);
			}
		}

		return puzzle;
	}
}