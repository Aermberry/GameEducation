class Choose1Scene extends eui.Component implements eui.UIComponent {

	private dragGroup: eui.Group;
	private dropGroup: eui.Group;

	private nextButton:eui.Button;
	private logImage:eui.Image;

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
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gotoNextScene,this);
	}

	// drag模塊
	private initDragable(): void {

		for (let children of this.dragGroup.$children) {
			let drag = new lzlib.Drag();//實例化drag對象
			this.stage.addChild(drag);//將drag對象添加到舞臺上
			drag.enableDrag(children, false);//啓用drag功能
			children.addEventListener(lzlib.LzDragEvent.CANCEL, this.onDragCancel, this);//監聽drag事件
		}

		this.initDropableLabel();
	}

	private initDropableLabel(): void {
		let drop = new lzlib.Drop();//實例化drop對象
		this.addChild(drop);//添加drop對象到舞臺上
		let children = this.dropGroup.getChildAt(this.currentQuestionIndex);//獲取當前的問題
		drop.enableDrop(children);//對當前的問題啓用drop功能
		children.addEventListener(lzlib.LzDragEvent.DROP, this.onLabelDrop, this);
	}

	private onLabelDrop(e: lzlib.LzDragEvent): void {
		let targetComponent = e.target as eui.Label;
		let dragComponent = e.dragObject as eui.Label;
		console.log("aaaa")
		if (dragComponent.text.trim() == targetComponent.text.trim()) {
			e.preventDefault();
			targetComponent.visible = true;
			dragComponent.visible = false;

			this.dropGroup.$children.every(children => children.visible) &&
				(this.logImage.visible=true)&&(this.nextButton.visible=true);
		}
		else{
			
		}
	}

	private onDragCancel(e: lzlib.LzDragEvent): void {
		// this.showTipsLabel();
	}

	private async showTipsLabel():Promise<void> {
		
	}



	private gotoNextScene():void {
		Main.instance.gotoScene(new Choose2Scene());
	}
}