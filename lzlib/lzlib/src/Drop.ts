namespace lzlib {
	/**
	 * 使用方法
	 *  let drop = new Drop();
		this.stage.addChild(drop);
		drop.enableDrag(dropObject);
		dropObject.addEventListener(lzlib.LzDragEvent.DROP, this.onDrop, this);

		onDrop(e: lzlib.DragEvent): void
		{
			//处理 e.dragData
			//调用e.preventDefault()，表示dropObject接受拖入的对象
			e.preventDefault();
		}
	*/
	export class Drop extends egret.Sprite {
		private dropObject: egret.DisplayObject;

		public constructor() 
		{
			super();
		}

		public enableDrop(dropObject: egret.DisplayObject): void
		{
			this.dropObject = dropObject;
			this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this, true, 100);
		}

		public disableDrop(): void
		{
			this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this, true);
		}

		private onTouchEnd(e: egret.TouchEvent): void
		{
			if (Drag.isDraging) {
				if (this.isDragDropObjectIntersets(e.stageX, e.stageY)) {
					//drop on target
					Drag.isAccepted = !this.dropObject.dispatchEvent(
						new LzDragEvent(LzDragEvent.DROP, Drag.dragingObject, Drag.dataTransfer, e.stageX, e.stageY, e.touchPointID));
				}
			}
		}

		private isDragDropObjectIntersets(mouseStageX: number, mouseStageY: number): boolean {
			let dropObjectGlobalPoint = this.dropObject.parent.localToGlobal(this.dropObject.x, this.dropObject.y);
			return new egret.Rectangle(dropObjectGlobalPoint.x, dropObjectGlobalPoint.y, this.dropObject.width, this.dropObject.height).contains(mouseStageX, mouseStageY);
		}
	}
}