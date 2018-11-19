class Arriving1Scene extends eui.Component implements  eui.UIComponent {
	
	private startAnimation: egret.tween.TweenGroup;
	
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected async childrenCreated(): Promise<void>
	{
		super.childrenCreated();
		await this.startAnimation.playOnceAsync();
		Main.instance.gotoScene(new FinishScene());
	}
	
}