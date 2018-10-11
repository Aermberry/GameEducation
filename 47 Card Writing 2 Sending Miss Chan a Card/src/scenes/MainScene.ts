class MainScene extends eui.Component implements eui.UIComponent {
	private dragGroup: eui.Group;
	private dropGroup: eui.Group;
	private tipsGroup: eui.Group;
	private maskLayerGroup: eui.Group;

	private currentQuestionIndex = 0;//问题的Id
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

	// 拖拽模块
	private initDragable(): void {
		for (let child of this.dragGroup.$children) {
			let drag = new lzlib.Drag();
			this.stage.addChild(drag);
			drag.enableDrag(child, false);
			child.addEventListener(lzlib.LzDragEvent.CANCEL,this.onDragCancel,this);
		}
		this.initDropableLabel();
	}

	private initDropableLabel(): void {
		let drop = new lzlib.Drop();
		this.addChild(drop);
		let child = this.dropGroup.getChildAt(this.currentQuestionIndex);
		drop.enableDrop(child);
		child.addEventListener(lzlib.LzDragEvent.DROP, this.onLabelDrop, this);
	}

	private onLabelDrop(e: lzlib.LzDragEvent): void {
		let targetComponent = e.target as eui.Label;
		let dragComponent = e.dragObject as eui.Label;

		if (dragComponent.text.trim() == targetComponent.text.trim()) {
			e.preventDefault;
			targetComponent.visible = true;
			dragComponent.visible = false;

			if (this.dropGroup.$children.every(child => child.visible)) {
				lzlib.ThreadUtility.sleep(3000);
				Main.instance.gotoScene(new FinishScene());
			}
			else {
				this.currentQuestionIndex++;
				this.initDragable();
			}
		}
		else {
			this.showTipsLabel();

			this.swapChildren(this.dropGroup, this.maskLayerGroup);
			lzlib.ThreadUtility.sleep(2000).then(()=>{
				this.swapChildren(this.dropGroup, this.maskLayerGroup);
			})
		}
	}

	private onDragCancel(e:lzlib.LzDragEvent):void{
		this.showTipsLabel();
	}

	// tips模块
	private async showTipsLabel(): Promise<void> {
		let originalChildIndex = this.getChildIndex(this.tipsGroup);//获取tipsgroup的Id
		this.setChildIndex(this.tipsGroup, this.numChildren - 1);//将yipsGroup层级升至最高
		this.tipsGroup.getChildAt(this.currentQuestionIndex).visible = true;
		await lzlib.ThreadUtility.sleep(2000);
		this.tipsGroup.getChildAt(this.currentQuestionIndex).visible = false
		this.setChildIndex(this.tipsGroup, originalChildIndex);//返回至原来的层级
	}

}