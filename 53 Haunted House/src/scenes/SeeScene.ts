class SeeScene extends eui.Component implements eui.UIComponent{
    
    private scrollText:eui.Label;
    private nextSceneButton:eui.Image;
    private currentSoundChannel:egret.SoundChannel;  //当前播放的音频
    
    //导入bat资源
    private invertedBat:eui.Image;
    private batGroup:eui.Group;
    private batFactory:egret.MovieClipDataFactory;
    private batSpreadClosureMovieClip:egret.MovieClip;
    
    //导入skeleton资源
    private skeleton:eui.Image
    private skeletonGroup:eui.Group;
    private skeletonFactory:egret.MovieClipDataFactory;
    private skeletonMovieClip:egret.MovieClip;
    
    //导入spider资源
    private spiderWeb:eui.Image;
    private spiderGroup:eui.Group;
    private spiderWebFactory:egret.MovieClipDataFactory;
    private spiderDownMovieClip:egret.MovieClip;
 
    public constructor(){
        super();
    }

    protected childrenCreated():void
    {   
        super.childrenCreated();
        mouse.enable(this.stage);
        mouse.setButtonMode(this.nextSceneButton, true);
        this.nextSceneButton.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.nextSceneButton.source = 'button_png', this);
        this.nextSceneButton.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.nextSceneButton.source = 'hover_button_png', this);
        
        //bat
        this.batGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.seeBat, this);
        this.batGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, this.switchToBatImage, this);
        this.batGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, this.switchToBatMovie, this);
        this.batFactory = new egret.MovieClipDataFactory( RES.getRes('bat_spread_closure_json'), RES.getRes('bat_spread_closure_png'));
        
        //skeleton
        this.skeletonGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.seeSkeleton , this);
        this.skeletonGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, this.switchToSkeletonImage, this);
        this.skeletonGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, this.switchToSkeletonMovie, this);
        this.skeletonFactory = new egret.MovieClipDataFactory( RES.getRes('skeleton_happy_json'), RES.getRes('skeleton_happy_png'));
            
        //spider
        this.spiderGroup.addEventListener(egret.TouchEvent.TOUCH_TAP,this.seeSpiders, this);
        this.spiderGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, this.switchToSpiderImage, this);
        this.spiderGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, this.switchToSpiderMovie, this);
        this.spiderWebFactory = new egret.MovieClipDataFactory( RES.getRes('spider_down_json'), RES.getRes('spider_down_png'));
        
     }

    
   

   
   private switchToBatImage():void{
        this.invertedBat.visible = true;
        this.invertedBat.source = 'inverted_bat_png';
        this.batSpreadClosureMovieClip.stop();
        this.batGroup.removeChild(this.batSpreadClosureMovieClip);
    }

    private switchToBatMovie():void{
        this.invertedBat.visible = false;        
        this.batSpreadClosureMovieClip = new egret.MovieClip(this.batFactory.generateMovieClipData('bat spread'));
        this.batGroup.addChild(this.batSpreadClosureMovieClip);
        this.batSpreadClosureMovieClip.play(-1);
    }
    
    private switchToSkeletonImage(){
        this.skeleton.visible = true;
        this.skeleton.source = 'skeleton_png';
        this.skeletonMovieClip.stop();
        this.skeletonGroup.removeChild(this.skeletonMovieClip);
    }

    private switchToSkeletonMovie() {
        this.skeleton.visible = false;
        this.skeletonMovieClip = new egret.MovieClip(this.skeletonFactory.generateMovieClipData('skeleton happy'));
        this.skeletonGroup.addChild(this.skeletonMovieClip);
        this.skeletonMovieClip.play(-1);
    }

    private switchToSpiderImage():void{
        this.spiderWeb.visible = true;
        this.spiderWeb.source = 'two_spider_web_png';
        this.spiderDownMovieClip.stop();
        this.spiderGroup.removeChild(this.spiderDownMovieClip);
    }

    private switchToSpiderMovie():void{
        this.spiderWeb.visible = false;        
        this.spiderDownMovieClip = new egret.MovieClip(this.spiderWebFactory.generateMovieClipData('spider down'));
        this.spiderGroup.addChild(this.spiderDownMovieClip);
        this.spiderDownMovieClip.play(-1);
    }

    private seeBat(e:egret.Event):void{
        this.scrollText.text = 'bats.';
        this.stopCurrentSoundChannel();
        this.isNextSceneButtonDisplap();
        this.currentSoundChannel = (RES.getRes('see_bat_mp3') as egret.Sound).play(0,1);
        this.switchFont();
        this.nextScene();
    }
 
    private seeSkeleton(e:egret.Event):void{
        this.scrollText.text = 'a skeleton.';
        this.stopCurrentSoundChannel();
        this.isNextSceneButtonDisplap();
        this.currentSoundChannel = (RES.getRes('see_skeleton_mp3') as egret.Sound).play(0,1);              
        this.switchFont();
        this.nextScene();
    }

    private seeSpiders(e:egret.Event):void{
        this.scrollText.text = 'spiders.';
        this.stopCurrentSoundChannel();   
        this.isNextSceneButtonDisplap();
        this.currentSoundChannel = (RES.getRes('see_spider_mp3') as egret.Sound).play(0,1);                           
        this.switchFont(); 
        this.nextScene();
    }

    private  switchFont():void{
        this.scrollText.fontFamily = 'La-Bamba-LET';
        this.scrollText.textColor = 9765173;
        this.scrollText.size = 74.5;
    }
    

    private stopCurrentSoundChannel():void{
        if(this.currentSoundChannel != null){
           this.currentSoundChannel.stop();
        }
    }

    
    
    //选择动画后再给按钮的监听事件
    private nextScene():void{
        this.nextSceneButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.stopSoundToNextScene, this);
    }
    
    //跳转下个场景，并暂停音频
    private stopSoundToNextScene():void{
        this.stopCurrentSoundChannel();
        Main.instance.gotoScene(new FeelScene);
    }

      private isNextSceneButtonDisplap(): void {
        this.nextSceneButton.visible == false && (this.nextSceneButton.visible = true);
    }


}