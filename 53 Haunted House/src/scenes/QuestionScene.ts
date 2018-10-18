module HauntedHouse{
    export class QuestionScene extends eui.Component implements eui.UIComponent{
        private textTweenGroup:egret.tween.TweenGroup
        private QusetionSceneButton:eui.Image
        private questionFirstSoundChanel:egret.SoundChannel
        private questionSecondSoundChanel:egret.SoundChannel
        private questionThirdSoundChanel:egret.SoundChannel
        private questionForthSoundChanel:egret.SoundChannel

        private startMask: eui.Rect;
        private startButton: eui.Image;
        private static instance: QuestionScene;
        
        public constructor(){
            super();
            QuestionScene.instance = this;
        }

        protected childrenCreated():void{   
            super.childrenCreated(); 
            // this.textTweenGroup.play(0);
            // this.questionFirstSoundChanel = RES.getRes('question_first_bgm_mp3').play(0,1);
            this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStartButtonClick,this);
        }

        private  onStartButtonClick(): void {
            this.startMask.visible = false;
            this.startButton.visible = false;
            init();
            //  this.onStarquestion();
        }

        public onStartQuestion(): void {
            this.textTweenGroup.play(0);
            this.questionFirstSoundChanel = RES.getRes('question_first_bgm_mp3').play(0,1);
            this.questionFirstSoundChanel.addEventListener(egret.Event.SOUND_COMPLETE, this.onquestionFirstSoundChanel, this);
        }

        private onquestionFirstSoundChanel():void {
            this.questionSecondSoundChanel = RES.getRes('question_second_bgm_mp3').play(0,1);
            this.questionSecondSoundChanel.addEventListener(egret.Event.SOUND_COMPLETE, this.onquestionSecondSoundChanel, this);
        }

        private onquestionSecondSoundChanel():void {
            this.questionThirdSoundChanel = RES.getRes('question_third_bgm_mp3').play(0,1);
            this.questionThirdSoundChanel.addEventListener(egret.Event.SOUND_COMPLETE, this.onquestionThirdSoundChanel, this);
        }

        private onquestionThirdSoundChanel():void {
            this.questionForthSoundChanel = RES.getRes('question_forth_bgm_mp3').play(0,1);
            this.questionForthSoundChanel.addEventListener(egret.Event.SOUND_COMPLETE, this.nextScene, this);
        }

        private nextScene():void {
            mouse.setButtonMode(this.QusetionSceneButton, true);
            this.QusetionSceneButton.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>Main.instance.gotoScene(new SeeScene), this);
        }  
    } 
}  