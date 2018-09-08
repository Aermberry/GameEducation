namespace lzlib {
	export class LzDragEvent extends egret.TouchEvent {
		public static readonly DRAG_OVER = 'drag_enter';
		public static readonly DRAG_OUT = 'drag_out';
		public static readonly DRAG_CANCEL = 'drag_cancel';
		public static readonly DROP = 'drag_drop';
		public dragObject: egret.DisplayObject;

		public constructor(type: string, dragObject: egret.DisplayObject, data: any, stageX: number, stageY: number, touchPointID?: number) 
		{
			super(type, true, true, stageX, stageY, touchPointID);
			this.data = data;
			this.dragObject = dragObject;
		}
	}
}