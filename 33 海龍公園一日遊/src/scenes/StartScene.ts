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
		// await lzlib.SoundUtility.playSound('sound 80_mp3').then(() => {
		// 	console.log(this);
		// 	this.startSound();
		// });
		this.startSound();
	}

	private startSound() 
	{
		console.log(this);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
			this.displayStepStr('第一节');
		}, this);
	}

	//显示当前第几个关卡

	private curStep;

	private displayStepStr(str: string)
	{
		this.curStep = new BackgroundScene();
		Main.instance.gotoScene(this.curStep);
	}
	
}