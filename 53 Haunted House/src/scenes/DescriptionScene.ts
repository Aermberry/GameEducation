class DescriptionScene extends eui.Component implements eui.UIComponent{

    private ExitButtonText:eui.Label
    private DescriptionExitButton:eui.Image

    public constructor(){
        super();
    }
    protected childrenCreated():void
    {   
        super.childrenCreated();
        mouse.enable(this.stage);
        mouse.setButtonMode(this.DescriptionExitButton, true);
        // this.ExitButtonText.addEventListener(mouse.MouseEvent.ROLL_OUT,()=>this.ExitButtonText.textColor='',this);
        // this.ExitButtonText.addEventListener(mouse.MouseEvent.ROLL_OVER,()=>this.ExitButtonText.textColor='',this);
        this.DescriptionExitButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.endScene,this);   
    }
    private endScene(e:egret.TouchEvent):void {
        window.close();
    }
}