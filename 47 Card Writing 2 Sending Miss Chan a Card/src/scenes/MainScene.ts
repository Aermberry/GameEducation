class MainScene extends eui.Component implements eui.UIComponent {
	private dragGroup: eui.Group;
	private dropGroup: eui.Group;
	private tipsGroup: eui.Group;
	private maskLayerGroup: eui.Group;

	private startMask: eui.Rect;
	private startButton: eui.Button;
	private loadingAnim: egret.tween.TweenGroup

	private currentQuestionIndex = 0;
	private currentTarget;
	private currentTargets;
	private originalChildIndex: number;
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();

		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButtonClick, this);
	}

	private async onStartButtonClick(): Promise<void> {
		await this.loadingAnim.play(0);
		this.startMask.visible = false;
		this.startButton.visible = false;
		await lzlib.ThreadUtility.sleep(2000)
		this.initDragable();
	}

	private initDragable(): void {
		for (let child of this.dragGroup.$children) {
			let drag = new lzlib.Drag();
			this.stage.addChild(drag);
			drag.enableDrag(child, false);
			child.addEventListener(lzlib.LzDragEvent.CANCEL, this.onDragCancel, this);
		}
		this.initDropableLabel();
	}

	private initDropableLabel(): void {
		for (let child of this.dropGroup.$children) {
			let drop = new lzlib.Drop();
			this.addChild(drop);
			drop.enableDrop(child);
			child.addEventListener(lzlib.LzDragEvent.DROP, this.onLabelDrop, this);
		}
	}

	private onLabelDrop(e: lzlib.LzDragEvent): void {
		let targetComponent = e.target as eui.Label;
		this.currentTargets = targetComponent;
		this.currentTarget = targetComponent.text.toString();
		let dragComponent = e.dragObject as eui.Label;

		this.getCurrentIndex();

		if (dragComponent.text.trim() == targetComponent.text.trim()) {
			e.preventDefault;
			targetComponent.visible = true;
			dragComponent.visible = false;

			this.tipsGroup.getChildAt(this.currentQuestionIndex).visible = false
			this.setChildIndex(this.tipsGroup, this.originalChildIndex);


			if (this.dropGroup.$children.every(child => child.visible)) {
				lzlib.ThreadUtility.sleep(3000);
				Main.instance.gotoScene(new FinishScene());
			}
		}
		else {
			let current = this.currentQuestionIndex
			if (current || current == 0) {
				if (targetComponent.visible == false) {
					this.showTipsLabel();
					this.swapChildren(this.dropGroup, this.maskLayerGroup);
				}
			}


		}
	}

	private getCurrentIndex(): void {

		for (let child of this.dropGroup.$children) {
			let labelText = (child as eui.Label).text
			if (labelText.toString() == this.currentTarget) {
				let index = this.dropGroup.getChildIndex(child);
				console.log(index)
				this.currentQuestionIndex = index;
			}
		}
	}

	private onDragCancel(e: lzlib.LzDragEvent): void {
		this.getCurrentIndex();
		this.showTipsLabel();
	}

	private async showTipsLabel(): Promise<void> {
		let current = this.currentQuestionIndex
		if (current || current == 0) {
			if (this.currentTargets.visible == false) {
				this.originalChildIndex = this.getChildIndex(this.tipsGroup);//获取tipsgroup的Id
				this.setChildIndex(this.tipsGroup, this.numChildren - 1);//将yipsGroup层级升至最高
				this.tipsGroup.getChildAt(this.currentQuestionIndex).visible = true;
				await lzlib.ThreadUtility.sleep(2000);
				for (let child of this.tipsGroup.$children) {
					(child as Ui.TexttLabel).visible = false;
				}
				// this.tipsGroup.getChildAt(this.currentQuestionIndex).visible = false
				this.setChildIndex(this.tipsGroup, this.originalChildIndex);//返回至原来的层级
			}
		}
	}

}