class Arriving1Scene extends eui.Component implements  eui.UIComponent {
	
	private routeComponent: RouteComponent;
	private startAnimation: egret.tween.TweenGroup;
	private controllingComponent: ControllingComponent;
	
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
		this.controllingComponent.addEventListener(ControllingEvent.ROUTE_CLICK, this.onRouteClick, this);
	}

	private onRouteClick(): void
	{
		this.routeComponent.visible = true;
	}
	
}