class ToyRepository {
	public constructor() {
	}

	public getAll(): Toy[] {
		return [
			new Toy('flower_png', 'plant', ToyPosition.near, '02a_plant_mp3'),
			new Toy('books_png', 'books', ToyPosition.on, '02b_books_mp3'),
			new Toy('robot_png', 'robot', ToyPosition.in, '03_robot_mp3'),
			new Toy('clock_png', 'clock', ToyPosition.on, '04_clock_mp3'),
			new Toy('bus_png', 'bus', ToyPosition.under, '05_toy_bus_mp3'),
			new Toy('bicycle_png', 'bicycle', ToyPosition.behind, '06_bicycle_mp3')
		]
	}
}