class EasyGoScene extends eui.Component implements eui.UIComponent{

    private boomBtn:eui.Image;
    private bgmSoundChannel:egret.SoundChannel;
    private backBtn:eui.Image;
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

        this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goStartScene, this);

        this.easyFactory = new egret.MovieClipDataFactory( RES.getRes('easy_go_scene_json') , RES.getRes('easy_go_scene_png'));
        this.easyMovieClip = new egret.MovieClip(this.easyFactory.generateMovieClipData('easy_go_scene'));
        this.easyMovieGroup.addChild(this.easyMovieClip);
        this.easyMovieClip.play(-1);
         
    }
    
    private goEnterEasyGameScene() {
        this.bgmSoundChannel.stop();
        this.easyMovieClip.stop();
        this.easyMovieGroup.removeChild(this.easyMovieClip);
        Main.instance.gotoScene(new PlayEasyGameScene);
    }

    private goStartScene() {
        this.bgmSoundChannel.stop();
        this.easyMovieClip.stop();
        this.easyMovieGroup.removeChild(this.easyMovieClip);
        Main.instance.gotoScene(new StartScene);
    }
}
