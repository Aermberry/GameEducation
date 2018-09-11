class MainScene extends eui.Component implements eui.UIComponent {
	private dragGroup: eui.Group;
	private dropGroup: eui.Group;
	private helpGroup: eui.Group;
	private alterGroup: eui.Group;
	private colorTips: eui.Group;

	private currentQuestionIndex = 0;// 当前问题，用户只能按顺序拖动label,逐条回答问题

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		mouse.enable(this.stage);//启用mouse检测
		// lzlib.SoundUtility.playSound('02_mp3');
		this.loadVoic();
	
	}

	// 加载声音模块
	private async loadVoic(): Promise<void> {
		await lzlib.SoundUtility.playSound('02_mp3').then(() => {
			this.helpGroup.getChildAt(this.currentQuestionIndex).visible = true;
				this.initHelpButton();
		        this.initDropable();
		})//加载声音资源

	}

	// 拖拽模块

	// 拖动模块
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
		let drop = new lzlib.Drop();
		this.addChild(drop);
		let child = this.dropGroup.getChildAt(this.currentQuestionIndex);
		drop.enableDrop(child);
		child.addEventListener(lzlib.LzDragEvent.DROP, this.onLabelDrop, this)
	}

	private onLabelDrop(e: lzlib.LzDragEvent): void {
		let targetComponent = e.target as eui.Label;
		let dragComponent = e.dragObject as eui.Label;

		if (dragComponent.text.trim() == targetComponent.text.trim()) {
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
			else {
				this.currentQuestionIndex++;
				this.initDropable();
				this.helpGroup.getChildAt(this.currentQuestionIndex).visible = true;
			}
		}
		else {
			this.showCorrectLabelToDrag();
		}
	}

	private onDragCancel(e: lzlib.LzDragEvent): void {
		this.showCorrectLabelToDrag();
	}

	//提示用户应该拖动哪个label

	private onDragCanel(e: lzlib.LzDragEvent): void {
		this.showCorrectLabelToDrag();
	}

	private async showCorrectLabelToDrag(): Promise<void> {
		this.colorTips.getChildAt(this.currentQuestionIndex).visible = true;
		await lzlib.ThreadUtility.sleep(2000);
		this.colorTips.getChildAt(this.currentQuestionIndex).visible = false;
	}

	// help模块
	private initHelpButton(): void {
		this.helpGroup.$children.forEach(child => {
			mouse.setButtonMode(child, true);//设置鼠标监听事件,当鼠标经过指定对象时，手型变换
			child.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelpButtonClick, this);
		});
	}

	private async onHelpButtonClick(): Promise<void> {
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