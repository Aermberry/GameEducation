class Start4Scene extends eui.Component implements  eui.UIComponent {
	
	public listenWordGroup: eui.Group;

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
		this.listenWordGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onListenWordGroupTap, this);
	}

	private onListenWordGroupTap(): void
	{
		Main.instance.gotoScene(new ListenScene());
	}
	
}