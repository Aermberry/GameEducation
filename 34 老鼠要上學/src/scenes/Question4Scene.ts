class Question4Scene extends eui.Component implements  eui.UIComponent {
	
	private startMouseAnimation:egret.tween.TweenGroup;

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
		this.playMouseAnimation();
	}

	private playMouseAnimation(): void
	{
		this.startMouseAnimation.playLoopAsync();
	}
	
}