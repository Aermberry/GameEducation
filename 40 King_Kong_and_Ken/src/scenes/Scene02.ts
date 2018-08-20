class Scene02 extends eui.Component implements  eui.UIComponent {
	private nextBtn:eui.Button;
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
		this.nextBtn.touchEnabled=true;
		this.nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNextBtnClick,this);
		this.playBackgroundMusic();
	}

	private async playBackgroundMusic():Promise<void> {
		await lzlib.SoundUtility.playSound('01b2_mp3');
	}

	private onNextBtnClick():void {
		Main.instance.gotoScene(new Scene03());
	}
}