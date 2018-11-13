class Nextbgnoall extends eui.Component implements  eui.UIComponent {
	protected shinningTweenGroup: egret.tween.TweenGroup;
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
		this.shinningTweenGroup.playLoopAsync();
	}
	
}