class InsideHouseScene extends eui.Component implements eui.UIComponent{
     private insideHouseTweenGroup:egret.tween.TweenGroup
     private InsideHouseSceneButton:eui.Image
     
     public constructor(){
        super();
     }


     protected childrenCreated():void
    {   
        super.childrenCreated();
        mouse.enable(this.stage);
        mouse.setButtonMode(this.InsideHouseSceneButton, true);
        this.insideHouseTweenGroup.play(0);
        this.InsideHouseSceneButton.addEventListener(mouse.MouseEvent.ROLL_OUT,()=>this.InsideHouseSceneButton.source='button_png',this);
        this.InsideHouseSceneButton.addEventListener(mouse.MouseEvent.ROLL_OVER,()=>this.InsideHouseSceneButton.source='hover_button_png',this);
        this.InsideHouseSceneButton.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>Main.instance.gotoScene(new QuestionScene),this);   
    }
}