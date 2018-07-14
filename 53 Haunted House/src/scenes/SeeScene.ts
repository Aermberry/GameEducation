class SeeScene extends eui.Component implements eui.UIComponent{
    
    private scrollText:eui.Label;
    private invertedBat:eui.Image;
    private skeleton:eui.Image;
    private spiderWeb:eui.Image;
    private nextSceneButton:eui.Image;
    private currentSoundChannel:egret.SoundChannel;
     
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

    private seeBat(e:egret.Event):void{
        this.scrollText.text = 'bats.';
        this.stopCurrentSoundChannel();
        this.currentSoundChannel = (RES.getRes('see_bat_mp3') as egret.Sound).play(0,1);
        this.switchFont();
        this.nextScene();
    }
 
     private seeSkeleton(e:egret.Event):void{
        this.scrollText.text = 'a skeleton.';
        this.stopCurrentSoundChannel();
        this.currentSoundChannel = (RES.getRes('see_skeleton_mp3') as egret.Sound).play(0,1);              
        this.switchFont();
        
        this.nextScene();
    }

    private seeSpiders(e:egret.Event):void{
        this.scrollText.text = 'spiders.';
        this.stopCurrentSoundChannel();   
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
    
    private nextScene():void{
        this.nextSceneButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.stopSoundToNextScene, this);
    }

    private stopSoundToNextScene():void{
        this.stopCurrentSoundChannel();
        Main.instance.gotoScene(new FeelScene);
    }
}