class StartScene extends eui.Component implements  eui.UIComponent {
	private splashTweenGroup: egret.tween.TweenGroup;

	private currentSoundChannel: egret.SoundChannel;

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
		this.playSplashMovie();
	}

	private async playSplashMovie(): Promise<void>
	{
		await this.splashTweenGroup.playOnceAsync();
		await lzlib.ThreadUtility.sleep(2000);
		Main.instance.gotoScene(new CalculationScene());
	}
}