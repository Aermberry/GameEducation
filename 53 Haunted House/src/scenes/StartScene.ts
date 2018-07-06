class StartScene extends eui.Component implements eui.UIComponent{

        private  batTweenGroup:egret.tween.TweenGroup;

        public constructor(){
            super();
            //Main.instance.gotoScene(new MoonRiseScene());    
        }
        protected childrenCreated():void
        {
            this.batTweenGroup.addEventListener('complete', this.batTweenGroupLoopComplete, this);
            this.batTweenGroup.play(0);
        }

        private batTweenGroupLoopComplete(): void
        {
            console.log('bat complete');
            this.batTweenGroup.addEventListener('complete', this.batTweenGroupLoopComplete, this);
            this.batTweenGroup.play(0);
        }

}
