class StartScene extends eui.Component implements eui.UIComponent{

    private startGameBtn:eui.Image;
    private sightWordParkImage:eui.Image;
    private rainbowImage:eui.Image;
    private mcFactory:egret.MovieClipDataFactory;
    private startSceneBgmSound:egret.SoundChannel;
	private startButton2: eui.Image;
	private startMask: eui.Rect;

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
		mouse.setButtonMode(this.startButton2, true);
		this.startGameBtn.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onStartGameBtnMouseOver, this);
		this.startGameBtn.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onStartGameBtnMouseOut, this);
		this.startButton2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButton2Click, this);
		this.startGameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextScene, this);
			

	}

	private onStartButton2Click(): void
	{
		this.startSceneBgmSound = (RES.getRes('start_scene_bgm_mp3') as egret.Sound).play(0, -1);

		this.mcFactory = new egret.MovieClipDataFactory( RES.getRes('movie_clip_json'), RES.getRes("movie_clip_png") );
		egret.Tween.get(this.rainbowImage)
			.to({x: 0}, 500)
			.call(() => this.sightWordParkImage.visible = true, this)
			.wait(500)
			.call(this.showChooseAGameToPlay, this);
		this.startMask.visible = false;
		this.startButton2.visible = false;
		
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
		Main.instance.gotoScene(new SelectDifficultScene());
	}
}