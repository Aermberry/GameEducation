class ThingFormatter {
	private static audioMap = {};
	private static imageSourceMap = {};

	public static initialize(): void
	{
		ThingFormatter.initAudioMap();
		ThingFormatter.initImageSourceMap();
	}

	private static initAudioMap(): void
	{
		ThingFormatter.audioMap[Thing.basketball] = 'sound 12 (prop_basketball.mp3)_mp3';
		ThingFormatter.audioMap[Thing.football] = 'sound 11 (prop_football.mp3)_mp3';
		ThingFormatter.audioMap[Thing.pineCone] = 'sound 10 (prop_pine.mp3)_mp3';
	}

	private static initImageSourceMap(): void
	{
		ThingFormatter.imageSourceMap[Thing.basketball] = 'basketball_png';
		ThingFormatter.imageSourceMap[Thing.football] = 'soccer_png';
		ThingFormatter.imageSourceMap[Thing.pineCone] = 'pine_cone_png';
	}

	public constructor() {
	}

	public static getAudioName(thing: Thing): string
	{
		return ThingFormatter.audioMap[thing];
	}

	public static getImageSource(thing: Thing): string
	{
		return ThingFormatter.imageSourceMap[thing];
	}
}