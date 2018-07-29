class Drop extends egret.Sprite {
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
		if (Drag.isDraging && this.dropObject.hitTestPoint(e.stageX, e.stageY)) {
			Drag.isAccepted = !this.dropObject.dispatchEvent(
				new LzDragEvent(LzDragEvent.DROP, Drag.dragingObject, Drag.dataTransfer, e.stageX, e.stageY, e.touchPointID));

		}
	}
}