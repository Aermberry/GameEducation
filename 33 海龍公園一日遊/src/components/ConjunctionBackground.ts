class ConjunctionBackground extends eui.Component implements  eui.UIComponent {
	private backgroundImage: eui.Image;
	private blinkTweenGroup: egret.tween.TweenGroup;
	
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
	}
	
	public blink(): void
	{
		this.currentState = 'blink';
		this.blinkTweenGroup.playLoopAsync();
	}
}