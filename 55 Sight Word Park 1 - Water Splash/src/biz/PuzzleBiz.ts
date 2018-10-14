class PuzzleBiz {
	private chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	
	public constructor() {

	}

	public generate(words: string[], dimension: number): string[][]
	{
		return wordfind.newPuzzle(words, { width: dimension, height: dimension, preferOverlap: 0, orientations: ['horizontal', 'vertical', 'diagonal'] });
	}
}