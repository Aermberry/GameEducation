class StartScene extends eui.Component implements eui.UIComponent {
	private rainbowImage: eui.Image;
	private sightWordParkImage: eui.Image;
	private sightWordHunterImage: eui.Image;
	private mcFactory: egret.MovieClipDataFactory;
	private bgmSoundChannel: egret.SoundChannel;
	private startButton: eui.Image
	private startMask: eui.Rect;
	private loadingAnim: egret.tween.TweenGroup;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		mouse.setButtonMode(this.startButton, true);
		mouse.enable(this.stage);
		mouse.setButtonMode(this.sightWordHunterImage, true);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButtonClick, this);
		this.sightWordHunterImage.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onSightWordHunterMouseOver, this);
		this.sightWordHunterImage.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onSightWordHunterMouseOut, this);
		this.sightWordHunterImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSightWordHunterClick, this);


	}

	private async onStartButtonClick(): Promise<void> {
		await this.loadingAnim.play(0);
		this.startMask.visible = false;
		this.startButton.visible = false;
		this.loadMusic();
	}

	private loadMusic(): void {
		this.bgmSoundChannel = (RES.getRes('start_scene_bgm_mp3') as egret.Sound).play(0, -1);
		this.mcFactory = new egret.MovieClipDataFactory(RES.getRes('movie_clip_json'), RES.getRes("movie_clip_png"));
		egret.Tween.get(this.rainbowImage)
			.to({ x: 0 }, 500)
			.call(() => this.sightWordParkImage.visible = true, this)
			.wait(500)
			.call(this.showChooseAGameToPlay, this);
	}

	private showChooseAGameToPlay(): void {
		var mc1: egret.MovieClip = new egret.MovieClip(this.mcFactory.generateMovieClipData("choose a game to play"));
		mc1.x = 385;
		mc1.y = 450;
		this.addChild(mc1);
		mc1.play(-1);
	}

	private onSightWordHunterMouseOver(e: mouse.MouseEvent): void {
		this.sightWordHunterImage.source = "sight_word_hunter_mouse_over_png";
	}

	private onSightWordHunterMouseOut(e: mouse.MouseEvent): void {
		this.sightWordHunterImage.source = "sight_word_hunter_normal_png";
	}

	private onSightWordHunterClick(e: egret.TouchEvent): void {
		this.bgmSoundChannel.stop();
		Main.instance.gotoScene(new SelectDifficultyScene());
	}
}