class ratComponent extends eui.Component implements  eui.UIComponent {

	private Flustered:egret.tween.TweenGroup;
	private eyes:egret.tween.TweenGroup;


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
		this.Flustered.playLoopAsync();
		this.eyes.playLoopAsync();
		// this.currentState="click"
	}
	
}