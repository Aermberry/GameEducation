class DragPresenter {

	private view: DragView;
	private audioRepo = new DragAudioRepository();

	public constructor() {
	}

	public loadView(view: DragView): void
	{
		this.view = view;
	}

	public onDrop(e: lzlib.LzDragEvent): void
	{
		let dragImage = (e.dragObject as eui.Image);
		let dragName = dragImage.name
		if(dragName == e.target.$name){
			//拖拽正确 drop correct
			console.log('drop correct');
			//显示拖拽正确部分 show part for correct 
			this.view.showCorrectPart(dragName);
			//隐藏右边拖拽完成的部分 hide correct part in right
			this.view.hideDrapPart(dragImage);
			// this.view.isIncludeDrap(dragImage);
			//弹出信息 alert info
			this.view.alertCorrectInfo(dragName);

		}else{
			//拖拽失败 drop failure
			console.log('drop failure');
			//闪烁拖拽部位的对应文字  flicker text 
			this.view.textFlicker(dragName);
			//弹出信息 alert info
			this.view.alertCorrectInfo(dragName);
		}
	}
	
	public onMouseOver(e: egret.TouchEvent): void
	{
		let textLabel = e.target as eui.Label;
		let name = e.target.$name;
		textLabel.textColor = 0x2353E0;
		this.audioRepo.playMP3(name);
		this.view.showOverText(name);
	}

	public onMouseOut(e: egret.TouchEvent): void
	{
		let textLabel = e.target as eui.Label;
		textLabel.textColor = 0x266232;
		this.audioRepo.stopMP3();
		this.view.hideOverText();
	}
}