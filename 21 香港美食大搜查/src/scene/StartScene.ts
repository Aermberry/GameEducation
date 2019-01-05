class StartScene extends eui.Component implements  eui.UIComponent {

	private statrButton: eui.Image;
	private maksRect:eui.Rect;
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
		this.statrButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclickButton,this)
	}


	private onclickButton():void{
		this.statrButton.visible = false;
		this.maksRect.visible = false;
		startInit();
	}
	
}