class SeeScene extends eui.Component implements eui.UIComponent{
    
    private scrollText:eui.Label;
    private invertedBat:eui.Image;
    private skeleton:eui.Image;
    private spiderWeb:eui.Image;
    private nextSceneButton:eui.Image;
    private seeBatBgmChaneel:egret.SoundChannel
    private seeSkeletonBgmChaneel:egret.SoundChannel
    private seeSpiderBgmChaneel:egret.SoundChannel
     
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
        this.invertedBat.addEventListener(egret.TouchEvent.TOUCH_TAP, this.seeBat, this);
        this.skeleton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.seeSkeleton , this);
        this.spiderWeb.addEventListener(egret.TouchEvent.TOUCH_TAP, this.seeSpiders , this);
        // this.invertedBat.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.invertedBat.source='inverted_bat_png',this);
        // this.invertedBat.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onInvertedBatMouseOver, this);
     }

    private seeBat():void{
        this.scrollText.text = 'bat.';
        this.seeBatBgmChaneel = RES.getRes('see_bat_mp3').play(0,1);
        this.nextScene();
    }
 
     private seeSkeleton():void{
        this.scrollText.text = 'a skeleton.';
        this.seeSkeletonBgmChaneel = RES.getRes("see_skeleton_mp3").play(0,1);
        this.nextScene();
    }

    private seeSpiders():void{
        this.scrollText.text = 'spiders.';
        this.seeSpiderBgmChaneel = RES.getRes("see_spider_mp3").play(0,1);
        this.nextScene();
    }

    private nextScene():void{
        this.nextSceneButton.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new FeelScene), this);
    }
}