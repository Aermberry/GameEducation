class CalcComponents extends eui.Component implements  eui.UIComponent {
	
	private textLabel: eui.Label;
	
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
		mouse.setButtonMode(this.textLabel,true);
		this.textLabel.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMouseOver, this);
		this.textLabel.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onMouseOut, this);
	}
	
	private onMouseOver(e: egret.TouchEvent): void
	{
		(e.target as eui.Label).textColor = 0xffffff;
	}


	private onMouseOut(e: egret.TouchEvent): void
	{
		(e.target as eui.Label).textColor = 0x202A76;
	}
}