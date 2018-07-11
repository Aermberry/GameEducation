class MoonRiseScene extends eui.Component implements eui.UIComponent{
    
    private moonRiseGreenGroup:egret.tween.TweenGroup
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
            this.moonRiseGreenGroup.addEventListener(egret.Event.COMPLETE,this.moonRiseGreenGroupComplete,this);
            this.moonRiseGreenGroup.play(0);
            
        }
        
        private moonRiseGreenGroupComplete (e:egret.Event):void
        {
            Main.instance.gotoScene(new EnterHouseScene());
        }
}