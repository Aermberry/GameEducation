class GameScene extends eui.Component implements eui.UIComponent, GameView {
	private plantImage: eui.Image;
	private booksImage: eui.Image;
	private plantGroup: eui.Group;

	private helpButton: eui.Button;
	private toysImage: eui.Image;
	private toyNameLabel: eui.Label;

	private presenter = new GamePresenter();

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.playIntroductionAudio();
		this.helpButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onHelpButtonClick, this.presenter);
		this.initDragDrop();
		this.presenter.loadView(this);
	}

	private initDragDrop(): void {
		let drag = new lzlib.Drag();
		this.addChild(drag);
		drag.enableDrag(this.toysImage, false);

		let drop = new lzlib.Drop();
		this.addChild(drop);
		drop.enableDrop(this.plantGroup);
		this.plantGroup.addEventListener(lzlib.LzDragEvent.DROP, this.onPlantDrop, this);
	}

	private onPlantDrop(e: lzlib.LzDragEvent): void {
		e.preventDefault();
		this.plantImage.visible = true;
		e.dragObject.visible = false;
		this.presenter.onDropCorrectly();
	}
	
	public async playIntroductionAudio(): Promise<void> {
		return lzlib.SoundUtility.playSound('01b_mp3');
	}

	public showToyImage(): void {
		this.toysImage.visible = true;
	}

	public showToyName(): void {
		this.toyNameLabel.visible = true;
	}

	public showHelpButton(): void {
		this.helpButton.visible = true;
	}

	public putToyInDragPosition(imageName: string): void {
		this.toysImage.visible = true;
		this.toysImage.x = 865;
		this.toysImage.y = 1079;
		this.toysImage.source = imageName;
	}

	public set currentToyName(value: string) {
		this.toyNameLabel.text = value;
	}

	public openStatusScene(isCorrect: boolean): void {
		this.addChild(new StatusScene(isCorrect));
	}

	public openTipScene(position: ToyPosition): void {
		this.addChild(new TipsScene(position));
	}


}