class game_start extends eui.Component implements  eui.UIComponent {
	private starBtn:eui.Button;
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
		this.starBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onnextBtnClick,this);
	}

	private onnextBtnClick():void {
		Main.instance.gotoScene(new game_scene());
	}
	
}