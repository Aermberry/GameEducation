class Choose2Scene extends eui.Component implements eui.UIComponent {

	private againButton: eui.Button;
	private nextButton: eui.Button;
	private helpButton: eui.Button;
	private logImage: eui.Image;
	private bankTipsWorldlabel: eui.Label;
	private bankColorTipsLabe: eui.Label;
	private basketballTipWorldLabel: eui.Label;
	private basketballTipColorLabel: eui.Label;
	private storybook: eui.Label;

	private dropGroup: eui.Group;
	private dragGroup: eui.Group;
	private TipsGroup: eui.Group;
	private maskGroup: eui.Group;


	private currentQuestion: number = 0;
	private optionText: string = ""//獲取當前的文本

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);

	}


	protected childrenCreated(): void {
		super.childrenCreated();

		this.againButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.againTips, this)
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoNextScene, this)
		this.helpButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.displayChildrenStage, this);
		this.initDragable();
	}

	// 拖拽模塊
	private initDragable(): void {

		for (let children of this.dragGroup.$children) {
			let drag = new lzlib.Drag();
			this.stage.addChild(drag);
			drag.enableDrag(children, false);
		}
		this.initDropable();
	}

	private initDropable(): void {
		let drop = new lzlib.Drop();
		this.addChild(drop);
		let children = this.dropGroup.getChildAt(this.currentQuestion);
		drop.enableDrop(children);
		children.addEventListener(lzlib.LzDragEvent.DROP, this.onLabelDrop, this);
	}

	private onLabelDrop(e: lzlib.LzDragEvent): void {
		let targetCompent = e.target as eui.Label;
		let dragCompent = e.dragObject as eui.Label;

		this.optionText = dragCompent.text;
		if (dragCompent.text.trim() === "pen") {
			e.preventDefault();
			targetCompent.visible = true;
			dragCompent.visible = false;
			if (this.dropGroup.$children.every(children => children.visible) && (this.logImage.visible = true)) {
				this.TipsGroup.$children.forEach((children, index) => {
					(children.$children[0] as eui.Label).textColor = 0xFF0099;
					children.$children[1].visible = true
				})

				if (this.dropGroup.$children.every(children => children.visible) && this.logImage.visible) {
					this.nextButton.visible = true;
				}
			}
		}

		else {
			this.storybook.visible = true
			this.onshowTips();
			console.log("drop")
			this.swapChildren(this.dragGroup, this.maskGroup);
		}
	}

	private async onshowTips(): Promise<void> {

		if (this.optionText == "piggy bank") {
			this.bankTipsWorldlabel.textColor = 0xFF0099
			this.bankColorTipsLabe.visible = true
			this.againButton.visible = true
		}

		if (this.optionText == "basketball") {
			this.basketballTipWorldLabel.textColor = 0xFF0099
			this.basketballTipColorLabel.visible = true
			this.helpButton.visible = true
			this.againButton.visible = true
		}

		if (this.optionText == "storybook") {
			this.bankTipsWorldlabel.textColor = 0xFF0099;
			this.bankColorTipsLabe.visible = true;
			this.basketballTipWorldLabel.textColor = 0xFF0099;
			this.basketballTipColorLabel.visible = true;
			this.helpButton.visible = true
			this.againButton.visible = true
		}
	}

	private gotoNextScene(): void {
		Main.instance.gotoScene(new Choose3Scene())
	}

	private againTips(): void {
		this.againButton.visible = false;
		this.basketballTipWorldLabel.textColor = 0x000000;
		this.bankTipsWorldlabel.textColor = 0x000000;
		this.bankColorTipsLabe.visible = false;
		this.basketballTipColorLabel.visible = false;
		this.helpButton.visible = false;
		this.swapChildren(this.dragGroup, this.maskGroup);
	}

	private displayChildrenStage(): void {
		this.addChild(new HelpScene());
	}

}