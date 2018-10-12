class FeelScene extends eui.Component implements eui.UIComponent{
  
    private nextSceneButton:eui.Image
    private scrollText:eui.Label

    private boyandgirlCold:eui.Image
    private boyandgirlColdGroup:eui.Group;
    private boyandGirlColdFactory:egret.MovieClipDataFactory;
    private boyandGirlCOldMovieClip:egret.MovieClip;
    
    private boyandgirlExcited:eui.Image
    private boyandgirlExcitedGroup:eui.Group;
    private boyandGirlExcitedFactory:egret.MovieClipDataFactory;
    private boyandGirlExcitedMovieClip:egret.MovieClip;

    private boyandgirlHorrified:eui.Image
    private boyandgirlHorrifiedGroup:eui.Group;
    private boyandGirlHorrifiedFactory:egret.MovieClipDataFactory;
    private boyandGirlHorrifiedMovieClip:egret.MovieClip;

    private currentSoundChannel:egret.SoundChannel
    

    public constructor(){
        super();
    }

    protected childrenCreated():void
    {   
        super.childrenCreated();
        mouse.enable(this.stage);
        mouse.setButtonMode(this.nextSceneButton, true);
        this.nextSceneButton.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.nextSceneButton.source='button_png', this);
        this.nextSceneButton.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.nextSceneButton.source='hover_button_png', this);
        
        //boyandgirlCold
        this.boyandgirlColdGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.feelCold, this);
        this.boyandgirlColdGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, this.switchToBoygilrColdImage, this);
        this.boyandgirlColdGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, this.switchToBoygirlColdMovie, this);
        this.boyandGirlColdFactory = new egret.MovieClipDataFactory( RES.getRes('boygirl_cold_json'), RES.getRes('boygirl_cold_png'));

        //boyandgirlExcited
        this.boyandgirlExcitedGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.feelExcited, this);
        this.boyandgirlExcitedGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, this.switchToBoygilrExcitedImage, this);
        this.boyandgirlExcitedGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, this.switchToBoygirlExcitedMovie, this);
        this.boyandGirlExcitedFactory = new egret.MovieClipDataFactory( RES.getRes('boygirl_excited_json'), RES.getRes('boygirl_excited_png'));

        //boyandgirlHorrified
        this.boyandgirlHorrifiedGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.feelHorrified, this);
        this.boyandgirlHorrifiedGroup.addEventListener(mouse.MouseEvent.ROLL_OUT,this.switchToBoyandgirlHorrifiedImage, this);
        this.boyandgirlHorrifiedGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, this.switchToBoyandGirlHorrifiedMovie,this);
        this.boyandGirlHorrifiedFactory = new egret.MovieClipDataFactory( RES.getRes('boygirl_horrified_json'), RES.getRes('boygirl_horrified_png'));
    }

    private switchToBoyandgirlHorrifiedImage():void{
        this.boyandgirlHorrified.visible = true;
        this.boyandgirlHorrified.source = 'boyandgirl_horrified_png';
        this.boyandGirlHorrifiedMovieClip.stop();
        this.boyandgirlHorrifiedGroup.removeChild(this.boyandGirlHorrifiedMovieClip);
    }

    private switchToBoyandGirlHorrifiedMovie():void{
        this.boyandgirlHorrified.visible = false;        
        this.boyandGirlHorrifiedMovieClip = new egret.MovieClip(this.boyandGirlHorrifiedFactory.generateMovieClipData('boygirl_horrified'));
        this.boyandgirlHorrifiedGroup.addChild(this.boyandGirlHorrifiedMovieClip);
        this.boyandGirlHorrifiedMovieClip.play(-1);
    }
    
    private switchToBoygilrExcitedImage():void{   
        this.boyandgirlExcited.visible = true;
        this.boyandgirlExcited.source = 'boyandgirl_excited_png';
        this.boyandGirlExcitedMovieClip.stop();
        this.boyandgirlExcitedGroup.removeChild(this.boyandGirlExcitedMovieClip);
    }

    private switchToBoygirlExcitedMovie():void{
        this.boyandgirlExcited.visible = false;        
        this.boyandGirlExcitedMovieClip = new egret.MovieClip(this.boyandGirlExcitedFactory.generateMovieClipData('boygirl_excited'));
        this.boyandgirlExcitedGroup.addChild(this.boyandGirlExcitedMovieClip);
        this.boyandGirlExcitedMovieClip.play(-1);
    }

    private switchToBoygilrColdImage():void{
        this.boyandgirlCold.visible = true;
        this.boyandgirlCold.source = 'boyandgirl_cold_png';
        this.boyandGirlCOldMovieClip.stop();
        this.boyandgirlColdGroup.removeChild(this.boyandGirlCOldMovieClip);
    }

    private switchToBoygirlColdMovie():void{
        this.boyandgirlCold.visible = false;        
        this.boyandGirlCOldMovieClip = new egret.MovieClip(this.boyandGirlColdFactory.generateMovieClipData('boygirl_cold'));
        this.boyandgirlColdGroup.addChild(this.boyandGirlCOldMovieClip);
        this.boyandGirlCOldMovieClip.play(-1);
    }

    private feelCold():void{
        this.scrollText.text = 'cold.';
        this.switchFont();
        this.stopCurrentSoundChannel();
        this.currentSoundChannel = (RES.getRes('feel_cold_mp3') as egret.Sound).play(0,1);                               
        this.nextScene();
    }

    private feelExcited():void{
        this.scrollText.text = 'excited.';
        this.switchFont();
        this.stopCurrentSoundChannel();
        this.currentSoundChannel = (RES.getRes('feel_excited_mp3') as egret.Sound).play(0,1);                           
        this.nextScene();  
    }

    private feelHorrified():void{
        this.scrollText.text = 'horrified.';
        this.switchFont();
        this.stopCurrentSoundChannel();
        this.currentSoundChannel = (RES.getRes('feel_horrified_mp3') as egret.Sound).play(0,1);                                   
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
        Main.instance.gotoScene(new HearScene);
    }

}
