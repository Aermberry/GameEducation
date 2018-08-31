class Scene09 extends eui.Component implements  eui.UIComponent {
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
		this.onBlackgroundMusic();
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNextScene,this);
	}

	private onNextScene():void{
		Main.instance.gotoScene(new Scene10());
	}

	 private async onBlackgroundMusic():Promise<void> {
		await lzlib.SoundUtility.playSound('10_startgame_b_mp3');
		this.nextButton.visible=true;
	}
	
}