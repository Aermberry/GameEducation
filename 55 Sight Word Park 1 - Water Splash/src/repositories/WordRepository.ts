class WordRepository {
	public constructor() {
	}

	public getAll(maxLength: number): string[]
	{
		return [
			'and',
			'away',
			'big',
			'blue',
			'can',
			'come',
			'down',
			'find',
			'for',
			'funny',
			'help',
			'here',
			'jump',
			'little',
			'look',
			'make',
			'not',
			'one',
			'play',
			'red',
			'run',
			'said',
			'see',
			'the',
			'three',
			'two',
			'where',
			'yellow',
			'you',
			'all',
			'are',
			'ate',
			'black',
			'brown',
			'but',
			'came',
			'did',
			'eat',
			'four',
			'get',
			'good',
			'have',
			'into',
			'like',
			'must',
			'new',
			'now',
			'our',
			'out',
			'please',
			'pretty',
			'ran',
			'ride',
			'saw',
			'say',
			'she',
			'soon',
			'that',
			'there',
			'they',
			'this',
			'too',
			'under',
			'want',
			'was',
			'well',
			'went',
			'what',
			'white',
			'who',
			'will',
			'with',
			'yes'
		].filter(word => word.length <= maxLength);
	}
}