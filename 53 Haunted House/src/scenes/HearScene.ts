class HearScene extends eui.Component implements eui.UIComponent{

    private nextSceneButton:eui.Image;
    private scrollText:eui.Label;

    private girlCry:eui.Image;
    private girlCryGroup:eui.Group;
    private girlCryFactory:egret.MovieClipDataFactory;
    private girlCryMovie:egret.MovieClip;

    private whisper:eui.Image;
    private whisperGroup:eui.Group;
    private whisperFactory:egret.MovieClipDataFactory;
    private whisperMovie:egret.MovieClip;

    private door:eui.Image;
    private doorGroup:eui.Group;
    private doorFactory:egret.MovieClipDataFactory;
    private doorMovie:egret.MovieClip;

    private currentSoundChannel:egret.SoundChannel;
    
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

        //girlCry
        this.girlCryGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hearCry, this);
        this.girlCryGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, this.switchToCryImage, this);
        this.girlCryGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, this.switchToCryMovie, this);
        this.girlCryFactory = new egret.MovieClipDataFactory( RES.getRes('a_girl_cry_json'), RES.getRes('a_girl_cry_png'));
        
        //whisper
        this.whisperGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hearTalk, this);
        this.whisperGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, this.switchToWhisperImage, this);
        this.whisperGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, this.switchToWhsiperMovie, this);
        this.whisperFactory = new egret.MovieClipDataFactory( RES.getRes('whispering_json'), RES.getRes('whispering_png'));

        //door  
        this.doorGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hearDoorOpen, this);
        this.doorGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, this.switchDoorImage, this);
        this.doorGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, this.switchToDoorMovie, this);
        this.doorFactory = new egret.MovieClipDataFactory( RES.getRes('door_opening_json'), RES.getRes('door_opening_png'));

    }

    private switchToCryImage():void{
        this.girlCry.visible = true;
        this.girlCry.source = 'girl_sad_png';
        this.girlCryMovie.stop();
        this.girlCryGroup.removeChild(this.girlCryMovie);
    }
    private switchToCryMovie():void{
        this.girlCry.visible = false;        
        this.girlCryMovie = new egret.MovieClip(this.girlCryFactory.generateMovieClipData('a_girl_cry'));
        this.girlCryGroup.addChild(this.girlCryMovie);
        this.girlCryMovie.play(-1);
    }
    
    private switchToWhisperImage():void{
        this.whisper.visible = true;
        this.whisper.source = 'twoboy_whisper_png';
        this.whisperMovie.stop();
        this.whisperGroup.removeChild(this.whisperMovie);
    }
    private switchToWhsiperMovie():void{
        this.whisper.visible = false;        
        this.whisperMovie = new egret.MovieClip(this.whisperFactory.generateMovieClipData('whispering'));
        this.whisperGroup.addChild(this.whisperMovie);
        this.whisperMovie.play(-1);
    }
    
    private switchDoorImage():void{
        this.door.visible = true;
        this.door.source = 'door_png';
        this.doorMovie.stop();
        this.doorGroup.removeChild(this.doorMovie);
    }
    private switchToDoorMovie():void{
        this.door.visible = false;        
        this.doorMovie = new egret.MovieClip(this.doorFactory.generateMovieClipData('door_opening'));
        this.doorGroup.addChild(this.doorMovie);
        this.doorMovie.play(-1);
    }
    
    private hearCry():void{
         this.scrollText.text = ' a girl crying.';
         this.switchFont();
         this.stopCurrentSoundChannel();
         this.currentSoundChannel = (RES.getRes('hear_cry_mp3') as egret.Sound).play(0,1);              
         this.nextScene(); 
    }

    private hearTalk():void{
         this.scrollText.text = ' people talking.';
         this.switchFont();
         this.stopCurrentSoundChannel();
         this.currentSoundChannel = (RES.getRes('hear_talk_mp3') as egret.Sound).play(0,1);                       
         this.nextScene(); 
    }

    private hearDoorOpen():void{
         this.scrollText.text=' the door open.';
         this.switchFont();
         this.stopCurrentSoundChannel();
         this.currentSoundChannel = (RES.getRes('hear_door_open_mp3') as egret.Sound).play(0,1);                       
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
        Main.instance.gotoScene(new SmellScene);
    }

}