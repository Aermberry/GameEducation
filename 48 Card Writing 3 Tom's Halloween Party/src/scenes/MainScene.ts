class MainScene extends eui.Component implements eui.UIComponent {

	private tipsGroup: eui.Group;
	private dragGroup: eui.Group;
	private dropGroup: eui.Group;

	private currentQuestionIndex = 0;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.initDragable();
	}

	private initDragable(): void {
		for (let child of this.dragGroup.$children) {
			let drag = new lzlib.Drag();
			this.stage.addChild(drag);
			drag.enableDrag(child, false);
			child.addEventListener(lzlib.LzDragEvent.CANCEL, this.onDragCancel, this);
		}
		this.initDropLabel()
	}

	
	private initDropLabel() {
		let drop = new lzlib.Drop();
		this.addChild(drop);
		let child = this.dropGroup.getChildAt(this.currentQuestionIndex)
		drop.enableDrop(child);
		child.addEventListener(lzlib.LzDragEvent.DROP, this.onLabelDrop, this);
	}

	private onLabelDrop(e: lzlib.LzDragEvent): void {
		let targetCompent = e.target as eui.Label;
		let dragCompent = e.dragObject as eui.Label;

		if (dragCompent.text.trim() == targetCompent.text.trim()) {
			e.preventDefault();
			targetCompent.visible = true;
			dragCompent.visible = false;
			
			if (this.dropGroup.$children.every(child => child.visible)) {
				Main.instance.gotoScene(new FinishScene());
			}
			else {
				this.currentQuestionIndex++;
				this.initDropLabel();
			}
		}
		else {
			this.showTipsLabel();

		}
	}

	private onDragCancel(e: lzlib.LzDragEvent): void {
		this.showTipsLabel();
	}

	private async showTipsLabel(): Promise<void> {
		let currentQuestionIndex = this.currentQuestionIndex;
		let originalChildIndex = this.getChildIndex(this.tipsGroup);
		this.setChildIndex(this.tipsGroup, this.numChildren - 1);
		this.tipsGroup.getChildAt(currentQuestionIndex).visible = true;
		await lzlib.ThreadUtility.sleep(2000);
		this.tipsGroup.getChildAt(currentQuestionIndex).visible = false;
		this.setChildIndex(this.tipsGroup, originalChildIndex);
	}

}