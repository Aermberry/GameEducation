class GameScene extends eui.Component implements eui.UIComponent {
	private plantImage: eui.Image;
	private plantGroup: eui.Group;

	private helpButton: eui.Button;
	private toysImage: eui.Image;
	private toyNameLabel: eui.Label;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.helpButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function (): void {
			this.addChild(new TipsScene());
		}, this);
		this.initDragDrop();
		this.startGame();
	}

	private initDragDrop(): void {
		let drag = new lzlib.Drag();
		this.stage.addChild(drag);
		drag.enableDrag(this.toysImage, false);

		let drop = new lzlib.Drop();
		this.stage.addChild(drop);
		drop.enableDrop(this.plantGroup);
		this.plantGroup.addEventListener(lzlib.LzDragEvent.DROP, this.onPlantDrop, this);
	}

	private onPlantDrop(e: lzlib.LzDragEvent): void {
		e.preventDefault();
		this.plantImage.visible = true;
		e.dragObject.visible = false;
	}

	private async startGame(): Promise<void> {
		await lzlib.SoundUtility.playSound('01b_mp3');
		this.toysImage.visible = true;
		this.toyNameLabel.visible = true;
		await lzlib.ThreadUtility.sleep(500);
		this.helpButton.visible = true;
	}



}