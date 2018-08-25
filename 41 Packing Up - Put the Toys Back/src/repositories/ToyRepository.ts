class ToyRepository {
	public constructor() {
	}

	public getAll(): Toy[] {
		return [
			new Toy('plant_png', 'plant', ToyPosition.near),
			new Toy('books_png', 'books', ToyPosition.top)
		]
	}
}