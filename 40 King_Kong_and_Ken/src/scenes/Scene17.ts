class Scene17 extends eui.Component implements  eui.UIComponent {
	private voiceImage00:eui.Image;
	private voiceImage01:eui.Image;
	private voiceImage02:eui.Image;
	private optionImage00:eui.Image;
	private optionImage01:eui.Image;
	private optionImage02:eui.Image;


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
		Base.onPlayBlackgroundMusic('39_mp3');
		Base.onClickVoice(this.voiceImage00,'41_mp3');
		Base.onClickVoice(this.voiceImage01,'42_mp3');
		Base.onClickVoice(this.voiceImage02,'43_mp3');
		this.optionImage01.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openOptionsScene,this)
		this.optionImage02.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openOptionsScene,this)
		Base.onClickNextScene(this.optionImage00,new Scene19())
	}

	public openOptionsScene( ):void {
		this.addChild(new Scene18());
	}
	
}