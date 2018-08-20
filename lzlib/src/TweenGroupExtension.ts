namespace egret.tween
{
    export interface TweenGroup
    {
        /**
         * 播放一次动画
         */
        playOnceAsync(): Promise<void>;
        /**
         * 循环播放动画
         */
        playLoopAsync(): void;
    }

    TweenGroup.prototype.playOnceAsync = function(): Promise<void>
    {
        return new Promise<void>((resolve, reject)=> {
            this.once(egret.Event.COMPLETE, resolve, this);
            this.play(0);
        });
    }

    TweenGroup.prototype.playLoopAsync = function(): void
    {
        for(var key in this.items)
        {
            this.items[key].props = {loop:true};
        }
        this.play(0);
    }
}