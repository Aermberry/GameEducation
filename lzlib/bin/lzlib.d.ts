interface Math {
    randomMinMax(min: number, max: number): number;
}
interface Array<T> {
    shuffle(): void;
}
declare namespace lzlib {
    /**
     * 使用方法
     *  let drag = new Drag();
        this.stage.addChild(drag);
        drag.enableDrag(dragObject, true, data);
    */
    class Drag extends egret.Sprite {
        static isDraging: boolean;
        static dragingObject: egret.DisplayObject;
        static isAccepted: boolean;
        static dataTransfer: any;
        static isCopy: boolean;
        static originalParent: egret.DisplayObjectContainer;
        private static originalX;
        private static originalY;
        private dragObject;
        private isCopy;
        private dataTransfer;
        private distance;
        constructor();
        private onAddToStage(event);
        enableDrag(dragObject: egret.DisplayObject, isCopy?: boolean, dataTransfer?: any): void;
        private onTouchBegin(e);
        private cloneDragObject(dragObject);
        private cloneImage(dragObject);
        private onTouchMove(e);
        private onTouchEnd(e);
        private static init(dragingObject, isCopy, dataTransfer);
        private static reset();
        disableDrag(): void;
    }
}
declare namespace lzlib {
    class LzDragEvent extends egret.TouchEvent {
        static readonly DRAG_OVER: string;
        static readonly DRAG_OUT: string;
        /** drop inside the target */
        static readonly DROP: string;
        /** drop outside the target */
        static readonly CANCEL: string;
        dragObject: egret.DisplayObject;
        constructor(type: string, dragObject: egret.DisplayObject, data: any, stageX: number, stageY: number, touchPointID?: number);
    }
}
declare namespace lzlib {
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
    class Drop extends egret.Sprite {
        private dropObject;
        constructor();
        enableDrop(dropObject: egret.DisplayObject): void;
        disableDrop(): void;
        private onTouchEnd(e);
        private isDragDropObjectIntersets();
    }
}
declare namespace lzlib {
    interface Cloneable {
        clone(): object;
    }
}
declare namespace egret {
    interface MovieClip {
        playAsync(): Promise<void>;
    }
}
declare namespace lzlib {
    class SoundUtility {
        static playSound(soundName: string): Promise<void>;
    }
}
interface String {
    replaceAt(index: number, replacement: string): string;
}
declare namespace lzlib {
    class ThreadUtility {
        static sleep(ms?: number): Promise<{}>;
        static playSound(soundName: string): Promise<void>;
    }
}
declare namespace egret.tween {
    interface TweenGroup {
        /**
         * 播放一次动画
         */
        playOnceAsync(): Promise<void>;
        /**
         * 循环播放动画
         */
        playLoopAsync(): void;
    }
}
