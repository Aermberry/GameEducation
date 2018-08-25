class TipsScene extends eui.Component implements  eui.UIComponent {
	private backButton:eui.Button;
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

		this.backButton.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
			Main.instance.gotoScene(new GameScene());
		},this);
	}
	
}