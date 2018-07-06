class StartScene extends eui.Component implements eui.UIComponent{

        private  batTweenGroup:egret.tween.TweenGroup;

        public constructor(){
            super();
            //Main.instance.gotoScene(new MoonRiseScene());    
        }
        protected childrenCreated():void
        {
            TweenGroupUtility.playAnimation(this.batTweenGroup);
        }

}
