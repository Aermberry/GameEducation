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
			this.dropObject.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
		}

		private onTouchEnd(e: egret.TouchEvent): void
		{
			if (Drag.isDraging) {
				if (this.isDragDropObjectIntersets()) {
					//drop on target
					Drag.isAccepted = !this.dropObject.dispatchEvent(
						new LzDragEvent(LzDragEvent.DROP, Drag.dragingObject, Drag.dataTransfer, e.stageX, e.stageY, e.touchPointID));
				}
			}
		}

		private isDragDropObjectIntersets(): boolean {
			let dragingObjectGlobalPoint = Drag.dragingObject.parent.localToGlobal(Drag.dragingObject.x, Drag.dragingObject.y);
			let dropObjectGlobalPoint = this.dropObject.parent.localToGlobal(this.dropObject.x, this.dropObject.y);
			return new egret.Rectangle(dragingObjectGlobalPoint.x, dragingObjectGlobalPoint.y, Drag.dragingObject.width, Drag.dragingObject.height)
			.intersects(new egret.Rectangle(dropObjectGlobalPoint.x, dropObjectGlobalPoint.y, this.dropObject.width, this.dropObject.height))
		}
	}
}