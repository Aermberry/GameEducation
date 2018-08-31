class Scene21 extends eui.Component implements  eui.UIComponent {
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
		Base.onPlayBlackgroundMusic('48_mp3');
		Base.onClickVoice(this.voiceImage00,'50_mp3');
		Base.onClickVoice(this.voiceImage01,'51_mp3');
		Base.onClickVoice(this.voiceImage02,'52_mp3');
		this.optionImage00.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openOptionsScene,this)
		this.optionImage01.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openOptionsScene,this)
		Base.onClickNextScene(this.optionImage02,new Scene23())
	}

	public openOptionsScene( ):void {
		this.addChild(new Scene22());
	}
	
}