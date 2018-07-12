class FeelScene extends eui.Component implements eui.UIComponent{

    
    private FeelSceneButton:eui.Image

    public constructor(){
        super();
    }
    protected childrenCreated():void
    {   
        super.childrenCreated();
        mouse.enable(this.stage);
        mouse.setButtonMode(this.FeelSceneButton, true);
        this.FeelSceneButton.addEventListener(mouse.MouseEvent.ROLL_OUT,()=>this.FeelSceneButton.source='button_png',this);
        this.FeelSceneButton.addEventListener(mouse.MouseEvent.ROLL_OVER,()=>this.FeelSceneButton.source='hover_button_png',this);
        this.FeelSceneButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goNextScene,this);   
    }
    private goNextScene() {
        Main.instance.gotoScene(new HearScene());
        
    }
}
