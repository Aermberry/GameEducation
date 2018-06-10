class StartScene extends eui.Component implements  eui.UIComponent {
	private rainbow: eui.Image;
	private sightWordPark: eui.Image;
	private sightWordHunter: eui.Image;
	private mcFactory: egret.MovieClipDataFactory;

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
		this.sightWordHunter.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onSightWordHunterMouseOver, this);
		this.sightWordHunter.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onSightWordHunterMouseOut, this);
		this.sightWordHunter.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSightWordHunterClick, this);

		this.mcFactory = new egret.MovieClipDataFactory( RES.getRes('movie_clip_json'), RES.getRes("movie_clip_png") );
		egret.Tween.get(this.rainbow)
			.to({x: 0}, 500)
			.call(() => this.sightWordPark.visible = true, this)
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
	
	private onSightWordHunterMouseOver(e: mouse.MouseEvent): void
	{
		this.sightWordHunter.source = "sight_word_hunter_mouse_over_png";
	}

	private onSightWordHunterMouseOut(e: mouse.MouseEvent): void
	{
		this.sightWordHunter.source = "sight_word_hunter_normal_png";
	}

	private onSightWordHunterClick(e: egret.TouchEvent): void
	{
		
	}
}