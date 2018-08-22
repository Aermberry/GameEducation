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
		console.log(this);
		await lzlib.SoundUtility.playSound('sound1_park_s1_mp3').then(() => {
			console.log(this);
			this.startSound();
		});
	}

	private startSound() 
	{
		console.log(this);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
			this.displayStepStr('第一节');
		}, this);
	}

	//显示当前第几个关卡

	private curStep: eui.Label;

	private displayStepStr(str: string)
	{
		let backgroundRect = new eui.Rect();
		backgroundRect.width = this.displayArea.width;
		backgroundRect.height = this.displayArea.height;
		backgroundRect.fillColor = 0xffffff;

		this.curStep = new eui.Label();
		this.curStep.width = this.displayArea.width;
		this.curStep.height = this.displayArea.height;
		this.curStep.textAlign = 'center';
		this.curStep.verticalAlign = 'middle';
		this.curStep.textColor = 0x000000;
		this.curStep.size = 150;
		this.curStep.text = str;
		this.displayArea.removeChildren();
		this.displayArea.addChild(backgroundRect);
		this.displayArea.addChild(this.curStep);
		console.log(this.displayArea);
		let tw = egret.Tween.get(this.curStep);
		tw.to({alpha:0},2000).call(() => {
			this.nextBackground(str);
		});
	}

	private async nextBackground(bg:string){
		if(bg == '第一节')
		{
			this.removeChildren();
			this.addChild(new BackgroundScene());
			await lzlib.SoundUtility.playSound('sound 80_mp3')
		}
		else if(bg == '第二节')
		{
			
		}
		else if(bg == '第三节')
		{

		}
		else if(bg == '第四节')
		{

		}

	}
	
}