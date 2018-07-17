class SelectDifficultScene extends eui.Component implements eui.UIComponent{
    
    private backGroup:eui.Group;
    
    private easyStarNormalImage:eui.Image;
    private easyStarMoveClip:egret.MovieClip;
    private easyStarFactory:egret.MovieClipDataFactory;
    private easyGroup:eui.Group;
    
    private proStarNormalImage:eui.Image;
    private proStarMoveClip:egret.MovieClip;
    private proStarFactory:egret.MovieClipDataFactory;
    private proGroup:eui.Group;

    private bgmSoundChannel:egret.SoundChannel;
    
    public constructor(){
        super();
    }

    protected childrenCreated():void
    {   
        super.childrenCreated();
        mouse.enable(this.stage);
        mouse.setButtonMode(this.easyGroup,true);
        mouse.setButtonMode(this.proGroup,true);

        this.backGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goStartScene, this);
        this.bgmSoundChannel = RES.getRes('select_difficulty_scene_bgm_mp3').play(0,-1); 
        
        this.easyGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, this.stopPlayEasyMovieClip, this);
        this.easyGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, this.playEasyMovieClip, this);
        this.easyStarFactory = new egret.MovieClipDataFactory( RES.getRes('easy_start_json'), RES.getRes('easy_start_png'));
        //进入easyGame游戏
        this.easyGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goEasyGameScene, this);
        
        this.proGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, this.stopPlayProMovieClip, this);
        this.proGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, this.playProMovieClip, this);
         this.proStarFactory = new egret.MovieClipDataFactory( RES.getRes('pro_start_json'), RES.getRes('pro_start_png'));
        //进入proGame游戏
        this.proGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goProGameScene, this);
    }
    
    //easy
    private playEasyMovieClip() {
        this.easyStarNormalImage.visible = false;
        this.easyStarMoveClip = new egret.MovieClip(this.easyStarFactory.generateMovieClipData('easy_start'));
        this.easyGroup.addChild(this.easyStarMoveClip);
        this.easyStarMoveClip.play(-1);
    }
    private stopPlayEasyMovieClip() {
        this.easyStarNormalImage.visible = true;
        this.easyStarMoveClip.stop();
        this.easyGroup.removeChild(this.easyStarMoveClip);
    }

    //pro
    private playProMovieClip() {
        this.proStarNormalImage.visible = false;
        this.proStarMoveClip = new egret.MovieClip(this.proStarFactory.generateMovieClipData('pro_start'));
        this.proGroup.addChild(this.proStarMoveClip);
        this.proStarMoveClip.play(-1);
    }
    private stopPlayProMovieClip() {
        this.proStarNormalImage.visible = true;
        this.proStarMoveClip.stop();
        this.proGroup.removeChild(this.proStarMoveClip);   
    }

    private goEasyGameScene() {
        this.bgmSoundChannel.stop();
        Main.instance.gotoScene(new EasyGoScene);
    }
    private goProGameScene() {
        this.bgmSoundChannel.stop();        
        Main.instance.gotoScene(new ProGoScene);
    }

    private goStartScene() {
        //返回startScene
        this.bgmSoundChannel.stop();
        Main.instance.gotoScene(new StartScene);
    }

}