class GamePresenter {
	private toyRepo = new ToyRepository();
	private view: GameView;
	private allToys: Toy[];
	private currentTopIndex = 0;

	public constructor() {
	}

	public async loadView(view: GameView): Promise<void> {
		this.view = view;
		this.allToys = this.toyRepo.getAll()
		//await this.view.playIntroductionAudio();
		this.view.showToyImage();
		this.view.showToyName();
		await lzlib.ThreadUtility.sleep(500);
		this.view.showHelpButton();

		this.view.putToyInDragPosition(this.currentToy.imageName);
		this.view.currentToyName = this.currentToy.name;
	}

	private get currentToy(): Toy {
		return this.allToys[this.currentTopIndex];
	}

	public onDropCorrectly(): void {
		this.currentTopIndex++;
		if (this.currentTopIndex < this.allToys.length) {
			this.view.putToyInDragPosition(this.currentToy.imageName);
			this.view.currentToyName = this.currentToy.name;
		} else {
			this.view.openStatusScene(true);
		}
	}

	public onDropWrong(): void {
		this.view.openStatusScene(false);
	}

	public onHelpButtonClick(): void {
		this.view.openTipScene(this.allToys[this.currentTopIndex].position);
	}
}