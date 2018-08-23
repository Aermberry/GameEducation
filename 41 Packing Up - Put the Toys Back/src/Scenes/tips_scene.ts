class tips_scene extends eui.Component implements  eui.UIComponent {
	private back:eui.Button;
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

		this.back.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
			Main.instance.gotoScene(new game_scene());
		},this);
	}
	
}