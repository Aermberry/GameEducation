class StartScene extends eui.Component implements  eui.UIComponent {
	private titleLabel:eui.Label;
	private nextButton:eui.Button;
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
		this.onLoadVoice();
		let underLine=new Base();
		underLine.drawLine(this.titleLabel,this);
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNextScene,this);
	}
	private onLoadVoice():void {
		lzlib.SoundUtility.playSound('01_mp3');
	}
	private onNextScene():void{
		Main.instance.gotoScene(new MainScene());
	}
	
}