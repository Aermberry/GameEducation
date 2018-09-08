class MainScene extends eui.Component implements eui.UIComponent {
	private confirmGroup: eui.Group;
	private dragGroup: eui.Group;
	private dropGroup: eui.Group;
	private colorTips: eui.Group;
	private helpGroup: eui.Group;
	private alertGroup: eui.Group;
	
	private currentQuestionIndex = 0; //当前问题，用户只能按顺序拖动label，逐条回答问题

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		mouse.enable(this.stage);
		this.initHelpButton();
		this.initDragDrop();
		lzlib.SoundUtility.playSound('02_mp3');
	}

	private initHelpButton(): void
	{
		this.helpGroup.$children.forEach(child => {
			mouse.setButtonMode(child, true);
			child.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelpButtonClick, this);
		});
	}

	private async onHelpButtonClick(): Promise<void>
	{
		let originalChildIndex = this.getChildIndex(this.alertGroup);
		this.setChildIndex(this.alertGroup, this.numChildren - 1);
		this.alertGroup.getChildAt(this.currentQuestionIndex).visible = true;
		await lzlib.ThreadUtility.sleep(3000);
		this.alertGroup.getChildAt(this.currentQuestionIndex).visible = false;
		this.setChildIndex(this.alertGroup, originalChildIndex);
	}

	private initDragDrop(): void {
		for (let child of this.dragGroup.$children) {
			let drag = new lzlib.Drag();
			this.stage.addChild(drag);
			drag.enableDrag(child, false);
			child.addEventListener(lzlib.LzDragEvent.CANCEL, this.onDragCancel, this);
		}
		this.initDropableLabel();
	}

	private initDropableLabel(): void
	{
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
			this.confirmGroup.getChildAt(this.currentQuestionIndex).visible = true;
			
			if (this.confirmGroup.$children.every(child => child.visible)) {
				lzlib.SoundUtility.stopCurrentSound();
				Main.instance.gotoScene(new FinishScene());
			} else {
				this.currentQuestionIndex++;
				this.initDropableLabel();
				this.helpGroup.getChildAt(this.currentQuestionIndex).visible = true;
			}
		}
		else {
			this.showCorrectLabelToDrag();
		}
	}

	private onDragCancel(e: lzlib.LzDragEvent): void 
	{
		this.showCorrectLabelToDrag();
	}

	//提示用户应该拖动哪个label
	private async showCorrectLabelToDrag(): Promise<void>
	{
		this.colorTips.getChildAt(this.currentQuestionIndex).visible = true;
		await lzlib.ThreadUtility.sleep(2000);
		this.colorTips.getChildAt(this.currentQuestionIndex).visible = false;
	}
}