class EnterHouseScene extends eui.Component implements eui.UIComponent{

    private platformTweenGroup:egret.tween.TweenGroup
    private button:eui.Image
    private bgmFirstSoundChanel:egret.SoundChannel
    private bgmSecondSoundChanel:egret.SoundChannel

    public constructor(){
        super();
    }
    protected childrenCreated():void
    {   
        super.childrenCreated();
        this.platformTweenGroup.play(0);
        this.bgmFirstSoundChanel = RES.getRes('enter_house_first_mp3').play(0,1);
        this.bgmFirstSoundChanel.addEventListener(egret.Event.SOUND_COMPLETE,this.onbgmFirstSoundChanel,this);
    }
    private onbgmFirstSoundChanel(e:egret.Event):void
    {   
        mouse.enable(this.stage);
        mouse.setButtonMode(this.button, true);
        this.button.addEventListener(mouse.MouseEvent.ROLL_OUT,()=>this.button.source='button_png',this);
        this.button.addEventListener(mouse.MouseEvent.ROLL_OVER,()=>this.button.source='hover_button_png',this);
        this.button.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goInsideHouseScene,this);
        this.bgmSecondSoundChanel = RES.getRes('enter_house_second_mp3').play(0,1);
    }
    private goInsideHouseScene() {
        this.bgmSecondSoundChanel.stop();        
        Main.instance.gotoScene(new InsideHouseScene());    
    }
}