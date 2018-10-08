class StartScene extends eui.Component implements  eui.UIComponent {
	private splashTweenGroup: egret.tween.TweenGroup;
	private startMask: eui.Rect;
	private startButton: eui.Image;

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
		mouse.setButtonMode(this.startButton, true);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButtonClick, this);
		this.splashTweenGroup.addEventListener(egret.Event.COMPLETE, this.onSplashTweenGroupComplete, this);
	}

	private onStartButtonClick(): void
	{
		this.startButton.visible = false;
		this.startMask.visible = false;
		this.splashTweenGroup.play(0);
	}

	private onSplashTweenGroupComplete(e: egret.Event): void
	{
		Main.instance.gotoScene(new ChooseEquationScene());
	}
}