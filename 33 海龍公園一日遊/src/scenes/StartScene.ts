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

	private async nextBackground(bg:string){
		if(bg == '第一节')
		{
			this.removeChildren();
			this.addChild(new BackgroundScene());
			await lzlib.SoundUtility.playSound('sound1_park_s1_mp3');
			this.removeChildren();

			let nextPageComponent = new NextPageScene();
			nextPageComponent.text = '第一节';
			this.addChild(nextPageComponent);

			 
			
		}
		else if(bg == '第二节')
		{
			this.removeChildren();
			let backgroundScene = new BackgroundScene();
			backgroundScene.stepImage.source = 'roller_coaster_png';
			
			backgroundScene.currentStepStartLabel.text = bg;
			this.addChild(backgroundScene);

			await lzlib.SoundUtility.playSound('sound1_park_s2_mp3');
			this.removeChildren();
			let nextPageComponent = new NextPageScene();
			nextPageComponent.text = '第二节';
			this.addChild(nextPageComponent);


		}
		else if(bg == '第三节') {
		}
		else if(bg == '第四节') {

		}

	}
	
}