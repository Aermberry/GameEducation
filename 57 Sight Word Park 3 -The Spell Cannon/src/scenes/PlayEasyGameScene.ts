class PlayEasyGameScene extends eui.Component implements eui.UIComponent{

    private playEasyGameTweenGroup:egret.tween.TweenGroup;
    private peopelImage:eui.Image;
    private backBtn:eui.Image;
  
    //开场过渡动画
    private easyGameLaunchedBoomGroup:eui.Group;
    private easyGameLaunchedBoomMovieClip:egret.MovieClip;
    private easyGameLaunchedBoomFactory:egret.MovieClipDataFactory;
    
    //答对时星星特效
    private starExplosionGroup:eui.Group;
    private starExplosionMovieClip:egret.MovieClip;
    private starExplosionFactory:egret.MovieClipDataFactory;
    
    //答对或答错提示下拉框
    private dropDownBoxGroup:eui.Group;
    private dropDownBoxMovieClip:egret.MovieClip;
    private dropDownBoxFactory:egret.MovieClipDataFactory;
    
    private canvasText:eui.Label;
    //三个选项
    private targets: TargetButton[] = [];
    

    private peopleTouchGroup:eui.Group;

    private goodJobTweenGroup:egret.tween.TweenGroup;
     
    //本轮游戏血条
    private bloodStripImage:eui.Image;
    //初始化答对次数
    private numOfCorrectAnswers = 0;

    private allWords = new WordRepository().getAll(); //词库中所有单词
    private allLetters = new LettersRepository().getAll(); //字母库里所有的字母
    private desktopWords = []; //从词库选到画布上二十个单词，用于解决画布上出现重复单词的问题
    private optionAnswerLetters = []; //从选项单词中选取的某个字母到选项中，用来解决选到选项上的字母重复的问题,用来储存选项字母；
    private showWord = '';
    private wordsArray = [];
    private letterIndex = 0;   

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
       mouse.enable(this.stage);
       mouse.setButtonMode(this.backBtn, true);
       mouse.setButtonMode(this.peopelImage, true);

       this.initTweenGroup();
       this.initPeopleMouseEvent();
       this.initBackTouchEvent();
       this.startGame();
    }
    
    //初始化按钮事件
    private initTargets()
	{
		for(let index = 0; index < this.numChildren; index++) {
			let child = this.getChildAt(index);
			if (child instanceof TargetButton) {
				this.targets.push(child as TargetButton)
			}
		} 

		for (let target of this.targets) {
			target.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTargetClick, this);
		}
	}

    private onTargetClick(e:egret.TouchEvent) {
        let target = e.target as TargetButton;
        let lettersList = this.desktopWords[this.numOfCorrectAnswers]
        if( lettersList[this.letterIndex] == target.label)
        {     
            console.log('答对进入下一关');
            this.startGame();
            console.log(this.numOfCorrectAnswers);
            return this.numOfCorrectAnswers++; 
            
        }
        else{
            console.log('请继续答题');
        }
    }

    private resetTarget() {
           this.targets[0].setLabel(this.optionAnswerLetters[0]);
           this.targets[1].setLabel(this.optionAnswerLetters[1]);
           this.targets[2].setLabel(this.optionAnswerLetters[2]);
           console.log("按钮数量" + this.targets.length);
    }
     

  
    //随机抽取两个字母加上之前获取单词的某位字母，作为选项
    private resetLetter() {
        for(let i=this.optionAnswerLetters.length ; i<3 ;i++){
            let letters = this.getrandomLetters();
            if(this.optionAnswerLetters.indexOf(letters) < 0){
                    this.optionAnswerLetters.push(letters);
             }
             console.log(this.optionAnswerLetters.length);
        }
        this.shuffleArray(this.optionAnswerLetters);
        console.log( "本次答题的三个选项的字母" + this.optionAnswerLetters);
    }
    //数组随机排序
        private shuffleArray(array) {
             for (let i = array.length - 1; i > 0; i--) {
                  let j = Math.floor(Math.random() * (i + 1));
                  let temp = array[i];
                  array[i] = array[j];
                  array[j] = temp;
            }  
            return array;
        }  


    //修改canvas上字体,取出正确选项的单词
    private initCanvasText(){
        this.optionAnswerLetters = [];
        let correctLetter = this.wordsArray.splice(this.letterIndex, 1, '_' );
        this.optionAnswerLetters.push(correctLetter.join(''));
        this.canvasText.text = this.wordsArray.join('');
        console.log( "本关画布显示缺少字母的单词为：" + this.wordsArray.join(''));
    }


    //从单词库中获取单词作为本关的答题单词
    private resetAnswerWords() {
    
        this.desktopWords = [];
        let candidate = this.getRandomWord();
        if(this.desktopWords.indexOf(candidate) < 0){
            this.desktopWords.push(candidate);
               
        }
        console.log( "共二十关，全程通关次数为：" + this.numOfCorrectAnswers);
        this.extractLetters(this.desktopWords[this.numOfCorrectAnswers]);             
    }


    //处理单词字符串拆分成数组,抽取其中一个字母，返回字母位置letterIndex
    private extractLetters( words: string) {
        
        this.wordsArray = words.split('');
        this.letterIndex = Math.randomMinMax(0, this.wordsArray.length-1);
        
        console.log( "单词中随机抽取的字母位置：" +  this.letterIndex );
        return this.letterIndex;
    }


    private getrandomLetters() {
       let randomIndex = Math.randomMinMax(0, this.allLetters.length -1);
       return this.allLetters[randomIndex];
    }  
    private getRandomWord() {
       let randomIndex = Math.randomMinMax(0, this.allWords.length -1);
       return this.allWords[randomIndex];
    }

    private startGame() {
       this.resetAnswerWords();
       this.initCanvasText();
       this.resetLetter();
       this.initTargets();
       this.resetTarget();
    }

    //动画测试
    private playDropDownRigthtBoxMovieClip() {
       this.dropDownBoxFactory = new egret.MovieClipDataFactory( RES.getRes('right_drop_down_box_json'), RES.getRes('right_drop_down_box_png'));
       this.dropDownBoxMovieClip = new egret.MovieClip(this.dropDownBoxFactory.generateMovieClipData('right_drop_down_box'));
       this.dropDownBoxGroup.addChild(this.dropDownBoxMovieClip);
       this.dropDownBoxMovieClip.play(0); 
    }

    private playDropDownFalseBoxMovieClip() {
       this.dropDownBoxFactory = new egret.MovieClipDataFactory( RES.getRes('false_drop_down_box_json'), RES.getRes('false_drop_down_box_png'));
       this.dropDownBoxMovieClip = new egret.MovieClip(this.dropDownBoxFactory.generateMovieClipData('false_drop_down_box'));
       this.dropDownBoxGroup.addChild(this.dropDownBoxMovieClip);
       this.dropDownBoxMovieClip.play(0); 
    }

    private playLaunchedMovieClip() {
      this.easyGameLaunchedBoomFactory = new egret.MovieClipDataFactory( RES.getRes('first_launched_boom_json'), RES.getRes('first_launched_boom_png'));
      this.easyGameLaunchedBoomMovieClip = new egret.MovieClip(this.easyGameLaunchedBoomFactory.generateMovieClipData('first_launched_boom'));
      this.easyGameLaunchedBoomGroup.addChild(this.easyGameLaunchedBoomMovieClip);
      this.easyGameLaunchedBoomMovieClip.play(0);

    }

    private playStarMovieClip() {
      this.starExplosionFactory = new egret.MovieClipDataFactory( RES.getRes('star_explosion_json'), RES.getRes('star_explosion_png'));
      this.starExplosionMovieClip = new egret.MovieClip(this.starExplosionFactory.generateMovieClipData('star_explosion'));
      this.starExplosionGroup.addChild(this.starExplosionMovieClip);
      this.starExplosionMovieClip.play(0);

    }
    //动画测试代码这里为止
    
    
    private initTweenGroup():void{
       this.playEasyGameTweenGroup.play(0);
    }

    private initPeopleMouseEvent() {
       this.peopleTouchGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.peopelImage.source='people_normal_png', this);
       this.peopleTouchGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.peopelImage.source='people_hover_png', this);       
    }

    private initBackTouchEvent() {
       this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new StartScene()), this); 
    }
}
