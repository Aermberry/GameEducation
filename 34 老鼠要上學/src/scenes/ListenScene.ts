class ListenScene extends eui.Component implements  eui.UIComponent {
	
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
		this.animationStart();
	}

	public animationStart(): void
	{
		this.startAnimation.play(0);
	}
	
}