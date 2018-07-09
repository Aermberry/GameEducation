class EnterHouseScene extends eui.Component implements eui.UIComponent{

    private InsideHouseScene:egret.tween.TweenGroup
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
            this.InsideHouseScene.addEventListener(egret.Event.COMPLETE,this.InsideHouseSceneComplete,this);
            
            
        }
        
        private InsideHouseSceneComplete (e:egret.Event):void
        {
            Main.instance.gotoScene(new InsideHouseScene());
        }
}