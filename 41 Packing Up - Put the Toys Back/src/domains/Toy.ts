class Toy {
	public imageName = '';
	public name = '';
	public position = ToyPosition.near;

	public constructor(imageName: string, name: string, position: ToyPosition) {
		this.imageName = imageName;
		this.name = name;
		this.position = position;
	}
}