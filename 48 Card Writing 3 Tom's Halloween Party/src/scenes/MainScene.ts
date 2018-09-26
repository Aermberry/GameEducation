class MainScene extends eui.Component implements eui.UIComponent {

	private tipsGroup: eui.Group;
	private dragGroup: eui.Group;
	private dropGroup: eui.Group;

	private currentQuestionIndex = 0;//問題的Id

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

	//拖拽模塊
	private initDragable(): void {
		for (let child of this.dragGroup.$children) {
			let drag = new lzlib.Drag();//實例化drag對象
			this.stage.addChild(drag);//添加到舞臺上
			drag.enableDrag(child, false);//設置啓用drag功能的對象
			child.addEventListener(lzlib.LzDragEvent.CANCEL, this.onDragCancel, this);//監聽拖動事件
		}
		this.initDropLabel()
	}

	// drop模塊
	private initDropLabel() {
		let drop = new lzlib.Drop();//實例化drop對象
		this.addChild(drop);//添加到舞臺上
		let child = this.dropGroup.getChildAt(this.currentQuestionIndex)//獲取當前index的drop對象
		drop.enableDrop(child);//設置對象啓動drop功能
		child.addEventListener(lzlib.LzDragEvent.DROP, this.onLabelDrop, this);
	}

	private onLabelDrop(e: lzlib.LzDragEvent): void {
		let targetCompent = e.target as eui.Label;
		let dragCompent = e.dragObject as eui.Label;

		if (dragCompent.text.trim() == targetCompent.text.trim()) {
			e.preventDefault();
			targetCompent.visible = true;
			dragCompent.visible = false;
			// every()方法檢測數組中的每個元素是否符合規定的要求，檢測到有一個不符合要求就返回false,不繼續下去，當所有都檢測符合條件，就返回true
			if (this.dropGroup.$children.every(child => child.visible)) {
				Main.instance.gotoScene(new FinishScene());
			}
			else {
				this.currentQuestionIndex++;//下一個問題
				this.initDropLabel();
			}
		}
		else {
			this.showTipsLabel();

		}
	}

	//拖動事件
	private onDragCancel(e: lzlib.LzDragEvent): void {
		this.showTipsLabel();
	}

	//tips 模塊
	private async showTipsLabel(): Promise<void> {
		let currentQuestionIndex = this.currentQuestionIndex;
		let originalChildIndex = this.getChildIndex(this.tipsGroup);//獲取tipsgroup的ID
		this.setChildIndex(this.tipsGroup, this.numChildren - 1);//將tipsGroup層級升至最高
		this.tipsGroup.getChildAt(currentQuestionIndex).visible = true;
		await lzlib.ThreadUtility.sleep(2000);
		this.tipsGroup.getChildAt(currentQuestionIndex).visible = false;
		this.setChildIndex(this.tipsGroup, originalChildIndex);//返回至原來的層級
	}

}