class InsideHouseScene extends eui.Component implements eui.UIComponent{
     private insideHouseTweenGroup:egret.tween.TweenGroup
     private InsideHouseSceneButton:eui.Image
     private bgmSoundChanel:egret.SoundChannel
     
     public constructor(){
        super();
     }


     protected childrenCreated():void
    {   
        super.childrenCreated();
        mouse.enable(this.stage);  
        this.insideHouseTweenGroup.play(0);
        this.bgmSoundChanel = RES.getRes('inside_house_bgm_mp3').play(0,1);
        this.bgmSoundChanel.addEventListener(egret.Event.SOUND_COMPLETE, this.oninsideHouseBgm, this); 
    }
    private oninsideHouseBgm():void {
        mouse.setButtonMode(this.InsideHouseSceneButton, true);
        this.InsideHouseSceneButton.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.InsideHouseSceneButton.source='button_png', this);
        this.InsideHouseSceneButton.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.InsideHouseSceneButton.source='hover_button_png', this);
        this.InsideHouseSceneButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextScene, this);
    }
    private nextScene():void {
        Main.instance.gotoScene(new QuestionScene);
    }
}