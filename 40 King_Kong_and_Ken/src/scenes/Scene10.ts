class Scene10 extends eui.Component implements  eui.UIComponent {
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
		this.onBackgroundMusic();
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNextScene,this);
	}

	private async onBackgroundMusic():Promise<void> {
		await lzlib.SoundUtility.playSound('11startgame4_mp3');
		this.nextButton.visible=true;
	}

	private onNextScene():void{
		Main.instance.gotoScene(new Scene11());
	}
	
}