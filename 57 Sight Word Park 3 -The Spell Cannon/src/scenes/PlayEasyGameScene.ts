class PlayEasyGameScene extends eui.Component implements eui.UIComponent{

    private playEasyGameTweenGroup:egret.tween.TweenGroup;
    
    public constructor(){
        super();
    }

    protected childrenCreated():void
    {   
       super.childrenCreated();
       this.initTweenGroup();
    }

    private initTweenGroup():void{
    //    this.playEasyGameTweenGroup.play(0);
    }
}
