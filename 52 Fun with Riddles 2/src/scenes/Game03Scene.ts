class Game03Scene extends eui.Component implements eui.UIComponent {

	private tipsLineGroup: eui.Group;
	private tipsDocumentGroup: eui.Group;
	private DragGroup: eui.Group;
	private DropGroup: eui.Group;

	private nextButton: eui.Button;
	private dropImage: eui.Image;
	private Mask:eui.Rect;

	private correctTipsLabel: eui.Label;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();

		mouse.enable(this.stage);
		this.initDrag();
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => this.gotoNextScene(new Game04Scene()), this);
	}

	public gotoNextScene(scene: eui.Component): void {

		Main.instance.gotoScene(scene);

	}

	// Drag功能
	public initDrag(): void {

		for (let children of this.DragGroup.$children) {
			// 初始化實例化drag對象
			let drag = new lzlib.Drag();
			// 將drag對象添加到stage上
			this.stage.addChild(drag);
			// drag對象對children啓用drag功能
			drag.enableDrag(children, false);
			// 儅拖動到target範圍外時，觸發onDragCancel事件
			children.addEventListener(lzlib.LzDragEvent.CANCEL, this.onDragCancel, this);
		}
		this.initDropable();
	}

	// Drop功能
	public initDropable(): void {

		let drop = new lzlib.Drop();
		this.stage.addChild(drop);
		drop.enableDrop(this.dropImage);
		this.dropImage.addEventListener(lzlib.LzDragEvent.DROP, this.onLabelDrop, this);
	}

	// Drop配對功能
	public async onLabelDrop(e: lzlib.LzDragEvent): Promise<void> {
		let targetComponent = this.dropImage.source
		let dragComponent = (e.dragObject as eui.Image).source;
		this.closeTipsLabel();

		if (targetComponent == dragComponent) {
			e.preventDefault();
			this.dropImage.visible = true;
			e.dragObject.visible = false;
			this.correctTipsLabel.visible = true;
			this.nextButton.visible = true;
			this.closeTipsLabel();
			this.swapChildren(this.Mask,this.DragGroup);
		}
		else {
			this.showTIpsLabel()
		}
	}
	// Drop不配對功能
	public onDragCancel(): void {
		this.showTIpsLabel();
	}
	// 顯示提示
	public showTIpsLabel():void {
		this.tipsLineGroup.visible = true;
		this.tipsDocumentGroup.visible = true;
	}

	//關閉提示
	public closeTipsLabel():void {
		this.tipsLineGroup.visible = false;
		this.tipsDocumentGroup.visible = false;
	}

}