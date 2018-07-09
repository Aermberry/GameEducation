class StartScene extends eui.Component implements eui.UIComponent{

        private  batTweenGroup:egret.tween.TweenGroup;

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
            this.batTweenGroup.addEventListener(egret.Event.COMPLETE,this.onBatTweenGroupComplete,this);
            // TweenGroupUtility.playAnimation(this.batTweenGroup);
            this.batTweenGroup.play(0);
        }
        
        private onBatTweenGroupComplete (e:egret.Event):void
        {
            Main.instance.gotoScene(new MoonRiseScene());
            
        }
}
