class MoonRiseScene extends eui.Component implements eui.UIComponent{
    
    private moonRiseGreenGroup:egret.tween.TweenGroup
    private bgmSoundChannel:egret.SoundChannel
    public constructor(){
        super();
    }
    
    protected partAdded(partName:string,instance:any):void
        {
            super.partAdded(partName,instance);
        }
        

        protected childrenCreated():void
        {   
            super.childrenCreated();
            this.moonRiseGreenGroup.addEventListener(egret.Event.COMPLETE, this.moonRiseGreenGroupComplete, this);
            this.moonRiseGreenGroup.play(0);
            this.bgmSoundChannel = RES.getRes("moon_rise_bgm_mp3").play();

        }
        
        private moonRiseGreenGroupComplete (e:egret.Event):void
        {   
            this.bgmSoundChannel.stop();
            Main.instance.gotoScene(new EnterHouseScene());
        }
}