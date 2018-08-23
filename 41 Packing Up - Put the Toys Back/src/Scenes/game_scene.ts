class game_scene extends eui.Component implements  eui.UIComponent {
	private help:eui.Button;
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
		this.help.addEventListener(egret.TouchEvent.TOUCH_TAP,function():void{
			Main.instance.gotoScene(new tips_scene())
		},this)
	}
	
}