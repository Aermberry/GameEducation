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
    private  firstSelectImage:eui.Image;
    private  secondSelectImage:eui.Image;
    private  thirdSelectImage:eui.Image;
    private  firstSelectText:eui.Label;
    private  secondSelectText:eui.Label;
    private  thirdSelectText:eui.Label;
    

    private peopleTouchGroup:eui.Group;

    private goodJobTweenGroup:egret.tween.TweenGroup;
     
    //本轮游戏血条
    private bloodStripImage:eui.Image;
    //初始化答对次数
    private numOfCorrectAnswers = 0;

    private allWords = new WordRepository().getAll(); //词库中所有单词
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

       //测试动画代码
      //    this.testBoomMovieClip();
      //    this.testStarMovieClip();
      //    this.testDropDownBoxMovieClip();
      //    this.goodJobTweenGroup.play(-1);
       
       
       this.firstSelectImage.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.firstSelectImage.source='boom_png', this);
       this.firstSelectImage.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.firstSelectImage.source='hover_boom_png', this);
       //    this.firstSelectImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this. ,this);


       this.secondSelectImage.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.secondSelectImage.source='boom_png', this);
       this.secondSelectImage.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.secondSelectImage.source='hover_boom_png', this);
       //    this.firstSelectImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this. ,this);
       
       


       this.thirdSelectImage.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.thirdSelectImage.source='boom_png', this);
       this.thirdSelectImage.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.thirdSelectImage.source='hover_boom_png', this);
       //    this.firstSelectImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this. ,this);       
        
       this.resetAnswerWords();
       this.initCanvasText();
    }
    
    
    private resetAnswerWords() {
        this.desktopWords = [];

        let candidate = this.getRandomWord();
        if(this.desktopWords.indexOf(candidate)<0){
            this.desktopWords.push(candidate);
               
        }
        console.log(this.desktopWords[this.numOfCorrectAnswers]);
        this.extractLetters(this.desktopWords[this.numOfCorrectAnswers]);              
    }
    
    private resetFalseLetter() {
        
    }

    private initCanvasText(){
        //修改canvas上字体
        let correctLetter = this.wordsArray.splice(this.letterIndex, 1, '_' );
        this.optionAnswerLetters.push(correctLetter.join(''));
        console.log(this.optionAnswerLetters);
        this.canvasText.text = this.wordsArray.join('');
    }

    //处理单词字符串拆分成数组,抽取其中一个字母，返回字母位置letterIndex
    private extractLetters(words:string) {
        this.wordsArray = words.split('');
        this.letterIndex = Math.randomMinMax(0, this.wordsArray.length-1);
        return this.letterIndex;
        
    }
    

    
    private getRandomWord() {
       let randomIndex = Math.randomMinMax(0, this.allWords.length -1);
       return this.allWords[randomIndex];
    }

    //动画测试
    private testDropDownBoxMovieClip() {
       this.dropDownBoxFactory = new egret.MovieClipDataFactory( RES.getRes('right_drop_down_box_json'), RES.getRes('right_drop_down_box_png'));
       this.dropDownBoxMovieClip = new egret.MovieClip(this.dropDownBoxFactory.generateMovieClipData('right_drop_down_box'));
       this.dropDownBoxGroup.addChild(this.dropDownBoxMovieClip);
       this.dropDownBoxMovieClip.play(-1); 
    }

    private testBoomMovieClip() {
      this.easyGameLaunchedBoomFactory = new egret.MovieClipDataFactory( RES.getRes('first_launched_boom_json'), RES.getRes('first_launched_boom_png'));
      this.easyGameLaunchedBoomMovieClip = new egret.MovieClip(this.easyGameLaunchedBoomFactory.generateMovieClipData('first_launched_boom'));
      this.easyGameLaunchedBoomGroup.addChild(this.easyGameLaunchedBoomMovieClip);
      this.easyGameLaunchedBoomMovieClip.play(-1);

    }

    private testStarMovieClip() {
      this.starExplosionFactory = new egret.MovieClipDataFactory( RES.getRes('star_explosion_json'), RES.getRes('star_explosion_png'));
      this.starExplosionMovieClip = new egret.MovieClip(this.starExplosionFactory.generateMovieClipData('star_explosion'));
      this.starExplosionGroup.addChild(this.starExplosionMovieClip);
      this.starExplosionMovieClip.play(-1);

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
