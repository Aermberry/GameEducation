class PlayEasyGameScene extends eui.Component implements eui.UIComponent, IPlayEasyGameView {

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
    
    private cannonImage: eui.Image;
    //三个炮弹
    private bomb1: TargetButton;
    private bomb2: TargetButton;
    private bomb3: TargetButton;
    private bombs: TargetButton[] = [];

    private peopleTouchGroup:eui.Group;

    private goodJobTweenGroup:egret.tween.TweenGroup;
     
    //城堡
    private castle: EasyCastle;

    //本轮游戏血条
    private bloodStripImage:eui.Image;

    private presenter = new PlayEasyGamePresenter();

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
       this.initBombs();
       this.presenter.view = this;
       this.presenter.playGame();
    }

    private async playShootMovieClip(): Promise<void>
    {
        this.cannonImage.visible = false;
        this.easyGameLaunchedBoomFactory = new egret.MovieClipDataFactory( RES.getRes('first_launched_boom_json'), RES.getRes('first_launched_boom_png'));
        this.easyGameLaunchedBoomMovieClip = new egret.MovieClip(this.easyGameLaunchedBoomFactory.generateMovieClipData('first_launched_boom'));
        this.easyGameLaunchedBoomGroup.addChild(this.easyGameLaunchedBoomMovieClip);
        await this.easyGameLaunchedBoomMovieClip.playAsync();
        this.easyGameLaunchedBoomGroup.removeChild(this.easyGameLaunchedBoomMovieClip);
        this.cannonImage.visible = true;
    }

    private async playStarMovieClip(): Promise<void>
    {
        this.starExplosionFactory = new egret.MovieClipDataFactory( RES.getRes('star_explosion_json'), RES.getRes('star_explosion_png'));
        this.starExplosionMovieClip = new egret.MovieClip(this.starExplosionFactory.generateMovieClipData('star_explosion'));
        this.starExplosionGroup.addChild(this.starExplosionMovieClip);
        await this.starExplosionMovieClip.playAsync();
        this.starExplosionGroup.removeChild(this.starExplosionMovieClip);
    }
    //动画测试代码这里为止
    
    
    private initTweenGroup(): void
    {
       this.playEasyGameTweenGroup.play(0);
    }

    private initPeopleMouseEvent(): void
    {
       this.peopleTouchGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.peopelImage.source='people_normal_png', this);
       this.peopleTouchGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.peopelImage.source='people_hover_png', this);       
    }

    private initBackTouchEvent(): void
    {
       this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new StartScene()), this); 
    }

    private initBombs(): void
    {
        this.bombs = [this.bomb1, this.bomb2, this.bomb3];
        for (let bomb of this.bombs) {
            bomb.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBombClick, this);
        }
    }

    private onBombClick(e: egret.TouchEvent): void
    {
        this.presenter.onBombSelected((e.target as TargetButton).label);
    }

    /** 城堡血量>0, 返回true, 否则返回false */
    public get isCastleGood(): boolean
    {
        return this.castle.isGood;
    }

    /** 向城堡开炮 */
    public async shoot(): Promise<void>
    {
        await this.playShootMovieClip();
        await this.playStarMovieClip();
    }

    /** 播放用户选择成功字母的动画 */
    public playCorrectAnimation(): void
    {
        this.dropDownBoxFactory = new egret.MovieClipDataFactory( RES.getRes('right_drop_down_box_json'), RES.getRes('right_drop_down_box_png'));
        this.dropDownBoxMovieClip = new egret.MovieClip(this.dropDownBoxFactory.generateMovieClipData('right_drop_down_box'));
        this.dropDownBoxGroup.addChild(this.dropDownBoxMovieClip);
        this.dropDownBoxMovieClip.play(0); 
    }
    /** 播放用户选择错误字母的动画 */
    public playWrongAnimation(): void
    {
        this.dropDownBoxFactory = new egret.MovieClipDataFactory( RES.getRes('false_drop_down_box_json'), RES.getRes('false_drop_down_box_png'));
        this.dropDownBoxMovieClip = new egret.MovieClip(this.dropDownBoxFactory.generateMovieClipData('false_drop_down_box'));
        this.dropDownBoxGroup.addChild(this.dropDownBoxMovieClip);
        this.dropDownBoxMovieClip.play(0); 
    }

    /** 城堡上的单词 */
    public set castleWord(value: string)
    {
        this.castle.label = value;
    }

    /** 炮弹上的字母列表 */
    public set bombChars(value: string[])
    {
        for (let index = 0; index < value.length; index++) {
            this.bombs[index].label = value[index];
        }
    }

    /** 播放游戏通关动画 */
    public playGameCompleteAnimation(): void
    {

    }

    public enableAllBombs(): void
    {
        for (let bomb of this.bombs) {
            bomb.enabled = true;
        }
    }

    public disableAllBombs(): void
    {
        for (let bomb of this.bombs) {
            bomb.enabled = false;
        }
    }

    /** 城堡被炮弹击中，显示击中效果，城堡血减一 */
    public markCastleShot(): void
    {
        this.castle.markShot();
        this.bloodStripImage.source = `blood_strip_${this.castle.blood}_png`;
    }
}
