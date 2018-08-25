class BackgroundRepository {
	public constructor() {
	}

	public getAll(): Background[]
	{
		return [
			new Background('sound1_park_s1_mp3', 'house_and_people_png'),
			new Background('sound1_park_s2_mp3', 'roller_coaster_png'),
			new Background('sound1_park_s3_mp3', 'Dolphin_png'),
			new Background('sound1_park_s4_mp3', 'windmill_png'),
			new Background('sound1_park_s5_mp3', 'camera_and_food_png')
		]
	}
}