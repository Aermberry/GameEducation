class StartScene extends eui.Component implements  eui.UIComponent {
	private splashTweenGroup: egret.tween.TweenGroup;

	private currentSoundChannel: egret.SoundChannel;
	private startMask: eui.Rect;
    private startButton: eui.Button;
    private loadingAnim:egret.tween.TweenGroup

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
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStartButtonClick,this);
		
	}

	private async onStartButtonClick(): Promise<void> {
		await this.loadingAnim.play(0);
		this.startMask.visible = false;
		this.startButton.visible = false;
		this.playSplashMovie();
	}

	private async playSplashMovie(): Promise<void>
	{
		await this.splashTweenGroup.playOnceAsync();
		await lzlib.ThreadUtility.sleep(3500);
		Main.instance.gotoScene(new CalculationScene());
	}
}