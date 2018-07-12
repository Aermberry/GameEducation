class SmellScene extends eui.Component implements eui.UIComponent{

    
    private SmellSceneButton:eui.Image

    public constructor(){
        super();
    }
    protected childrenCreated():void
    {   
        super.childrenCreated();
        mouse.enable(this.stage);
        mouse.setButtonMode(this.SmellSceneButton, true);
        this.SmellSceneButton.addEventListener(mouse.MouseEvent.ROLL_OUT,()=>this.SmellSceneButton.source='button_png',this);
        this.SmellSceneButton.addEventListener(mouse.MouseEvent.ROLL_OVER,()=>this.SmellSceneButton.source='hover_button_png',this);
        this.SmellSceneButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goNextScene,this);   
    }
    private goNextScene() {
        Main.instance.gotoScene(new DescriptionScene());
        
    }
}