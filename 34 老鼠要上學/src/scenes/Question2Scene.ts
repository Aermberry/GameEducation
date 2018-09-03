class Question2Scene extends eui.Component implements  eui.UIComponent {
	
	private startCockAnimation: egret.tween.TweenGroup;
	
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
		this.playStartCockAnimation();
	}

	private playStartCockAnimation(): void
	{
		this.startCockAnimation.playLoopAsync();
	}
	
}