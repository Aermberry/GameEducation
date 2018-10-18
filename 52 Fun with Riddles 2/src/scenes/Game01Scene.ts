class Game01Scene extends eui.Component implements eui.UIComponent, GameView {

	private tipsLineGroup:eui.Group;
	private tipsDocumentGroup:eui.Group;

	private nextButton:eui.Button;

	private correctTipsLabel:eui.Label;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	public gotoNextScene(scene: eui.Component): void {

		Main.instance.gotoScene(scene);

	}
	// Drag功能
	public initDrag(): void {
		
	}
	// Drop功能
	public initDropable(): void {

	}
	// Drop配對功能
	public onLabelDrop(): void {

	}
	// Drop不配對功能
	public onDragCancel(): void {

	}
	// 顯示提示
	public showTIpslabel(): void {

	}
}