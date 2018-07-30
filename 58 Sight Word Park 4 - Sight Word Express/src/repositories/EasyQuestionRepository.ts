class EasyQuestionRepository {
	public constructor() {
		
	}

	private cache: Question[] = [];

	public random(): Question
	{
		return this.cache[Math.randomMinMax(0, this.cache.length - 1)];
	}
}