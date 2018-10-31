class GamePresenter {
	private toyRepo = new ToyRepository();
	private view: GameView;
	private allToys: Toy[];
	private currentTopIndex = -1;

	public constructor() {
	}

	public async loadView(view: GameView): Promise<void> {
		this.view = view;
		this.allToys = this.toyRepo.getAll()
		await this.view.playIntroductionAudio();
		this.view.showToyImage();
		this.view.showToyName();
		await lzlib.ThreadUtility.sleep(500);
		this.view.showHelpButton();

		this.view.putToyInDragPosition(this.currentToy.imageName);
		this.view.currentToyName = this.currentToy.name;
		this.view.currentToyVoice = this.currentToy.audioName;
	}

	private get currentToy(): Toy {
		return this.allToys[this.currentTopIndex];
	}

	public get currentAudioName(): string {
		return this.currentToy.audioName
	}

	public async onDropCorrectly(): Promise<void> {
		// ++this.currentTopIndex;
	

		if (this.currentTopIndex < this.allToys.length) {
			this.view.putToyInDragPosition(this.currentToy.imageName);
			this.view.currentToyName = this.currentToy.name;
			this.view.playAudio(this.currentToy.audioName);
		} else {

			await lzlib.ThreadUtility.sleep(2000);
			this.view.openStatusScene(true);


		}
	}

	public async onDropWrong(): Promise<void> {

		this.view.openStatusScene(false);
	}

	public onHelpButtonClick(): void {
		this.view.openTipScene(this.allToys[this.currentTopIndex].position);
	}
}