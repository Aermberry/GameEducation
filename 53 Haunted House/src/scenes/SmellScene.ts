class SmellScene extends eui.Component implements eui.UIComponent{

    private flowerMushroom:eui.Image
    private pointedPaper:eui.Image
    private fish :eui.Image   
    private nextSceneButton:eui.Image
    private scrollText:eui.Label
    private smellStrangeBgmChannel:egret.SoundChannel
    private smellBurningBgmChannel:egret.SoundChannel
    private smellRottenBgmChannel:egret.SoundChannel

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
        this.flowerMushroom.addEventListener(egret.TouchEvent.TOUCH_TAP, this.smellStrange, this);
        this.pointedPaper.addEventListener(egret.TouchEvent.TOUCH_TAP, this.smellBurning, this);        
        this.fish.addEventListener(egret.TouchEvent.TOUCH_TAP, this.smellRotten, this);    
    }

    private smellStrange():void{
        this.scrollText.text='  something strange.'
        this.smellStrangeBgmChannel = RES.getRes('smell_strange_mp3').play(0,1);
        this.nextScene();

    }

    private smellBurning():void{
        this.scrollText.text='  something burning.'
        this.smellBurningBgmChannel = RES.getRes('smell_burning_mp3').play(0,1);
        this.nextScene();
    }

    private smellRotten():void{
        this.scrollText.text='  something rotten.'
        this.smellRottenBgmChannel = RES.getRes('smell_rotten_mp3').play(0,1);
        this.nextScene();
    }

    private nextScene():void{
        this.nextSceneButton.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new DescriptionScene), this);
    }

}