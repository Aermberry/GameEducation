class GoToCastleScene extends eui.Component implements  eui.UIComponent {
	
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
		await this.playStartAnimation();
		Main.instance.gotoScene(new DistinguishRole5Scene());
	}

	private async playStartAnimation(): Promise<void>
	{
		await this.startAnimation.playOnceAsync();
	}
	
}