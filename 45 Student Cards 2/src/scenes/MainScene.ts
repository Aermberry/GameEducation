class MainScene extends eui.Component implements eui.UIComponent {
	private dragGroup: eui.Group;
	private dropGroup: eui.Group;
	private helpGroup: eui.Group;
	private alterGroup: eui.Group;
	private colorTips: eui.Group;

	private currentQuestionIndex = 0;// 記錄当前问题index
	private currentTarget;//紀錄當前拖動的問題對象
	private currentTargets;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		mouse.enable(this.stage);
		this.loadVoic();
	}
	private async loadVoic(): Promise<void> {
		await lzlib.SoundUtility.playSound('02_mp3').then(() => {
			// this.helpGroup.getChildAt(this.currentQuestionIndex).visible = true;
			this.initHelpButton();
			this.initDropable();
		})
	}

	private initDropable(): void {
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
		this.currentTarget = targetComponent.text.replace(/\s+/g, "");
		let dragComponent = e.dragObject as eui.Label;

		this.getCurrentIndex()


		if (dragComponent.text.replace(/\s+/g, "") === targetComponent.text.replace(/\s+/g, "")) {

			e.preventDefault();
			targetComponent.visible = true;
			dragComponent.visible = false;

			this.colorTips.getChildAt(this.currentQuestionIndex).visible = false;
			this.helpGroup.getChildAt(this.currentQuestionIndex).visible = false;

			if (this.dropGroup.$children.every(child => child.visible)) {
				lzlib.SoundUtility.stopCurrentSound;
				lzlib.ThreadUtility.sleep(3000);
				Main.instance.gotoScene(new FinishScene());
			}
		}
		else {
			let current = this.currentQuestionIndex
			if (current || current == 0) {
				if (targetComponent.visible == false) {
					this.showCorrectLabelToDrag();
					console.log(this.currentQuestionIndex);
					this.helpGroup.getChildAt(this.currentQuestionIndex).visible = true;
				}

			}
		}
	}

	//查詢當前被拽動的問題，所在dropGroup的index
	private getCurrentIndex(): void {

		for (let child of this.dropGroup.$children) {
			let labelText = (child as eui.Label).text
			if (labelText.replace(/\s+/g, "") == this.currentTarget) {
				let index = this.dropGroup.getChildIndex(child);
				// console.log(index)
				this.currentQuestionIndex = index;
			}
		}
	}


	private onDragCancel(e: lzlib.LzDragEvent): void {
		this.getCurrentIndex()
		this.showCorrectLabelToDrag();
	}

	//提示用户应该拖动哪个label

	private async showCorrectLabelToDrag(): Promise<void> {
		this.colorTips.getChildAt(this.currentQuestionIndex).visible = true;
		await lzlib.ThreadUtility.sleep(2000);
		this.colorTips.getChildAt(this.currentQuestionIndex).visible = false;
		for (var i = 0; i < this.colorTips.$children.length; i++) {
			this.colorTips.getChildAt(i).visible = false;
		}
	}

	// help模块
	private initHelpButton(): void {
		this.helpGroup.$children.forEach(child => {
			mouse.setButtonMode(child, true);//设置鼠标监听事件,当鼠标经过指定对象时，手型变换
			child.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelpButtonClick, this);
		});
	}

	private async onHelpButtonClick(): Promise<void> {

		let current = this.currentQuestionIndex
		if (current || current == 0) {
			if (this.currentTargets.visible == false) {

				let originalChildIndex = this.getChildIndex(this.alterGroup);//返回一个指定元素的index
				this.setChildIndex(this.alterGroup, this.numChildren - 1);//控制alerGroup的层级在最顶层
				this.alterGroup.getChildAt(this.currentQuestionIndex).visible = true;//根据index获取alterGroup中的指定的元素
				this.colorTips.getChildAt(this.currentQuestionIndex).visible = true;
				await lzlib.ThreadUtility.sleep(3000);
				this.alterGroup.getChildAt(this.currentQuestionIndex).visible = false;
				this.colorTips.getChildAt(this.currentQuestionIndex).visible = false;
				this.setChildIndex(this.alterGroup, originalChildIndex);//将层级调回到原来的位置	
			}

		}
	}
}