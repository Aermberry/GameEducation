class StartScene extends eui.Component implements  eui.UIComponent {

	private displayArea:eui.Group;
	private startButton:eui.Button;
	private exitButton: eui.Button;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected async childrenCreated():Promise<void>
	{
		super.childrenCreated();
		mouse.enable(this.stage);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButtonClick, this);
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, window.close, this);
	}

	private onStartButtonClick(): void
	{
		Main.instance.gotoScene(new BackgroundScene());
	}
	
}