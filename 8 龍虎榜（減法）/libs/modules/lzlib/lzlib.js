var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
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
Math.randomMinMax = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
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
    })(tween = egret.tween || (egret.tween = {}));
})(egret || (egret = {}));
var lzlib;
(function (lzlib) {
    var TweenGroupUtility = (function () {
        function TweenGroupUtility() {
        }
        /**
         * 循环播放动画
         */
        TweenGroupUtility.playAnimation = function (target) {
            for (var key in target.items) {
                target.items[key].props = { loop: true };
            }
            target.play(0);
        };
        return TweenGroupUtility;
    }());
    lzlib.TweenGroupUtility = TweenGroupUtility;
    __reflect(TweenGroupUtility.prototype, "lzlib.TweenGroupUtility");
})(lzlib || (lzlib = {}));
