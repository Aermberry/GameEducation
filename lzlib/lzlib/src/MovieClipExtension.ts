namespace egret
{
    export interface MovieClip
    {
        playAsync(): Promise<void>
    }

    MovieClip.prototype.playAsync = function(): Promise<void>
    {
        return new Promise<void>((resolve, reject)=> {
            this.once(egret.Event.COMPLETE, resolve, this);
            this.play(0);
        });
    }
}