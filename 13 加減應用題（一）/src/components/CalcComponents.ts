class CalcComponents extends eui.Component implements  eui.UIComponent {
	
	private calcImage: eui.Image;

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
		mouse.enable(this.stage);
		mouse.setButtonMode(this.calcImage,true);
		this.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMouseOver, this);
		this.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onMouseOut, this);
	}
		
	private onMouseOver(e: egret.TouchEvent): void
	{
		this.currentState = 'over';
	}


	private onMouseOut(e: egret.TouchEvent): void
	{
		this.currentState = 'normal';
	}
}