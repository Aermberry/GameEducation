class BackgroundScene extends eui.Component implements  eui.UIComponent {
	
	private stepImage: eui.Image;
	private curStep: eui.Label;
	private contentButtom: eui.Group;
	private currentStepStartLabel: eui.Label;
	private nextPageButton: eui.Image;
	private startTweenGroup: egret.tween.TweenGroup;

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
		this.nextPageButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextPageButtonClick, this);
		this.startTweenGroup.play(0);
		this.displayBackground('第一節');
	}

	private onNextPageButtonClick(): void
	{
		Main.instance.gotoScene(new NextPageScene());
	}

	private async displayBackground(bg: string): Promise<void> {
		if(bg == '第一節')
		{
			await lzlib.SoundUtility.playSound('sound1_park_s1_mp3');
			this.nextPageButton.touchEnabled = true;
		}
		else if(bg == '第二節')
		{
		}
		else if(bg == '第三節') {
		}
		else if(bg == '第四節') {

		}

	}
	
}