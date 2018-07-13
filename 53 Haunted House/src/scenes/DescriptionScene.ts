class DescriptionScene extends eui.Component implements eui.UIComponent{

    private ExitButtonText:eui.Label
    private DescriptionExitButton:eui.Image
    private exitButtonTweenGroup:egret.tween.TweenGroup
    private bgmSoundChanel:egret.SoundChannel

    public constructor(){
        super();
    }

    protected childrenCreated():void
    {   
        super.childrenCreated();
        this.bgmSoundChanel = RES.getRes('description_bgm_mp3').play(0,1);
        this.exitButtonTweenGroup.play(0);
       
    }

    // private async waitSound():Promise<void>{
    //     await RES.getRes('description_bgm_mp3').play(0,1).sleep(60000);
    //     mouse.enable(this.stage);
    //     mouse.setButtonMode(this.DescriptionExitButton, true);
    //     // this.DescriptionExitButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.endScene,this);
    // }
    
    // private endScene(e:egret.TouchEvent):void {
    //     this.bgmSoundChanel.stop();
    //     window.close();
    // }
}