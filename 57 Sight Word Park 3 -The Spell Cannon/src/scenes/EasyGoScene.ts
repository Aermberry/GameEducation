class EasyGoScene extends eui.Component implements eui.UIComponent{

    private boomBtn:eui.Image;
    private bgmSoundChannel:egret.SoundChannel;
    private backGroup:eui.Group;
    private easyMovieGroup:eui.Group;
    private easyMovieClip:egret.MovieClip;
    private easyFactory:egret.MovieClipDataFactory;

    public constructor(){
        super();
    }
    protected childrenCreated():void
    {   
        super.childrenCreated();

        this.bgmSoundChannel = RES.getRes('select_difficulty_scene_bgm_mp3').play(0,-1); 

        mouse.enable(this.stage);
        mouse.setButtonMode(this.boomBtn,true);
        this.boomBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goEnterEasyGameScene, this);
        this.boomBtn.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.boomBtn.source='black_boom_png', this);
        this.boomBtn.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.boomBtn.source='red_boom_png', this);

        this.backGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goStartScene, this);

        this.easyFactory = new egret.MovieClipDataFactory( RES.getRes('easy_go_movie_json') , RES.getRes('easy_go_movie_png'));
        this.easyMovieClip = new egret.MovieClip(this.easyFactory.generateMovieClipData('easy_go_movie'));
        this.easyMovieGroup.addChild(this.easyMovieClip);
        this.easyMovieClip.play(-1);
         
    }
    
    private goEnterEasyGameScene() {
        this.bgmSoundChannel.stop();
        // Main.instance.gotoScene(new EnterEasyGameScene);
    }

    private goStartScene() {
        this.bgmSoundChannel.stop();
        Main.instance.gotoScene(new StartScene);
    }
}
