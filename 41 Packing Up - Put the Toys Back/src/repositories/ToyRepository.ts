class ToyRepository {
	public constructor() {
	}

	public getAll(): Toy[] {
		return [
			new Toy('plant_png', 'plant', ToyPosition.near),
			new Toy('books_png', 'books', ToyPosition.top),
			new Toy('robot_png', 'robot', ToyPosition.inside),
			new Toy('clock_png', 'clock', ToyPosition.top),
			new Toy('bus_png', 'bus', ToyPosition.under),
			new Toy('bicycle_png', 'bicycle', ToyPosition.behide),
		]
	}
}