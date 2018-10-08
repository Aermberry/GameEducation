class SelectDifficultyScene extends eui.Component implements  eui.UIComponent {
	private backImage: eui.Image;
	private easyImage: eui.Image;
	private easyLabel: eui.Label;
	private proImage: eui.Image;
	private proLabel: eui.Label;
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
		mouse.enable(this.stage);
		mouse.setButtonMode(this.backImage, true);
		mouse.setButtonMode(this.easyImage, true);
		mouse.setButtonMode(this.proImage, true);
		this.bgmSoundChannel = (RES.getRes('select_difficulty_scene_bgm_mp3') as egret.Sound).play();

		this.backImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackImageClick, this);

		this.easyImage.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onSelectDifficultyMouseOver, this);
		this.easyImage.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onSelectDifficultyMouseOut, this);
		this.easyImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEasyImageClick, this);
		this.easyLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEasyImageClick, this);

		this.proImage.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onSelectDifficultyMouseOver, this);
		this.proImage.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onSelectDifficultyMouseOut, this);
		this.proImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onProImageClick, this);
		this.proLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onProImageClick, this);

		this.mcFactory = new egret.MovieClipDataFactory( RES.getRes('movie_clip_json'), RES.getRes("movie_clip_png") );
		this.playSixWidgetsPopupAnimation();
	}

	private onBackImageClick(e: egret.TouchEvent): void
	{
		this.bgmSoundChannel.stop();
		Main.instance.gotoScene(new StartScene());
	}
	
	private onSelectDifficultyMouseOver(e: egret.Event): void
	{
		(e.target as eui.Image).source = 'stars_separated_svg';
	}
	
	private onSelectDifficultyMouseOut(e: egret.Event): void
	{
		(e.target as eui.Image).source = 'stars_joined_svg';
	}

	private onEasyImageClick(e: egret.TouchEvent): void
	{
		this.bgmSoundChannel.stop();
		Main.instance.gotoScene(new ReadyToPlayScene(new EasyWordRepository()));
	}

	private onProImageClick(e: egret.TouchEvent): void
	{
		this.bgmSoundChannel.stop();
		Main.instance.gotoScene(new ReadyToPlayScene(new ProWordRepository()));
	}

	private playSixWidgetsPopupAnimation()
	{
		var mc1:egret.MovieClip = new egret.MovieClip( this.mcFactory.generateMovieClipData( "six widgets popup" ) );
		mc1.x = 0;
		mc1.y = 890;
		mc1.scaleX = mc1.scaleY = 4;
		this.addChild( mc1 );
		mc1.play(1);
	}
}