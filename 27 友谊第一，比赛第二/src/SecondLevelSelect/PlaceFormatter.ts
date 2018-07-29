class PlaceFormatter {
	private static audioMap = {};
	private static imageSourceMap = {};

	static initializa()
	{
		PlaceFormatter.initAudioMap();
		PlaceFormatter.initImageSourceMap();
	}

	private static initAudioMap(): void
	{
		PlaceFormatter.audioMap[Place.athleticsTrack] = 'first_place_mp3';
		PlaceFormatter.audioMap[Place.dodgeballPitch] = 'sound 9 (scene_ballcourt.mp3)_mp3';
		PlaceFormatter.audioMap[Place.pineConeThrowingField] = 'sound 4 (scene_throw.mp3)_mp3';
		PlaceFormatter.audioMap[Place.playgroundAudience] = 'sound 6 (scene_seats.mp3)_mp3';
		PlaceFormatter.audioMap[Place.sportingMeetingAssemblyPoint] = 'sound 5 (scene_stadium.mp3)_mp3';
		PlaceFormatter.audioMap[Place.swimmingPoolSide] = 'sound 8 (scene_pool.mp3)_mp3';
	}

	private static initImageSourceMap(): void
	{
		PlaceFormatter.imageSourceMap[Place.athleticsTrack] = 'first_place_png';
		PlaceFormatter.imageSourceMap[Place.dodgeballPitch] = 'third_place_png';
		PlaceFormatter.imageSourceMap[Place.pineConeThrowingField] = 'second_place_png';
		PlaceFormatter.imageSourceMap[Place.playgroundAudience] = 'sixth_place_png';
		PlaceFormatter.imageSourceMap[Place.sportingMeetingAssemblyPoint] = 'fifth_place_png';
		PlaceFormatter.imageSourceMap[Place.swimmingPoolSide] = 'forth_place_png';
	}

	public constructor() {
	}

	public static getAudioName(place: Place): string
	{
		return PlaceFormatter.audioMap[place];
	}

	public static getImageSource(place: Place): string
	{
		return PlaceFormatter.imageSourceMap[place];
	}
}
