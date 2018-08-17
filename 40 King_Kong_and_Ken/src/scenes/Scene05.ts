class Scene05 extends eui.Component implements  eui.UIComponent {
	private btnNext:eui.Button;
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
		this.btnNext.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNextBtnClick,this);
	}

	private onNextBtnClick():void {
		Main.instance.gotoScene(new Scene06());
	}
	
}