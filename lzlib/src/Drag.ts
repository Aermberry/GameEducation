namespace lzlib {
    interface Cloneable {
		clone(): object;
    }
    
    /**
     * 使用方法
     *  let drag = new Drag();
        this.stage.addChild(drag);
        drag.enableDrag(dragObject, true, data);
    */
    export class Drag extends egret.Sprite {
        public static isDraging = false;
        public static dragingObject: egret.DisplayObject = null;
        public static isAccepted = false;
        public static dataTransfer: any = null;
        public static isCopy: boolean = false;
        public static originalParent: egret.DisplayObjectContainer = null;

        private static originalX = 0;
        private  static originalY = 0;

        private dragObject:egret.DisplayObject;
        private isCopy: boolean = false;
        private dataTransfer: any = null;

        private distance = new egret.Point(); //鼠标点击时，鼠标全局坐标与dragingObject的位置差
    
        public constructor() {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }
    
        private onAddToStage(event:egret.Event) {
    
        }
    
        /*
        * 开始拖拽
        * @param _dragObject 拖拽对象
        * @param offsetX     X轴偏移
        * @param offsetY     Y轴偏移
        * */
        public enableDrag(dragObject:egret.DisplayObject, isCopy: boolean = false, dataTransfer: any = null) {
            this.dragObject = dragObject;
            this.isCopy = isCopy;
            this.dragObject.touchEnabled = true;
            this.dragObject.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.dataTransfer = dataTransfer;
        }
    
        private onTouchBegin(e:egret.TouchEvent) {
            Drag.init(this.isCopy ? this.cloneDragObject(this.dragObject) : this.dragObject, this.isCopy, this.dataTransfer);

            let globalPoint = this.dragObject.parent.localToGlobal(this.dragObject.x, this.dragObject.y); //这是正在拖动的对象的全局坐标
            Drag.dragingObject.x = globalPoint.x;
            Drag.dragingObject.y = globalPoint.y;

            if (Drag.dragingObject.parent != null) {
                Drag.dragingObject.parent.removeChild(Drag.dragingObject);
            }

            this.stage.addChild(Drag.dragingObject);
            this.distance.x = e.stageX - Drag.dragingObject.x;
            this.distance.y = e.stageY - Drag.dragingObject.y;
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        }

        private cloneDragObject(dragObject: egret.DisplayObject): egret.DisplayObject
        {
            if (dragObject instanceof eui.Image) {
                return this.cloneImage(dragObject as eui.Image);
            }
            if (dragObject['clone']) {
                return dragObject['clone']() as egret.DisplayObject;
            }
            throw new Error('not supported dragObject Type');
        }

        private cloneImage(dragObject: eui.Image): egret.DisplayObject
        {
            let clone = new eui.Image();
            clone.x = dragObject.x;
            clone.y = dragObject.y;
            clone.width = dragObject.width * 1.2;
            clone.height = dragObject.height * 1.2;
            clone.source = dragObject.source;
            clone.alpha = 0.8;
            return clone;
        }
    
        private onTouchMove(e:egret.TouchEvent) {
            if (Drag.isDraging) {
                Drag.dragingObject.x = e.stageX - this.distance.x;
                Drag.dragingObject.y = e.stageY - this.distance.y;
            }
        }
    
        private onTouchEnd(e:egret.TouchEvent) {
            this.stage && this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            if (!Drag.isDraging) {
                //不处于拖动状态，就不用继续运行了。
                return;
            }

            if (Drag.isCopy) {
                Drag.dragingObject.parent && Drag.dragingObject.parent.removeChild(Drag.dragingObject);
            }

            if (!Drag.isAccepted) {
                Drag.dragingObject.dispatchEvent(
					new LzDragEvent(LzDragEvent.DRAG_CANCEL, Drag.dragingObject, Drag.dataTransfer, e.stageX, e.stageY, e.touchPointID));

                if (!Drag.isCopy) {
                    //没有其他对象愿意接收你，就从哪里来回到哪里去。
                    Drag.dragingObject.x = Drag.originalX;
                    Drag.dragingObject.y = Drag.originalY;
                    if (Drag.originalParent != Drag.dragingObject.parent) {
                        Drag.originalParent.addChild(Drag.dragingObject);
                    }
                }
            }
            Drag.reset();
        }

        private static init(dragingObject: egret.DisplayObject, isCopy: boolean, dataTransfer: any): void
        {
            Drag.dragingObject = dragingObject;
            Drag.isCopy = isCopy;
            Drag.dataTransfer = dataTransfer;
            Drag.isDraging = true;
            Drag.isAccepted = false;
            Drag.originalX = dragingObject.x;
            Drag.originalY = dragingObject.y;
            Drag.originalParent = dragingObject.parent;
        }

        private static reset(): void
        {
            Drag.isDraging = false;
            Drag.dragingObject = null;
            Drag.isCopy = false;
            Drag.isAccepted = false;
            Drag.dataTransfer = null;
            Drag.originalX = 0;
            Drag.originalY = 0;
            Drag.originalParent = null;
        }
    
        public disableDrag() {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.dragObject.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        }
    }
}