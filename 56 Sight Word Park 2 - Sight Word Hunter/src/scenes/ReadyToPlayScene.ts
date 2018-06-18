class ReadyToPlayScene extends eui.Component implements  eui.UIComponent {
	private backImage: eui.Image;
	private goLabel: eui.Label;
	private goImage: eui.Image;
	private mcFactory: egret.MovieClipDataFactory;
	private bgmSoundChannel: egret.SoundChannel;

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
		this.bgmSoundChannel = (RES.getRes('select_difficulty_scene_bgm_mp3') as egret.Sound).play();

		this.backImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackImageClick, this);

		this.goImage.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onGoImageMouseOver, this);
		this.goImage.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onGoImageMouseOut, this);
		this.goImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGoImageClick, this);
		this.goLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGoImageClick, this);

		this.mcFactory = new egret.MovieClipDataFactory( RES.getRes('game_demo_json'), RES.getRes("game_demo_png") );
		this.playGameDemoAnimation();
	}

	private onBackImageClick(e: egret.TouchEvent): void
	{
		this.bgmSoundChannel.stop();
		Main.instance.gotoScene(new StartScene());
	}
	
	private onGoImageMouseOver(e: egret.Event): void
	{
		(e.target as eui.Image).source = 'stars_separated_svg';
	}
	
	private onGoImageMouseOut(e: egret.Event): void
	{
		(e.target as eui.Image).source = 'stars_joined_svg';
	}

	private onGoImageClick(e: egret.TouchEvent): void
	{
		this.bgmSoundChannel.stop();
		Main.instance.gotoScene(new PlayingScene());
	}

	private playGameDemoAnimation()
	{
		var mc1:egret.MovieClip = new egret.MovieClip( this.mcFactory.generateMovieClipData( "game demo" ) );
		mc1.x = 320;
		mc1.y = 315;
		this.addChild( mc1 );
		mc1.play(-1);
	}
	
}