var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
Math.randomMinMax = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
Array.prototype.shuffle = function () {
    var input = this;
    for (var i = input.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = input[randomIndex];
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
};
Array.prototype.all = function (callbackfn, thisArg) {
    return this.filter(callbackfn, this).length == this.length;
};
Array.prototype.any = function (callbackfn, thisArg) {
    return this.filter(callbackfn, this).length > 0;
};
var lzlib;
(function (lzlib) {
    /**
     * 使用方法
     *  let drag = new Drag();
        this.stage.addChild(drag);
        drag.enableDrag(dragObject, true, data);
    */
    var Drag = (function (_super) {
        __extends(Drag, _super);
        function Drag() {
            var _this = _super.call(this) || this;
            _this.isCopy = false;
            _this.dataTransfer = null;
            _this.distance = new egret.Point(); //鼠标点击时，鼠标全局坐标与dragingObject的位置差
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        Drag.prototype.onAddToStage = function (event) {
        };
        /*
        * 开始拖拽
        * @param _dragObject 拖拽对象
        * @param offsetX     X轴偏移
        * @param offsetY     Y轴偏移
        * */
        Drag.prototype.enableDrag = function (dragObject, isCopy, dataTransfer) {
            if (isCopy === void 0) { isCopy = false; }
            if (dataTransfer === void 0) { dataTransfer = null; }
            this.dragObject = dragObject;
            this.isCopy = isCopy;
            this.dragObject.touchEnabled = true;
            this.dragObject.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.dataTransfer = dataTransfer;
        };
        Drag.prototype.onTouchBegin = function (e) {
            Drag.init(this.isCopy ? this.cloneDragObject(this.dragObject) : this.dragObject, this.isCopy, this.dataTransfer);
            var globalPoint = this.dragObject.parent.localToGlobal(this.dragObject.x, this.dragObject.y); //这是正在拖动的对象的全局坐标
            Drag.dragingObject.x = globalPoint.x;
            Drag.dragingObject.y = globalPoint.y;
            if (Drag.dragingObject.parent != null) {
                Drag.dragingObject.parent.removeChild(Drag.dragingObject);
            }
            this.stage.addChild(Drag.dragingObject);
            this.distance.x = e.stageX - Drag.dragingObject.x;
            this.distance.y = e.stageY - Drag.dragingObject.y;
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        };
        Drag.prototype.cloneDragObject = function (dragObject) {
            if (dragObject instanceof eui.Image) {
                return this.cloneImage(dragObject);
            }
            if (dragObject instanceof eui.Label) {
                return this.cloneLabel(dragObject);
            }
            if (dragObject['clone']) {
                return dragObject['clone']();
            }
            throw new Error('not supported dragObject Type');
        };
        Drag.prototype.cloneImage = function (dragObject) {
            var clone = new eui.Image();
            clone.x = dragObject.x;
            clone.y = dragObject.y;
            clone.width = dragObject.width * 1.2;
            clone.height = dragObject.height * 1.2;
            clone.source = dragObject.source;
            clone.alpha = 0.8;
            return clone;
        };
        Drag.prototype.cloneLabel = function (dragObject) {
            var clone = new eui.Label();
            clone.x = dragObject.x;
            clone.y = dragObject.y;
            clone.width = dragObject.width * 1.2;
            clone.height = dragObject.height * 1.2;
            clone.text = dragObject.text;
            clone.textColor = dragObject.textColor;
            clone.size = dragObject.size;
            clone.fontFamily = dragObject.fontFamily;
            clone.alpha = 0.8;
            return clone;
        };
        Drag.prototype.onTouchMove = function (e) {
            if (Drag.isDraging) {
                Drag.dragingObject.x = e.stageX - this.distance.x;
                Drag.dragingObject.y = e.stageY - this.distance.y;
            }
        };
        Drag.prototype.onTouchEnd = function (e) {
            this.stage && this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            if (!Drag.isDraging) {
                //不处于拖动状态，就不用继续运行了。
                return;
            }
            if (Drag.isCopy) {
                Drag.dragingObject.parent && Drag.dragingObject.parent.removeChild(Drag.dragingObject);
            }
            if (!Drag.isAccepted) {
                //not one accept it, dispatch cancel event
                Drag.dragingObject.dispatchEvent(new lzlib.LzDragEvent(lzlib.LzDragEvent.CANCEL, Drag.dragingObject, Drag.dataTransfer, e.stageX, e.stageY, e.touchPointID));
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
        };
        Drag.init = function (dragingObject, isCopy, dataTransfer) {
            Drag.dragingObject = dragingObject;
            Drag.isCopy = isCopy;
            Drag.dataTransfer = dataTransfer;
            Drag.isDraging = true;
            Drag.isAccepted = false;
            Drag.originalX = dragingObject.x;
            Drag.originalY = dragingObject.y;
            Drag.originalParent = dragingObject.parent;
        };
        Drag.reset = function () {
            Drag.isDraging = false;
            Drag.dragingObject = null;
            Drag.isCopy = false;
            Drag.isAccepted = false;
            Drag.dataTransfer = null;
            Drag.originalX = 0;
            Drag.originalY = 0;
            Drag.originalParent = null;
        };
        Drag.prototype.disableDrag = function () {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.dragObject.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        };
        Drag.isDraging = false;
        Drag.dragingObject = null;
        Drag.isAccepted = false;
        Drag.dataTransfer = null;
        Drag.isCopy = false;
        Drag.originalParent = null;
        Drag.originalX = 0;
        Drag.originalY = 0;
        return Drag;
    }(egret.Sprite));
    lzlib.Drag = Drag;
    __reflect(Drag.prototype, "lzlib.Drag");
})(lzlib || (lzlib = {}));
var lzlib;
(function (lzlib) {
    var LzDragEvent = (function (_super) {
        __extends(LzDragEvent, _super);
        function LzDragEvent(type, dragObject, data, stageX, stageY, touchPointID) {
            var _this = _super.call(this, type, true, true, stageX, stageY, touchPointID) || this;
            _this.data = data;
            _this.dragObject = dragObject;
            _this.originalPoint = new egret.Point(lzlib.Drag.originalX, lzlib.Drag.originalY);
            return _this;
        }
        LzDragEvent.DRAG_OVER = 'drag_enter';
        LzDragEvent.DRAG_OUT = 'drag_out';
        /** drop inside the target */
        LzDragEvent.DROP = 'drag_drop';
        /** drop outside the target */
        LzDragEvent.DRAG_CANCEL = 'drag_cancel';
        return LzDragEvent;
    }(egret.TouchEvent));
    lzlib.LzDragEvent = LzDragEvent;
    __reflect(LzDragEvent.prototype, "lzlib.LzDragEvent");
})(lzlib || (lzlib = {}));
var lzlib;
(function (lzlib) {
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
    var Drop = (function (_super) {
        __extends(Drop, _super);
        function Drop() {
            return _super.call(this) || this;
        }
        Drop.prototype.enableDrop = function (dropObject) {
            this.dropObject = dropObject;
            this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this, true, 100);
        };
        Drop.prototype.disableDrop = function () {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this, true);
        };
        Drop.prototype.onTouchEnd = function (e) {
            if (lzlib.Drag.isDraging) {
                if (this.isDragDropObjectIntersets()) {
                    //drop on target
                    lzlib.Drag.isAccepted = !this.dropObject.dispatchEvent(new lzlib.LzDragEvent(lzlib.LzDragEvent.DROP, lzlib.Drag.dragingObject, lzlib.Drag.dataTransfer, e.stageX, e.stageY, e.touchPointID));
                }
            }
        };
        Drop.prototype.isDragDropObjectIntersets = function () {
            var dragingObjectGlobalPoint = lzlib.Drag.dragingObject.parent.localToGlobal(lzlib.Drag.dragingObject.x, lzlib.Drag.dragingObject.y);
            var dropObjectGlobalPoint = this.dropObject.parent.localToGlobal(this.dropObject.x, this.dropObject.y);
            return new egret.Rectangle(dragingObjectGlobalPoint.x, dragingObjectGlobalPoint.y, lzlib.Drag.dragingObject.width, lzlib.Drag.dragingObject.height)
                .intersects(new egret.Rectangle(dropObjectGlobalPoint.x, dropObjectGlobalPoint.y, this.dropObject.width, this.dropObject.height));
        };
        return Drop;
    }(egret.Sprite));
    lzlib.Drop = Drop;
    __reflect(Drop.prototype, "lzlib.Drop");
})(lzlib || (lzlib = {}));
var egret;
(function (egret) {
    egret.MovieClip.prototype.playAsync = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.once(egret.Event.COMPLETE, resolve, _this);
            _this.play(0);
        });
    };
})(egret || (egret = {}));
var lzlib;
(function (lzlib) {
    var SoundUtility = (function () {
        function SoundUtility() {
        }
        SoundUtility.playSound = function (soundName, stopCurrentSound) {
            var _this = this;
            if (stopCurrentSound === void 0) { stopCurrentSound = true; }
            return new Promise(function (resolve, reject) {
                if (_this.currentSoundChannel && stopCurrentSound) {
                    //默认先暂停当前的声音
                    _this.currentSoundChannel.stop();
                }
                _this.currentSoundChannel = RES.getRes(soundName).play(0, 1);
                _this.currentSoundChannel.once(egret.Event.SOUND_COMPLETE, resolve, _this);
            });
        };
        return SoundUtility;
    }());
    lzlib.SoundUtility = SoundUtility;
    __reflect(SoundUtility.prototype, "lzlib.SoundUtility");
})(lzlib || (lzlib = {}));
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};
var lzlib;
(function (lzlib) {
    var ThreadUtility = (function () {
        function ThreadUtility() {
        }
        ThreadUtility.sleep = function (ms) {
            if (ms === void 0) { ms = 0; }
            return new Promise(function (r) { return setTimeout(r, ms); });
        };
        ThreadUtility.playSound = function (soundName) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                RES.getRes(soundName).play(0, 1)
                    .once(egret.Event.SOUND_COMPLETE, resolve, _this);
            });
        };
        return ThreadUtility;
    }());
    lzlib.ThreadUtility = ThreadUtility;
    __reflect(ThreadUtility.prototype, "lzlib.ThreadUtility");
})(lzlib || (lzlib = {}));
var egret;
(function (egret) {
    var tween;
    (function (tween) {
        tween.TweenGroup.prototype.playOnceAsync = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.once(egret.Event.COMPLETE, resolve, _this);
                _this.play(0);
            });
        };
        tween.TweenGroup.prototype.playLoopAsync = function () {
            for (var key in this.items) {
                this.items[key].props = { loop: true };
            }
            this.play(0);
        };
    })(tween = egret.tween || (egret.tween = {}));
})(egret || (egret = {}));
