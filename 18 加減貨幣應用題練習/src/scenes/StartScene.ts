class StartScene extends eui.Component implements  eui.UIComponent {
	private splashTweenGroup: egret.tween.TweenGroup;
	private startMask: eui.Rect;
	private startButton2: eui.Image;
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
		mouse.enable(this.stage);
		this.startButton2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButton2Click, this);
		this.splashTweenGroup.addEventListener(egret.Event.COMPLETE, this.onSplashTweenGroupComplete, this);
		
	}
	private onStartButton2Click(): void
	{
		this.splashTweenGroup.play(0);
		this.startMask.visible = false;
		this.startButton2.visible = false;

	}


	private onSplashTweenGroupComplete(e: egret.Event): void
	{
		Main.instance.gotoScene(new Question1Scene());
	}
	
}