class HelpScene extends eui.Component implements  eui.UIComponent {

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
		this.backButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.backToParentSatge,this);
	}

	private backToParentSatge():void {
		this.parent.removeChild(this);
	}

	public State(state:boolean=false):void {
		 state?this.currentState="top":this.currentState="put"
	}
	
}