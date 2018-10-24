class StartScene extends eui.Component implements eui.UIComponent{

    private startGameBtn:eui.Image;
    private sightWordParkImage:eui.Image;
    private rainbowImage:eui.Image;
    private mcFactory:egret.MovieClipDataFactory;
    private startSceneBgmSound:egret.SoundChannel;

	private startMask: eui.Rect;
    private startButton: eui.Button;
    private loadingAnim:egret.tween.TweenGroup


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
		mouse.setButtonMode(this.startGameBtn,true);
		mouse.setButtonMode(this.startButton,true);
		this.startGameBtn.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onStartGameBtnMouseOver, this);
		this.startGameBtn.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onStartGameBtnMouseOut, this);
		this.startGameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextScene, this);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStartButtonClick,this);
	}

	private async onStartButtonClick(): Promise<void> {
		await this.loadingAnim.play(0);
		this.startMask.visible = false;
		this.startButton.visible = false;
		await this.loadMusic();
	}

	private loadMusic():void {
		this.startSceneBgmSound = (RES.getRes('start_scene_bgm_mp3') as egret.Sound).play(0, -1);

		this.mcFactory = new egret.MovieClipDataFactory( RES.getRes('movie_clip_json'), RES.getRes("movie_clip_png") );
		egret.Tween.get(this.rainbowImage)
			.to({x: 0}, 500)
			.call(() => this.sightWordParkImage.visible = true, this)
			.wait(500)
			.call(this.showChooseAGameToPlay, this);
	}

	private showChooseAGameToPlay(): void
	{
		var mc1:egret.MovieClip = new egret.MovieClip( this.mcFactory.generateMovieClipData( "choose a game to play" ) );
		mc1.x = 385;
		mc1.y = 450;
		this.addChild( mc1 );
		mc1.play(-1);
	}
	
	private onStartGameBtnMouseOver(e: mouse.MouseEvent): void
	{
		this.startGameBtn.source = "start_game_hover_png";
	}

	private onStartGameBtnMouseOut(e: mouse.MouseEvent): void
	{
		this.startGameBtn.source = "start_game_normal_png";
	}

	private nextScene(e: egret.TouchEvent): void
	{
		this.startSceneBgmSound.stop();
		Main.instance.gotoScene(new StudentSelectScene());
	}
}