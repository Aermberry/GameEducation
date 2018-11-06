class FinishScene extends eui.Component implements  eui.UIComponent {
	
	private walkAnimation: egret.tween.TweenGroup;
	private showTextAnimation: egret.tween.TweenGroup;
	
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected async childrenCreated(): Promise<void>
	{
		super.childrenCreated();
		await this.walkAnimation.playOnceAsync();
		await lzlib.ThreadUtility.sleep(2000);
		lzlib.SoundUtility.playSound('finish_mp3');
		this.showTextAnimation.play();
	}
	
}