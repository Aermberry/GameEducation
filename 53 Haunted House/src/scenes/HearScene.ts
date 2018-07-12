class HearScene extends eui.Component implements eui.UIComponent{

    
    private HearSceneButton:eui.Image

    public constructor(){
        super();
    }
    protected childrenCreated():void
    {   
        super.childrenCreated();
        mouse.enable(this.stage);
        mouse.setButtonMode(this.HearSceneButton, true);
        this.HearSceneButton.addEventListener(mouse.MouseEvent.ROLL_OUT,()=>this.HearSceneButton.source='button_png',this);
        this.HearSceneButton.addEventListener(mouse.MouseEvent.ROLL_OVER,()=>this.HearSceneButton.source='hover_button_png',this);
        this.HearSceneButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goNextScene,this);   
    }
    private goNextScene() {
        Main.instance.gotoScene(new SmellScene());
        
    }
}