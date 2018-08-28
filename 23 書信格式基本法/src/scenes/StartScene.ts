class StartScene extends eui.Component implements  eui.UIComponent {
	
	private startLabel: eui.Label;
	private startAnimation: egret.tween.TweenGroup;

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
		this.startAnimation.play(0);
		this.startLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartLabelTap, this);
	}

	private onStartLabelTap()
	{
		Main.instance.gotoScene(new Game1Scene());
	}
	
}