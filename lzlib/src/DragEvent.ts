namespace lzlib {
	export class LzDragEvent extends egret.TouchEvent {
		public static readonly DRAG_OVER = 'drag_enter';
		public static readonly DRAG_OUT = 'drag_out';
		/** drop inside the target */
		public static readonly DROP = 'drag_drop';
		/** drop outside the target */
		public static readonly CANCEL = 'dran_cancel';

		public dragObject: egret.DisplayObject;

		public constructor(type: string, dragObject: egret.DisplayObject, data: any, stageX: number, stageY: number, touchPointID?: number) 
		{
			super(type, true, true, stageX, stageY, touchPointID);
			this.data = data;
			this.dragObject = dragObject;
		}
	}
}