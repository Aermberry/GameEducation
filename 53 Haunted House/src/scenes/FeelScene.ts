class FeelScene extends eui.Component implements eui.UIComponent{
   
    
    private nextSceneButton:eui.Image
    private scrollText:eui.Label
    private boyandgirlCold:eui.Image
    private boyandgirlExcited:eui.Image
    private boyandgirlHorrified:eui.Image
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
        this.boyandgirlCold.addEventListener(egret.TouchEvent.TOUCH_TAP, this.feelCold, this);
        this.boyandgirlExcited.addEventListener(egret.TouchEvent.TOUCH_TAP, this.feelExcited, this);
        this.boyandgirlHorrified.addEventListener(egret.TouchEvent.TOUCH_TAP, this.feelHorrified, this);
        
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
