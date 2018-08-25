class StartScene extends eui.Component implements  eui.UIComponent {

	public displayArea:eui.Group;
	public startButton:eui.Button;

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
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButtonClick, this);
	}

	private onStartButtonClick(): void
	{
		Main.instance.gotoScene(new BackgroundScene());
	}
	
}