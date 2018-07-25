class SecondLevelStartScene extends eui.Component implements eui.UIComponent{
        private exitGroup:eui.Group;
        private exitLabel:eui.Label;
        
        private StopSoundToNextSceneGroup:eui.Group;
        private soundGroup:eui.Group;
        private soundImg:eui.Image;
        private currentSoundChannel:egret.SoundChannel;

        private sportHallImg:eui.Image;
        private bgImg:eui.Image;
        private soundBtn:eui.Image;
        private squareFrame:eui.Image;
        private closeImg:eui.Image;
        private buleProgressBar: eui.Image;
        private firstTitleLabel:eui.Label;
        private secondTitleLabel:eui.Label;
    
        private playSoundFirstTweenGroup:egret.tween.TweenGroup;
         
        public constructor(){
            super();   
        }
        
        protected partAdded(partName:string,instance:any):void
        {
            super.partAdded(partName, instance);
        }
        

        protected childrenCreated():void
        {   
            super.childrenCreated();
            mouse.enable(this.stage);
            mouse.setButtonMode(this.exitGroup, true);
            mouse.setButtonMode(this.soundGroup, true);
            this.currentSoundChannel = (RES.getRes('second_level_mp3') as egret.Sound).play(0,1);              
            this.initExitGroup();
            this.initSoudGroup();
            
        }

        private initExitGroup() {
            this.exitGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>window.close(), this);
            this.exitGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.exitLabel.textColor = 0, this);
            this.exitGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.exitLabel.textColor = 16711680, this);
        }

        private initSoudGroup() {
            this.soundGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playSoundAndGoNextScene, this);
            this.soundGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.soundImg.source='sound_png', this);
            this.soundGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.soundImg.source='sound_hover_png', this);
        }

        
        private async playSoundAndGoNextScene():Promise<void> {
            this.stopCurrentSoundChannel();
            this.soundGroup.visible = false;
            this.currentSoundChannel = (RES.getRes('second_level_description_mp3') as egret.Sound).play(0,1);
            this.bgImg.alpha = 0.5;
            this.soundImg.alpha = 0.5;
            this.sportHallImg.alpha = 0.5;
            this.soundBtn.alpha = 0.5;
            this.firstTitleLabel.alpha = 0.5;
            this.secondTitleLabel.alpha = 0.5;
            
            this.initStopSoundToNextSceneGroup();

            //進度條動畫
            this.buleProgressBar.alpha =1;
            for (let second = 0; second < 144; second++) {
                this.playSoundFirstTweenGroup.play(-1);
                this.buleProgressBar.width = second / 144 * 575;
                await ThreadUtility.sleep(1000);
            }
            
            this.StopSoundToNextScene();            
        }
       
        private stopCurrentSoundChannel():void{
            if(this.currentSoundChannel != null){
               this.currentSoundChannel.stop();
            } 
        }
        
        //初始化播放音頻右上方按鈕
        private initStopSoundToNextSceneGroup() {
            this.StopSoundToNextSceneGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.StopSoundToNextScene, this);
        }
        private StopSoundToNextScene() {
            this.stopCurrentSoundChannel();
			Main.instance.gotoScene(new SecondLevelSelectScene());
        }
        
}
