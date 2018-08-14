interface Array<T> {
    shuffle(): void;
}
interface Math {
    randomMinMax(min: number, max: number): number;
}
declare namespace egret {
    interface MovieClip {
        playAsync(): Promise<void>;
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
        playOnceAsync(): Promise<void>;
    }
}
declare namespace lzlib {
    class TweenGroupUtility {
        /**
         * 循环播放动画
         */
        static playAnimation(target: egret.tween.TweenGroup): void;
    }
}
