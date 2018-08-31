class Scene13 extends eui.Component implements  eui.UIComponent {
	private voiceImage00:eui.Image;
	private voiceImage01:eui.Image;
	private voiceImage02:eui.Image;
	private voiceImage03:eui.Image;
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
		Base.onPlayBlackgroundMusic('30_mp3');
		Base.onClickVoice(this.voiceImage00,'29_mp3')
		Base.onClickVoice(this.voiceImage01,'32_mp3')
		Base.onClickVoice(this.voiceImage02,'33_mp3')
		Base.onClickVoice(this.voiceImage03,'34_mp3')
		this.optionImage00.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openOptionsScene,this)
		this.optionImage02.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openOptionsScene,this)
		this.optionImage01.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openOptinsScenes,this)
		
	}

	public openOptionsScene( ):void {
		this.addChild(new Scene14());
	}

	public openOptinsScenes():void{
		Main.instance.gotoScene(new Scene15());
	}
	
}