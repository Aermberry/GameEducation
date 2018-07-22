class PlayEasyGameScene extends eui.Component implements eui.UIComponent, IPlayEasyGameView, IPlayingScene {

    private playEasyGameTweenGroup:egret.tween.TweenGroup;
    private peopelImage:eui.Image;
    private backBtn:eui.Image;
  
    //开场过渡动画
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
    private castle: Castle;
	private castleWordLabel: eui.Label;

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
        this.easyGameLaunchedBoomFactory = new egret.MovieClipDataFactory( RES.getRes('launched_boom_0_json'), RES.getRes('launched_boom_0_png'));
        this.easyGameLaunchedBoomMovieClip = new egret.MovieClip(this.easyGameLaunchedBoomFactory.generateMovieClipData('launched_boom'));
        this.easyGameLaunchedBoomMovieClip.x = 140;
        this.easyGameLaunchedBoomMovieClip.y = 280;
        this.addChild(this.easyGameLaunchedBoomMovieClip);
        await this.easyGameLaunchedBoomMovieClip.playAsync();
        this.removeChild(this.easyGameLaunchedBoomMovieClip);
        this.cannonImage.visible = true;
    }

    private async playStarMovieClip(): Promise<void>
    {
        this.starExplosionFactory = new egret.MovieClipDataFactory( RES.getRes('star_explosion_json'), RES.getRes('star_explosion_png'));
        this.starExplosionMovieClip = new egret.MovieClip(this.starExplosionFactory.generateMovieClipData('star_explosion'));
        this.starExplosionMovieClip.x = 1029;
        this.starExplosionMovieClip.y = 223;
        this.addChild(this.starExplosionMovieClip);
        await this.starExplosionMovieClip.playAsync();
        this.removeChild(this.starExplosionMovieClip);
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
       this.peopleTouchGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onSpeakerClick, this.presenter);     
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
        (RES.getRes('pum_mp3') as egret.Sound).play(0, 1);
        await this.playShootMovieClip();
        (RES.getRes('pum_mp3') as egret.Sound).play(0, 1);
        await lzlib.ThreadUtility.sleep(200);
        (RES.getRes('pum_mp3') as egret.Sound).play(0, 1);
        await lzlib.ThreadUtility.sleep(200);
        (RES.getRes('pum_mp3') as egret.Sound).play(0, 1);
        await this.playStarMovieClip();
    }

    /** 播放用户选择成功字母的动画 */
    public playCorrectAnimation(): void
    {
        this.dropDownBoxFactory = new egret.MovieClipDataFactory( RES.getRes('right_drop_down_box_json'), RES.getRes('right_drop_down_box_png'));
        this.dropDownBoxMovieClip = new egret.MovieClip(this.dropDownBoxFactory.generateMovieClipData('right_drop_down_box'));
        this.dropDownBoxGroup.addChild(this.dropDownBoxMovieClip);
        this.dropDownBoxMovieClip.play(0); 
        this.goodJobTweenGroup.play(0);
    }
    /** 播放用户选择错误字母的动画 */
    public playWrongAnimation(): void
    {
        this.dropDownBoxFactory = new egret.MovieClipDataFactory( RES.getRes('false_drop_down_box_json'), RES.getRes('false_drop_down_box_png'));
        this.dropDownBoxMovieClip = new egret.MovieClip(this.dropDownBoxFactory.generateMovieClipData('false_drop_down_box'));
        this.dropDownBoxGroup.addChild(this.dropDownBoxMovieClip);
        this.dropDownBoxMovieClip.play(0); 
        (RES.getRes('diao_mp3') as egret.Sound).play(0, 1);
    }

    /** 城堡上的单词 */
    public set castleWord(value: string)
    {
        this.castleWordLabel.text = value;
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
        this.addChild(new ResultScene(this));
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

    public set castleBlood(value: number)
    {
        this.castle.blood = value;
    }

    /** 播放城堡单词的声音 */
    public playCastleWord(word: string): void
    {
        let sound = RES.getRes(word + '_mp3');
        if (sound != null) {
            (sound as egret.Sound).play(0, 1);
        }
    }

    public startGame(): void
    {
        this.presenter.playGame();
    }
}
