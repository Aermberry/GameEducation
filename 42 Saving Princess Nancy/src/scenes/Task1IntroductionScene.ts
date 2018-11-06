class Task1IntroductionScene extends eui.Component implements  eui.UIComponent {
	
	private maskRect: eui.Rect;
	private nextBootsComponent: egret.tween.TweenGroup;
	private maskAnimation: egret.tween.TweenGroup;
	
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected async childrenCreated(): Promise<void>
	{
		super.childrenCreated();
		lzlib.SoundUtility.playSound('task2_mp3');
		await this.maskAnimation.playOnceAsync();
		this.maskRect.visible = false;
		this.nextBootsComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextClick, this);
	}

	private onNextClick(e: egret.TouchEvent): void
	{
		Main.instance.gotoScene(new DragScene());
	}
	
}