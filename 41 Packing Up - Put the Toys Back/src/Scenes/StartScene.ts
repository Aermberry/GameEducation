class startScene extends eui.Component implements  eui.UIComponent {

	private startButton:eui.Button;

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
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onnextBtnClick, this);
		this.startGame();
	}

	private async startGame(): Promise<void> {
		await lzlib.SoundUtility.playSound('01a_mp3');
		this.startButton.visible = true;
	}

	// 點擊進入游戲場景
	private onnextBtnClick(): void {
		Main.instance.gotoScene(new gameScene());
	}
	
}