class ResultScene extends eui.Component implements  eui.UIComponent {
    private ExitGroup:eui.Group;

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
		this.ExitGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>window.close(), this);
	}
	
}