class BackgroundRepository {
	public constructor() {
	}

	public getAll(): Background[]
	{
		return [
			new Background('sound1_park_s1_mp3', 'house_and_people_png'),
			new Background('sound1_park_s1_mp3', 'house_and_people_png'),
			new Background('sound1_park_s1_mp3', 'house_and_people_png'),
			new Background('sound1_park_s1_mp3', 'house_and_people_png'),
			new Background('sound1_park_s1_mp3', 'house_and_people_png')
		]
	}
}