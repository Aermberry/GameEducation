class ProGoScene extends eui.Component implements eui.UIComponent{

    private boomBtn:eui.Image;
    private bgmSoundChannel:egret.SoundChannel;
    private backGroup:eui.Group;

    public constructor(){
        super();
    }
    protected childrenCreated():void
    {   
        super.childrenCreated();

        this.bgmSoundChannel = RES.getRes('select_difficulty_scene_bgm_mp3').play(0,-1); 

        mouse.enable(this.stage);
        mouse.setButtonMode(this.boomBtn,true);
        this.boomBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goEnterProGameScene, this);
        this.boomBtn.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.boomBtn.source='black_boom_png', this);
        this.boomBtn.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.boomBtn.source='red_boom_png', this);

        this.backGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goStartScene, this);          
    }
    
    private goEnterProGameScene() {
        this.bgmSoundChannel.stop();
        // Main.instance.gotoScene(new EnterEasyGameScene);
    }

    private goStartScene() {
        this.bgmSoundChannel.stop();
        Main.instance.gotoScene(new StartScene);
    }
}
