class StartScene extends eui.Component implements  eui.UIComponent {
    // private currentSoundChannl:egret.SoundChannel;

	// private bannerTweenGroup:egret.tween.TweenGroup;
	private playTweenGroup:egret.tween.TweenGroup;
	private group:eui.Group;
	private schoolGroup:eui.Group;
	private startMask: eui.Rect;
    private startButton: eui.Button;
    // private loadingAnim:egret.tween.TweenGroup



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
		// this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStartButtonClick,this);
		this.onStartButtonClick();
	}

	private  onStartButtonClick(): void{
		// await this.loadingAnim.play(0);
		this.startMask.visible = false;
		this.startButton.visible = false;
		this.playAnimationToNextScene();
	}

	private async playAnimationToNextScene():Promise<void>
	{    
		// await lzlib.ThreadUtility.sleep(2000)
		await this.playTweenGroup.playOnceAsync();
		this.schoolGroup.visible = true;
		// await this.playAnimationToNextScene();
		lzlib.SoundUtility.playSound('amy_go_shcool_mp3');
		await lzlib.ThreadUtility.sleep(3000)
		Main.instance.gotoScene(new BookSence1());
	}
	
	private  goNextScene()
	{
		// this.currentSoundChannl.stop();
		Main.instance.gotoScene(new BookSence1());
	}
		
}