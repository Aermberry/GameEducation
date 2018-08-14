class StartScene extends eui.Component implements  eui.UIComponent {
	private splashTweenGroup: egret.tween.TweenGroup;

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
		this.splashTweenGroup.addEventListener(egret.Event.COMPLETE, this.onSplashTweenGroupComplete, this);
		this.splashTweenGroup.play(0);
	}

	private onSplashTweenGroupComplete(e: egret.Event): void
	{
		Main.instance.gotoScene(new ChooseEquationScene());
	}
}