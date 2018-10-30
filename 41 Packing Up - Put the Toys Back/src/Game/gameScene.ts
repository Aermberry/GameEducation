class gameScene extends eui.Component implements eui.UIComponent, GameView {
	private plantImage: eui.Image;
	private plantRect: eui.Rect;

	private booksImage: eui.Image;
	private booksRect: eui.Rect;

	private clockImage: eui.Image;
	private clockRect: eui.Rect;

	private busImage: eui.Image;
	private busRect: eui.Rect;

	private bikeImage: eui.Image;
	private bikeRect: eui.Rect;

	private robotImage: eui.Image;
	private robotRect: eui.Rect;

	private helpButton: eui.Button;
	private toysImage: eui.Image;
	private toyNameLabel: eui.Label;
	private ToyVoice: string;
	private rect: eui.Rect;

	private presenter = new GamePresenter();

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.presenter.loadView(this);
		this.helpButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onHelpButtonClick, this.presenter);
		this.initDragDrop();

	}

	private initDragDrop(): void {
		let drag = new lzlib.Drag();
		this.addChild(drag);
		drag.enableDrag(this.toysImage, false);
		this.toysImage.addEventListener(lzlib.LzDragEvent.CANCEL, this.onDropCancel, this);

		this.initDrop(this.plantRect, this.onPlantDrop);
		this.initDrop(this.booksRect, this.onBooksDrop);
		this.initDrop(this.clockRect, this.onClockDrop);
		this.initDrop(this.busRect, this.onBusDrop);
		this.initDrop(this.bikeRect, this.onBikeDrop);
		this.initDrop(this.robotRect, this.onRobotDrop);
	}

	private initDrop(dropTarget: eui.Component, dropFunction: (e: lzlib.LzDragEvent) => void): void {
		let drop = new lzlib.Drop();
		this.addChild(drop);
		drop.enableDrop(dropTarget);
		dropTarget.addEventListener(lzlib.LzDragEvent.DROP, dropFunction, this);
	}

	private async onDropCancel(): Promise<void> {
		await lzlib.ThreadUtility.sleep(1000);
		this.presenter.onDropWrong()
	}

	private async onPlantDrop(e: lzlib.LzDragEvent): Promise<void> {
		if ((e.dragObject as eui.Image).source == this.plantImage.source) {
			e.preventDefault();
			this.plantImage.visible = true;
			e.dragObject.visible = false;
			this.presenter.onDropCorrectly();
		} else {
			await lzlib.ThreadUtility.sleep(1000);
			this.presenter.onDropWrong();
		}
	}

	private async onBooksDrop(e: lzlib.LzDragEvent): Promise<void> {
		if ((e.dragObject as eui.Image).source == this.booksImage.source) {
			e.preventDefault();
			this.booksImage.visible = true;
			e.dragObject.visible = false;
			this.presenter.onDropCorrectly();
		} else {
			await lzlib.ThreadUtility.sleep(1000);
			this.presenter.onDropWrong()
		}
	}

	private async onClockDrop(e: lzlib.LzDragEvent): Promise<void> {
		if ((e.dragObject as eui.Image).source == this.clockImage.source) {
			e.preventDefault();
			this.clockImage.visible = true;
			e.dragObject.visible = false;
			this.presenter.onDropCorrectly();
		} else {
			await lzlib.ThreadUtility.sleep(1000);
			this.presenter.onDropWrong()
		}
	}

	private async onBusDrop(e: lzlib.LzDragEvent): Promise<void> {
		if ((e.dragObject as eui.Image).source == this.busImage.source) {
			e.preventDefault();
			this.busImage.visible = true;
			e.dragObject.visible = false;
			this.presenter.onDropCorrectly();
		} else {
			await lzlib.ThreadUtility.sleep(1000);
			this.presenter.onDropWrong()
		}
	}

	private async onBikeDrop(e: lzlib.LzDragEvent): Promise<void> {
		if ((e.dragObject as eui.Image).source == 'bicycle_png') {
			e.preventDefault();
			this.bikeImage.visible = true;
			e.dragObject.visible = false;
			this.helpButton.visible = false;
			this.toyNameLabel.visible = false;
			this.presenter.onDropCorrectly();
		} else {
			lzlib.ThreadUtility.sleep(1000);
			this.presenter.onDropWrong()
		}
	}

	private async onRobotDrop(e: lzlib.LzDragEvent): Promise<void> {
		if ((e.dragObject as eui.Image).source == 'robot_png') {
			e.preventDefault();
			this.robotImage.visible = true;
			e.dragObject.visible = false;
			this.presenter.onDropCorrectly();
		} else {
			await lzlib.ThreadUtility.sleep(1000);
			this.presenter.onDropWrong()
		}
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

	public playAudio(audioName: string): void {
		if (audioName == '') return;
		lzlib.SoundUtility.playSound(audioName);

		return

	}

	public showHelpButton(): void {
		this.helpButton.visible = true;
	}

	public putToyInDragPosition(imageName: string): void {
		this.toysImage.visible = true;
		this.toysImage.x = 865;
		this.toysImage.y = 1079;
		this.toysImage.source = imageName;

		const currentToyImage = this.toysImage;
		const currentToyImageX = currentToyImage.x;
		const currentToyImageY = currentToyImage.y;
		const currentToyImageWidth = currentToyImage.width;
		const currentToyImageHeight = currentToyImage.height;
		const constant = 10;


		this.helpButton.y = currentToyImageY + currentToyImageHeight + constant;
		this.helpButton.x = currentToyImageX + currentToyImageWidth / 2 - this.helpButton.width / 2

		this.toyNameLabel.x = currentToyImageX + currentToyImageWidth + constant + 50;
		this.toyNameLabel.y = currentToyImageY + currentToyImageHeight / 2 - this.toyNameLabel.height / 2
	}

	public set currentToyName(value: string) {
		this.toyNameLabel.text = value;
	}

	public set currentToyVoice(value: string) {
		this.ToyVoice = value;
	}

	public openStatusScene(isCorrect: boolean): void {
		this.addChild(new statusScene(isCorrect, this.toysImage, this.presenter.currentAudioName));
	}

	public openTipScene(position: ToyPosition): void {
		this.addChild(new tipsScene(position, this.toysImage));
	}


}