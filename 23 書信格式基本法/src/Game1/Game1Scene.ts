class Game1Scene extends eui.Component implements  eui.UIComponent {
	
	private nameGroup: eui.Group;
	
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.enableDrag();
	}

	private enableDrag():void
	{
		for (let index = 0; index < this.nameGroup.numChildren; index++) {
			let child = this.nameGroup.getChildAt(index);
			let drag = new lzlib.Drag();
			this.addChild(drag);
			drag.enableDrag(child, false, index);
		}

		// let drop = new lzlib.Drop();
		// this.addChild(drop);
		// drop.enableDrop(this.roomGroup);
		// this.roomGroup.addEventListener(lzlib.LzDragEvent.DROP, this.onRoomDrop, this);
	}
	
}