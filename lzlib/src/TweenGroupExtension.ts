namespace egret.tween
{
    export interface TweenGroup
    {
        playOnceAsync(): Promise<void>
    }

    TweenGroup.prototype.playOnceAsync = function(): Promise<void>
    {
        return new Promise<void>((resolve, reject)=> {
            this.once(egret.Event.COMPLETE, resolve, this);
            this.play(0);
        });
    }
}