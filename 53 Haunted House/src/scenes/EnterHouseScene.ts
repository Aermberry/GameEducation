class EnterHouseScene extends eui.Component implements eui.UIComponent{

    private platformTweenGroup:egret.tween.TweenGroup
    private button:eui.Image

    public constructor(){
        super();
    }
    protected childrenCreated():void
    {   
        super.childrenCreated();
        mouse.enable(this.stage);
        mouse.setButtonMode(this.button, true);
        this.platformTweenGroup.play(0);
        this.button.addEventListener(mouse.MouseEvent.ROLL_OUT,()=>this.button.source='button_png',this);
        this.button.addEventListener(mouse.MouseEvent.ROLL_OVER,()=>this.button.source='hover_button_png',this);
        this.button.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goInsideHouseScene,this);   
    }
    private goInsideHouseScene() {
        Main.instance.gotoScene(new InsideHouseScene());
        
    }
}