namespace lzlib {
	export class LzDragEvent extends egret.TouchEvent {
		public static readonly DRAG_OVER = 'drag_enter';
		public static readonly DRAG_OUT = 'drag_out';
		public static readonly DROP = 'drag_drop';
		public dragObject: egret.DisplayObject;
		/** 该拖拉控件的原始local point */
		public originalPoint: egret.Point;

		public constructor(type: string, dragObject: egret.DisplayObject, data: any, stageX: number, stageY: number, touchPointID?: number) 
		{
			super(type, true, true, stageX, stageY, touchPointID);
			this.data = data;
			this.dragObject = dragObject;
			this.originalPoint = new egret.Point(Drag.originalX, Drag.originalY);
		}
	}
}