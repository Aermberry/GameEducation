class ProGoScene extends eui.Component implements eui.UIComponent{

    private boomBtn:eui.Image;
    private bgmSoundChannel:egret.SoundChannel;
    private backBtn:eui.Image;
    
    private proFactory:egret.MovieClipDataFactory;
    private proMovieGroup:eui.Group;
    private proMovieClip:egret.MovieClip;

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

        this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goStartScene, this); 

        this.proFactory = new egret.MovieClipDataFactory( RES.getRes('pro_go_scene_json') , RES.getRes('pro_go_scene_png'));
        this.proMovieClip = new egret.MovieClip(this.proFactory.generateMovieClipData('pro_go_scene'));
        this.proMovieGroup.addChild(this.proMovieClip);
        this.proMovieClip.play(-1);         
    }
    
    private goEnterProGameScene() {
        this.bgmSoundChannel.stop();
        Main.instance.gotoScene(new PlayProGameScene());
    }

    private goStartScene() {
        this.bgmSoundChannel.stop();
        this.proMovieClip.stop();
        this.proMovieGroup.removeChild(this.proMovieClip);
        Main.instance.gotoScene(new StartScene());
    }
}
