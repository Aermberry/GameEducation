class BackgroundScene extends eui.Component implements  eui.UIComponent {
	
	public stepImage: eui.Image;
	public curStep: eui.Label;
	public contentButtom: eui.Group;
	public currentStepStartLabel: eui.Label;
	public NextPageButton;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	public tw;
	protected childrenCreated():void
	{
		super.childrenCreated();
		this.stepImage.visible = false;
		this.contentButtom.visible = false;

		this.tw = egret.Tween.get(this.currentStepStartLabel);
		this.tw.to({alpha:1},2000,egret.Ease.backInOut).call(() => {
			this.displayBackground('第一节');
		})
		
	}

	private async displayBackground(bg: string){
		this.currentStepStartLabel.alpha = 0;
		this.stepImage.visible = true;
		this.contentButtom.visible = true;

		if(bg == '第一节')
		{
			await lzlib.SoundUtility.playSound('sound1_park_s1_mp3');
			this.NextPageButton.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
				Main.instance.gotoScene(new NextPageScene());
			})	 
			
		}
		else if(bg == '第二节')
		{
		}
		else if(bg == '第三节') {
		}
		else if(bg == '第四节') {

		}

	}
	
}