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
            this.startScene();
        }

        private async startScene(): Promise<void>
        {
            TweenGroupUtility.playAnimation(this.batTweenGroup);
            await ThreadUtility.sleep(2000);
            this.batTweenGroup.stop();
            Main.instance.gotoScene(new MoonRiseScene());
        }
}
