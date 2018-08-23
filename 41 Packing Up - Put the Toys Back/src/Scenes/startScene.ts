class startScene extends eui.Component implements  eui.UIComponent {
	private starBtn:eui.Button;
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
		this.starBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onnextBtnClick,this);
		this.playBackgroundMusic();
	}

// 播放背景音樂
	private async playBackgroundMusic():Promise<void> {
		await lzlib.SoundUtility.playSound('01a_mp3');
	}

// 點擊進入游戲場景
	private onnextBtnClick():void {
		Main.instance.gotoScene(new gameScene());
	}
}