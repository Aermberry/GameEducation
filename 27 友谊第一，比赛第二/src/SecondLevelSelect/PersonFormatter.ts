class PersonFormatter {
	private static audioMap = {};
	private static imageSourceMap = {};

	public static initialize(): void
	{
		PersonFormatter.initAudioMap();
		PersonFormatter.initImageSourceMap();
	}

	private static initAudioMap(): void
	{
		PersonFormatter.audioMap[Person.cat] = 'cat_mp3';
		PersonFormatter.audioMap[Person.dog] = 'dog_mp3';
		PersonFormatter.audioMap[Person.fox] = 'fox_mp3';
		PersonFormatter.audioMap[Person.frog] = 'frog_mp3';
		PersonFormatter.audioMap[Person.hippo] = 'hippo_mp3';
		PersonFormatter.audioMap[Person.kolala] = 'kolala_mp3';
		PersonFormatter.audioMap[Person.penguin] = 'penguin_mp3';
		PersonFormatter.audioMap[Person.pig] = 'pig_mp3';
		PersonFormatter.audioMap[Person.squirrel] = 'squirrel_mp3';
	}

	private static initImageSourceMap(): void
	{
		PersonFormatter.imageSourceMap[Person.cat] = 'cat_png';
		PersonFormatter.imageSourceMap[Person.dog] = 'dog_png';
		PersonFormatter.imageSourceMap[Person.fox] = 'fox_png';
		PersonFormatter.imageSourceMap[Person.frog] = 'frog_png';
		PersonFormatter.imageSourceMap[Person.hippo] = 'hippo_png';
		PersonFormatter.imageSourceMap[Person.kolala] = 'kolala_png';
		PersonFormatter.imageSourceMap[Person.penguin] = 'penguin_png';
		PersonFormatter.imageSourceMap[Person.pig] = 'pig_png';
		PersonFormatter.imageSourceMap[Person.squirrel] = 'squirrel_png';
	}

	public constructor() {
	}

	public static getAudioName(person: Person): string
	{
		return PersonFormatter.audioMap[person];
	}

	public static getImageSource(person: Person): string
	{
		return PersonFormatter.imageSourceMap[person];
	}
}