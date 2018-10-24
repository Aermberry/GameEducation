class PlayProGameScene extends eui.Component implements eui.UIComponent, IPlayProGameView, IPlayingScene {

    private playEasyGameTweenGroup:egret.tween.TweenGroup;
    private peopelImage:eui.Image;
    private backBtn:eui.Image;
  
    //开场过渡动画
    private easyGameLaunchedBoomMovieClip:egret.MovieClip;
    private easyGameLaunchedBoomFactory:egret.MovieClipDataFactory;
    
    //答对时星星特效
    private starExplosionMovieClip:egret.MovieClip;
    private starExplosionFactory:egret.MovieClipDataFactory;
    
    //答对或答错提示下拉框
    private dropDownBoxGroup:eui.Group;
    private dropDownBoxMovieClip:egret.MovieClip;
    private dropDownBoxFactory:egret.MovieClipDataFactory;
    
    private cannonImage: eui.Image;

    private peopleTouchGroup:eui.Group;

    private goodJobTweenGroup:egret.tween.TweenGroup;
     
    //城堡
    private castle: Castle;

    //城堡上的牌子
    private leftSignGroup: eui.Group;
    private leftSignImage: eui.Image;
    private leftSignLabel: eui.Label;

    private middleSignGroup: eui.Group;
    private middleSignImage: eui.Image;
    private middleSignLabel: eui.Label;

    private rightSignGroup: eui.Group;
    private rightSignImage: eui.Image;
    private rightSignLabel: eui.Label;

    //本轮游戏血条
    private bloodStripImage:eui.Image;

    private presenter = new PlayProGamePresenter();

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
       this.initSigns();
       this.presenter.view = this;
       this.presenter.playGame();
    }

    private async playShootMovieClip(boomIndex: number): Promise<void>
    {
        this.cannonImage.visible = false;
        this.easyGameLaunchedBoomFactory = new egret.MovieClipDataFactory( RES.getRes(`launched_boom_${boomIndex}_json`), RES.getRes(`launched_boom_${boomIndex}_png`));
        this.easyGameLaunchedBoomMovieClip = new egret.MovieClip(this.easyGameLaunchedBoomFactory.generateMovieClipData('launched_boom'));
        this.easyGameLaunchedBoomMovieClip.x = 140;
        this.easyGameLaunchedBoomMovieClip.y = 280;
        this.addChild(this.easyGameLaunchedBoomMovieClip);
        await this.easyGameLaunchedBoomMovieClip.playAsync();
        this.removeChild(this.easyGameLaunchedBoomMovieClip);
        this.cannonImage.visible = true;
    }

    private async playStarMovieClip(boomIndex: number): Promise<void>
    {
        this.starExplosionFactory = new egret.MovieClipDataFactory( RES.getRes('star_explosion_json'), RES.getRes('star_explosion_png'));
        this.starExplosionMovieClip = new egret.MovieClip(this.starExplosionFactory.generateMovieClipData('star_explosion'));
        switch (boomIndex) {
            case 0:
            this.starExplosionMovieClip.x = this.leftSignLabel.x + this.leftSignLabel.width / 2;
            this.starExplosionMovieClip.y = this.leftSignLabel.y + this.leftSignLabel.height / 2;
            break;

            case 1:
            this.starExplosionMovieClip.x = this.middleSignLabel.x + this.middleSignLabel.width / 2;
            this.starExplosionMovieClip.y = this.middleSignLabel.y + this.middleSignLabel.height / 2;
            break;

            default:
            this.starExplosionMovieClip.x = this.rightSignLabel.x + this.rightSignLabel.width / 2;
            this.starExplosionMovieClip.y = this.rightSignLabel.y + this.rightSignLabel.height / 2;
            break;
        }
        this.starExplosionMovieClip.x -= 495;
        this.starExplosionMovieClip.y -= 363;
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

    private initSigns(): void
    {
        this.leftSignImage.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onLeftSignMouseOver, this);
        this.leftSignImage.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onLeftSignMouseOut, this);
        this.leftSignImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLeftSignClick, this);
        this.leftSignLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLeftSignClick, this);

        this.middleSignImage.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onMiddleSignMouseOver, this);
        this.middleSignImage.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onMiddleSignMouseOut, this);
        this.middleSignImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMiddleSignClick, this);
        this.middleSignLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMiddleSignClick, this);

        this.rightSignImage.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onRightSignMouseOver, this);
        this.rightSignImage.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onRightSignMouseOut, this);
        this.rightSignImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRightSignClick, this);
        this.rightSignLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRightSignClick, this);
    }

    private onLeftSignMouseOver(): void
    {
        this.leftSignImage.source = 'left_sign_selected_png';
        (RES.getRes('sound_effect_kacha_mp3') as egret.Sound).play(0, 1);
    }
    
    private onLeftSignMouseOut(): void
    {
        this.leftSignImage.source = 'left_sign_normal_png'
    }

    private onLeftSignClick(): void
    {
        this.presenter.onBombSelected(this.leftSignLabel.text, 0);
    }

    private onMiddleSignMouseOver(): void
    {
        this.middleSignImage.source = 'middle_sign_selected_png';
        (RES.getRes('sound_effect_kacha_mp3') as egret.Sound).play(0, 1);
    }

    private onMiddleSignMouseOut(): void
    {
        this.middleSignImage.source = 'middle_sign_normal_png'
    }

    private onMiddleSignClick(): void
    {
        this.presenter.onBombSelected(this.middleSignLabel.text, 1);
    }

    private onRightSignMouseOver(): void
    {
        this.rightSignImage.source = 'right_sign_selected_png';
        (RES.getRes('sound_effect_kacha_mp3') as egret.Sound).play(0, 1);
    }

    private onRightSignMouseOut(): void
    {
        this.rightSignImage.source = 'right_sign_normal_png'
    }

    private onRightSignClick(): void
    {
        this.presenter.onBombSelected(this.rightSignLabel.text, 2);
    }

    /** 城堡血量>0, 返回true, 否则返回false */
    public get isCastleGood(): boolean
    {
        return this.castle.isGood;
    }

    /** 向城堡开炮 */
    public async shoot(bombIndex: number): Promise<void>
    {
        (RES.getRes('pum_mp3') as egret.Sound).play(0, 1);
        await this.playShootMovieClip(bombIndex);
        (RES.getRes('pum_mp3') as egret.Sound).play(0, 1);
        await lzlib.ThreadUtility.sleep(200);
        (RES.getRes('pum_mp3') as egret.Sound).play(0, 1);
        await lzlib.ThreadUtility.sleep(200);
        (RES.getRes('pum_mp3') as egret.Sound).play(0, 1);
        await this.playStarMovieClip(bombIndex);
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
    public set castleWords(value: string[])
    {
        this.leftSignLabel.text = value[0];
        this.middleSignLabel.text = value[1];
        this.rightSignLabel.text = value[2];
    }

    /** 炮弹上的字母列表 */
    public set bombChars(value: string[])
    {
    }

    /** 播放游戏通关动画 */
    public playGameCompleteAnimation(): void
    {
        this.addChild(new ResultScene(this));
    }

    public enableAllBombs(): void
    {
        this.leftSignImage.touchEnabled = true;
        this.leftSignLabel.touchEnabled = true;
        this.middleSignImage.touchEnabled = true;
        this.middleSignLabel.touchEnabled = true;
        this.rightSignImage.touchEnabled = true;
        this.rightSignLabel.touchEnabled = true;
    }

    public disableAllBombs(): void
    {
        this.leftSignImage.touchEnabled = false;
        this.leftSignLabel.touchEnabled = false;
        this.middleSignImage.touchEnabled = false;
        this.middleSignLabel.touchEnabled = false;
        this.rightSignImage.touchEnabled = false;
        this.rightSignLabel.touchEnabled = false;
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
