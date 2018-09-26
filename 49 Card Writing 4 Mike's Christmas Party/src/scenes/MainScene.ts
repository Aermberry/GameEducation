class MainScene extends eui.Component implements eui.UIComponent {
	private dropGRoup: eui.Group;
	private tipsGroup: eui.Group;
	private dragGroup: eui.Group;
	private currentGroup: eui.Group;
	private maskGroup: eui.Group;


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
		this.initDropLabel();
	}

	private initDropLabel() {
		let drop = new lzlib.Drop();
		this.addChild(drop);
		let child = this.dropGRoup.getChildAt(this.currentQuestionIndex);
		drop.enableDrop(child);
		child.addEventListener(lzlib.LzDragEvent.DROP, this.onLabelDrop, this);
	}

	private onLabelDrop(e: lzlib.LzDragEvent): void {
		let target = e.target as eui.Label;
		let drag = e.dragObject as eui.Label;

		if (drag.text.trim() == target.text.trim()) {
			e.preventDefault();
			target.visible = true;
			drag.visible = false;
			this.currentGroup.getChildAt(this.currentQuestionIndex).visible = true;
			if (this.dropGRoup.$children.every(child => child.visible)) {
				lzlib.ThreadUtility.sleep(2000);
				Main.instance.gotoScene(new FinishScene());
			}
			else {
				this.currentQuestionIndex++;
				this.initDropLabel();
			}
		}
		else {
			this.showTipsLabel();

			this.swapChildren(this.dropGRoup, this.maskGroup);
			lzlib.ThreadUtility.sleep(2000).then(() => {
				this.swapChildren(this.dropGRoup, this.maskGroup);
			})
		}
	}

	private onDragCancel(): void {
		this.showTipsLabel();
	}

	private async showTipsLabel(): Promise<void> {
		let currentQuestionIndex = this.currentQuestionIndex;
		let currentLabel = this.tipsGroup.getChildAt(currentQuestionIndex) as eui.Label;
		currentLabel.text = "Try again!";
		currentLabel.textColor = 0x0A01B6;
		currentLabel.textAlign = "center";
		currentLabel.verticalAlign = "middle";
		currentLabel.fontFamily = "Comic Sans MS";
		await lzlib.ThreadUtility.sleep(2000);
		currentLabel.textColor = 0xffffff;
	}

}