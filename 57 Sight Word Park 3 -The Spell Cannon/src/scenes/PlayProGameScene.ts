class PlayProGameScene extends eui.Component implements  eui.UIComponent {
    private playProGameTweenGroup:egret.tween.TweenGroup;
    private peopelImage:eui.Image;
	private peopleTouchGroup:eui.Group;
    private backBtn:eui.Image;
    private goodJobTweenGroup:egret.tween.TweenItem;

    private proGameLaunchedBoomGroup:eui.Group;
    private firstLuanchedBoomMovieClip:egret.MovieClip;
    private firstLuanchedBoomFactory:egret.MovieClipDataFactory;
	private secondLuanchedBoomMovieClip:egret.MovieClip;
    private secondLuanchedBoomFactory:egret.MovieClipDataFactory;
	private thridLuanchedBoomMovieClip:egret.MovieClip;
    private thirdLuanchedBoomFactory:egret.MovieClipDataFactory;
    
    //炮弹击中时星星特效
    private rightStarExprosionGroup:eui.Group;
    private starExprosionMovieClip:egret.MovieClip;
    private starExprosionFactory:egret.MovieClipDataFactory;

	//答对或答错提示下拉框
    private dropDownBoxGroup:eui.Group;
    private dropDownBoxMovieClip:egret.MovieClip;
    private dropDownBoxFactory:egret.MovieClipDataFactory;

	public constructor() {
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
		mouse.setButtonMode(this.peopleTouchGroup, true);
        mouse.setButtonMode(this.peopleTouchGroup, true);
		this.initTweenGroup();
		this.initBackTouchEvent();
		this.initPeopleMouseEvent();
		this.starExprosionFactory = new egret.MovieClipDataFactory( RES.getRes('star_explosion_json'), RES.getRes('star_explosion_png'));
        this.starExprosionMovieClip = new egret.MovieClip(this.firstLuanchedBoomFactory.generateMovieClipData('star_explosion'));
		this.startGame();
	}

    private startGame() {
		// this.playDropDownRigthtBoxMovieClip();
		// this.playFirstLaunchedMovieClip();
	}
    

	//三个不同的炮弹发射动画
    private async playFirstLaunchedMovieClip():Promise<void> {
      this.firstLuanchedBoomFactory = new egret.MovieClipDataFactory( RES.getRes('first_launched_boom_json'), RES.getRes('first_launched_boom_png'));
      this.firstLuanchedBoomMovieClip = new egret.MovieClip(this.firstLuanchedBoomFactory.generateMovieClipData('first_launched_boom'));
      this.proGameLaunchedBoomGroup.addChild(this.firstLuanchedBoomMovieClip);
      this.firstLuanchedBoomMovieClip.play(0);
	  await ThreadUtility.sleep(1000);
	  this.goodJobTweenGroup.play(0);
	  this.rightStarExprosionGroup.addChild(this.starExprosionMovieClip);
      
    }
	private playSecondLaunchedMovieClip() {
      this.firstLuanchedBoomFactory = new egret.MovieClipDataFactory( RES.getRes('second_launched_boom_json'), RES.getRes('second_launched_boom_png'));
      this.firstLuanchedBoomMovieClip = new egret.MovieClip(this.firstLuanchedBoomFactory.generateMovieClipData('second_launched_boom'));
      this.proGameLaunchedBoomGroup.addChild(this.firstLuanchedBoomMovieClip);
      this.firstLuanchedBoomMovieClip.play(0);
    }
	private playThirdLaunchedMovieClip() {
      this.firstLuanchedBoomFactory = new egret.MovieClipDataFactory( RES.getRes('thrid_launched_boom_json'), RES.getRes('third_launched_boom_png'));
      this.firstLuanchedBoomMovieClip = new egret.MovieClip(this.firstLuanchedBoomFactory.generateMovieClipData('third_launched_boom'));
      this.proGameLaunchedBoomGroup.addChild(this.firstLuanchedBoomMovieClip);
      this.firstLuanchedBoomMovieClip.play(0);
    }
    

	//两个不同的下拉框
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
    

	//开场动画
	private initTweenGroup():void{
       this.playProGameTweenGroup.play(0);
    }

    private initPeopleMouseEvent() {
       this.peopleTouchGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.peopelImage.source='people_normal_png', this);
       this.peopleTouchGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.peopelImage.source='people_hover_png', this);       
    }

    private initBackTouchEvent() {
       this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new StartScene()), this); 
    }
	
}