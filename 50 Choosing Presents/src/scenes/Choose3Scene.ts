class Choose3Scene extends eui.Component implements eui.UIComponent {

	private dragGroup: eui.Group;
	private dropGroup: eui.Group;
	private TipsGroup: eui.Group;
	private maskGroup: eui.Group;

	private nextButton: eui.Label;
	private logImage: eui.Image;
	private helpButton: eui.Button;
	private storybook:eui.Label;

	private tipsComponent: Ui.TexttLabel;

	private currentQuestion: number = 0;
	private currentText: string = "";

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.initDragable();
		this.helpButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.displayChildrenStage, this);
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoNextScene, this);
	}

	private initDragable(): void {
		this.dragGroup.$children.forEach(children => {
			let drag = new lzlib.Drag();
			this.stage.addChild(drag);
			drag.enableDrag(children, false);
			children.addEventListener(lzlib.LzDragEvent.CANCEL, this.onDragCancel, this);
		})
		this.initDropableLabel();
	}

	private initDropableLabel(): void {
		let drop = new lzlib.Drop()
		this.addChild(drop);
		let children = this.dropGroup.getChildAt(this.currentQuestion);
		drop.enableDrop(children);
		children.addEventListener(lzlib.LzDragEvent.DROP, this.onLabelDrop, this);
	}

	private onLabelDrop(e: lzlib.LzDragEvent): void {
		let target = e.target as eui.Label;
		let drag = e.dragObject as eui.Label;

		this.currentText = drag.text;
		this.nextButton.visible = true;

		if (drag.text.trim() == target.text.trim()) {
			e.preventDefault();
			target.visible = true;
			drag.visible = false;

			if (this.dropGroup.$children.every(children => children.visible) && (this.logImage.visible = true)) {
				this.TipsGroup.$children.forEach((children, index) => {
					(children.$children[0] as eui.Label).textColor = 0xFF0099;
					children.$children.forEach(element => {
						element.visible = true;
					});
				})
			}
		}
		else {
			this.storybook.visible=true;
			this.showTipsLabel();
			this.swapChildren(this.dragGroup, this.maskGroup);
		}


	}

	private onDragCancel(e: lzlib.LzDragEvent): void {
		this.showTipsLabel();
	}

	private showTipsLabel(): void {

		if (this.currentText) {
			this.helpButton.visible = true;
			if (this.currentText == "basketball" || this.currentText == "pen") {
				(this.TipsGroup.$children[1].$children[0] as eui.Label).textColor = 0xFF0099;
				this.TipsGroup.$children[1].$children.forEach((children, index) => {
					// (this.TipsGroup.$children[1].$children[0] as eui.Label).textColor=0xFF0099;
					children.visible = true;
				})
			}
			if (this.currentText == "storybook") {
				this.TipsGroup.$children.forEach((children, index) => {
					(children.$children[0] as eui.Label).textColor = 0xFF0099;
					children.$children.forEach(element => {
						element.visible = true;
					});
				})
				this.tipsComponent.visible = true;
			}
		}

	}

	private gotoNextScene(): void {
		const confirm = this.dropGroup.$children.every(children => children.visible) && this.logImage.visible
		if (confirm) {
			Main.instance.gotoScene(new FinishScene())
		}
		else {
			this.TipsGroup.$children.forEach((children, index) => {
				(children.$children[0] as eui.Label).textColor = 0x000000;
				for (let index = 1; index < children.$children.length; index++) {
					children.$children[index].visible = false;
				}
			})
			this.helpButton.visible = false;
			this.nextButton.visible = false;
			this.tipsComponent.visible = false;
			this.swapChildren(this.dragGroup, this.maskGroup);
		}

	}

	private displayChildrenStage(): void {

		let state = new HelpScene();
		state.State();
		this.addChild(state);
	}

}