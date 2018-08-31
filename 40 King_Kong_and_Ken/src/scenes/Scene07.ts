class Scene07 extends eui.Component implements eui.UIComponent {
	private textButton: eui.Button;
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName, instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		this.onPlayBackgroundMusic();
		this.textButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextClick,this);
	}

	private onPlayBackgroundMusic():void {
		lzlib.SoundUtility.playSound('08_startgame1a_mp3');

	}

	private onNextClick():void {
		Main.instance.gotoScene(new Scene08());
	}
	
}