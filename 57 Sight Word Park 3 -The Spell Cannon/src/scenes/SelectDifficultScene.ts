class SelectDifficultScene extends eui.Component implements eui.UIComponent{
    
    private backBtn:eui.Image;
    private easyStarImg:eui.Image;
    private proStarImg:eui.Image;
    private bgmSoundChannel:egret.SoundChannel;
    
    public constructor(){
        super();
    }

    protected childrenCreated():void
    {   
        super.childrenCreated();
        mouse.enable(this.stage);
        mouse.setButtonMode(this.easyStarImg,true);
        mouse.setButtonMode(this.proStarImg,true);

        this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goStartScene, this);
        this.bgmSoundChannel = RES.getRes('select_difficulty_scene_bgm_mp3').play(0,-1); 
        
        this.easyStarImg.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.easyStarImg.source='easy_star_normal_png', this);
        this.easyStarImg.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.easyStarImg.source='easy_star_hover_png', this);
        //进入easyGame游戏
        this.easyStarImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goEasyGameScene, this);
        
        this.proStarImg.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.proStarImg.source='pro_star_normal_png', this);
        this.proStarImg.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.proStarImg.source='pro_star_hover_png', this);
        //进入proGame游戏
        this.proStarImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goProGameScene, this);
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