class MainScene extends eui.Component implements eui.UIComponent {
	private confirmGroup: eui.Group;
	private dragGroup: eui.Group;
	private dropGroup: eui.Group;
	private colorTips: eui.Group;
	private helpGroup: eui.Group;
	private alertGroup: eui.Group;

	private currentQuestionIndex:number = 0; //当前问题
	private lastQuestionIndex:number=0//記錄上一次的index
	private currentTarget;
	private dropGroupArry:lzlib.Drop[]=[]
	private demo:lzlib.Drop[]

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

	private initHelpButton(): void {
		this.helpGroup.$children.forEach(child => {
			mouse.setButtonMode(child, true);
			child.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelpButtonClick, this);
		});
	}

	private async onHelpButtonClick(): Promise<void> {
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
			this.addChild(drag);
			drag.enableDrag(child, false);
			child.addEventListener(lzlib.LzDragEvent.CANCEL, this.onDragCancel, this);
		}
		console.log(this.currentQuestionIndex);
		this.initDropableLabel();
	}

	private initDropableLabel(): void {
		// let dropGroupArry:lzlib.Drop[]=[]
		for (let child of this.dropGroup.$children) {
			let drop = new lzlib.Drop();
			this.addChild(drop);
			drop.enableDrop(child);
			this.dropGroupArry.push(drop)
			child.addEventListener(lzlib.LzDragEvent.DROP, this.onLabelDrop, this);
		}
		console.log(this.dropGroupArry)
	}

	private async onLabelDrop(e: lzlib.LzDragEvent): Promise<void> {
		let targetComponent = e.target as eui.Label;
		this.currentTarget = targetComponent.text.toString();
		let dragComponent = e.dragObject as eui.Label;
		this.lastQuestionIndex=this.currentQuestionIndex;
		this.getCurrentIndex();

		if (dragComponent.text.replace(/\s+/g, "") == targetComponent.text.replace(/\s+/g, "")) {
			e.preventDefault();
			targetComponent.visible = true;
			dragComponent.visible = false;

			this.colorTips.getChildAt(this.currentQuestionIndex).visible = false;
			this.helpGroup.getChildAt(this.currentQuestionIndex).visible = false;
			this.confirmGroup.getChildAt(this.currentQuestionIndex).visible = true;

			if (this.confirmGroup.$children.every(child => child.visible)) {
				await lzlib.SoundUtility.stopCurrentSound();
				await lzlib.ThreadUtility.sleep(2000)
				Main.instance.gotoScene(new FinishScene());
			} else {
				this.initDropableLabel();
			}
		}
		else {
			this.helpGroup.getChildAt(this.lastQuestionIndex).visible = false;  
			this.helpGroup.getChildAt(this.currentQuestionIndex).visible = true;
			this.showCorrectLabelToDrag();
		}
	}

	private getCurrentIndex(): void {
		for (let child of this.dropGroup.$children) {
			let labelText = (child as eui.Label).text
			if (labelText.toString() == this.currentTarget) {
				console.log(labelText.toString())
				let index = this.dropGroup.getChildIndex(child);
				console.log(index)
				this.currentQuestionIndex = index;
			}
		}
	}

	private onDragCancel(e: lzlib.LzDragEvent): void {
		this.getCurrentIndex();
		this.showCorrectLabelToDrag();
	}

	//提示用户应该拖动哪个label
	private async showCorrectLabelToDrag(): Promise<void> {
		this.colorTips.getChildAt(this.currentQuestionIndex).visible = true;
		await lzlib.ThreadUtility.sleep(2000);
		this.colorTips.getChildAt(this.currentQuestionIndex).visible = false;
	}
}