class Choose1Scene extends eui.Component implements eui.UIComponent {

	private dragGroup: eui.Group;
	private dropGroup: eui.Group;
	private penGroup: eui.Group;
	private playGroup: eui.Group;
	private bankGroup: eui.Group;
	private tipsGroup: eui.Group;
	private maskGroup:eui.Group;

	private nextButton: eui.Button;
	private logImage: eui.Image;
	private worldLabel: eui.Label;
	private colorKeyWorldLabel: eui.Label;

	private currentQuestionIndex = 0;
	private optionText: string = "";

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.initDragable();
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoNextScene, this);
	}

	
	private initDragable(): void {

		for (let children of this.dragGroup.$children) {
			let drag = new lzlib.Drag();
			this.stage.addChild(drag);
			drag.enableDrag(children, false);
			children.addEventListener(lzlib.LzDragEvent.CANCEL, this.onDragCancel, this);//監聽drag事件
		}

		this.initDropableLabel();
	}

	private initDropableLabel(): void {
		let drop = new lzlib.Drop();
		this.addChild(drop);
		let children = this.dropGroup.getChildAt(this.currentQuestionIndex);
		drop.enableDrop(children);
		children.addEventListener(lzlib.LzDragEvent.DROP, this.onLabelDrop, this);
	}

	private onLabelDrop(e: lzlib.LzDragEvent): void {
		let targetComponent = e.target as eui.Label;
		let dragComponent = e.dragObject as eui.Label;

		this.optionText = dragComponent.text;

		this.nextButton.visible = true;
		this.worldLabel.textColor = 0xFF0099;
		this.colorKeyWorldLabel.visible = true;
		if (dragComponent.text.trim() == targetComponent.text.trim()) {
			e.preventDefault();
			targetComponent.visible = true;
			dragComponent.visible = false;

			this.dropGroup.$children.every(children => children.visible) &&
				(this.logImage.visible = true) && (this.nextButton.visible = true);
		}
		else {
			
			this.showTipsLabel();
			this.swapChildren(this.dragGroup,this.maskGroup);		
		}
	}

	private onDragCancel(e: lzlib.LzDragEvent): void {
		this.showTipsLabel();
	}

	private async showTipsLabel(): Promise<void> {
		
		this.optionText == "pen" && (this.penGroup.visible = true);
		this.optionText == "money bank" && (this.bankGroup.visible = true);
		this.optionText == "basketball" && (this.playGroup.visible = true);
	}



	private gotoNextScene(): void {
		if (this.dropGroup.$children.every(children => children.visible) && this.logImage.visible) {
			Main.instance.gotoScene(new Choose2Scene());
		}
		else {
			
			this.nextButton.visible = false;
			this.worldLabel.textColor = 0x000000;
			this.colorKeyWorldLabel.visible = false;
			this.swapChildren(this.dragGroup,this.maskGroup);
			for (let children of this.tipsGroup.$children) {
				children.visible && (children.visible = false)
			}
		}
	}
}