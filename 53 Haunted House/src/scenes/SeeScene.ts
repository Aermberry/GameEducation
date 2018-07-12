class SeeScene extends eui.Component implements eui.UIComponent{
    
    private SeeSceneButton:eui.Image
     
     public constructor(){
        super();
     }
     protected childrenCreated():void
    {   
        super.childrenCreated();
        mouse.enable(this.stage);
        mouse.setButtonMode(this.SeeSceneButton, true);
        this.SeeSceneButton.addEventListener(mouse.MouseEvent.ROLL_OUT,()=>this.SeeSceneButton.source='button_png',this);
        this.SeeSceneButton.addEventListener(mouse.MouseEvent.ROLL_OVER,()=>this.SeeSceneButton.source='hover_button_png',this);
        this.SeeSceneButton.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>Main.instance.gotoScene(new FeelScene),this); 
         
}
}