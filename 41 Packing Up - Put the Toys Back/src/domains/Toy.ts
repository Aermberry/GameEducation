class Toy {
	public imageName = '';
	public name = '';
	public position = ToyPosition.near;
	public audioName = '';

	public constructor(imageName: string, name: string, position: ToyPosition, audioName: string) {
		this.imageName = imageName;
		this.name = name;
		this.position = position;
		this.audioName = audioName;
	}
}