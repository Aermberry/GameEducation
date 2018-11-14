class Scene09 extends eui.Component implements eui.UIComponent {

	private nextButton: eui.Button;

	private dragGroup: eui.Group;
	private dropGroup: eui.Group;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		lzlib.SoundUtility.playSound('10_startgame_b_mp3');
		this.initDragDrop();
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextScene, this);
	}

	private initDragDrop(): void {
		for (let child of this.dragGroup.$children) {
			let drag = new lzlib.Drag();
			this.stage.addChild(drag);
			drag.enableDrag(child, false);
		}

		for (let child of this.dropGroup.$children) {
			let drop = new lzlib.Drop();
			this.addChild(drop);
			drop.enableDrop(child);
			child.addEventListener(lzlib.LzDragEvent.DROP, this.onLabelDrop, this);
		}
	}

	private onLabelDrop(e: lzlib.LzDragEvent): void {
		let targetComponent = e.target as eui.Label;
		let dragComponent = e.dragObject as eui.Label;

		if (!targetComponent.text) {
			e.preventDefault();
			targetComponent.text = dragComponent.text;
			targetComponent.visible = true;
			dragComponent.visible = false;
			this.confirmAllWordsAreCorrect();
		}
		else {
			return;
		}
	}

	//当所有单词被正常拖进树时，显示next button
	private confirmAllWordsAreCorrect(): void {
		for (let child of this.dropGroup.$children) {
			if (!child.visible) {
				return;
			}
		}

		this.nextButton.visible = true;
	}

	private onNextScene(): void {
		Main.instance.gotoScene(new Scene10());
	}

	private async onBlackgroundMusic(): Promise<void> {
		await lzlib.SoundUtility.playSound('10_startgame_b_mp3');
		this.nextButton.visible = true;
	}

}