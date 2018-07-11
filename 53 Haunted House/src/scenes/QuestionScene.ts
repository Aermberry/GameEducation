class QuestionScene extends eui.Component implements eui.UIComponent{
     private textTweenGroup:egret.tween.TweenGroup
     private QusetionSceneButton:eui.Image
     
     public constructor(){
        super();
     }
     protected childrenCreated():void
    {   
        super.childrenCreated();
        mouse.enable(this.stage);
        mouse.setButtonMode(this.QusetionSceneButton, true);
        this.textTweenGroup.play(0);
        this.QusetionSceneButton.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>Main.instance.gotoScene(new SeeScene),this);
    }
}