// TypeScript file

class ExitButton extends eui.Button implements eui.UIComponent{
   

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
		this.addEventListener(mouse.MouseEvent.ROLL_OUT,  this.mosueOut, this);
		this.addEventListener(mouse.MouseEvent.ROLL_OVER, this.mouseOver , this);
		
	}

	private mosueOut(e: mouse.MouseEvent):void {
		this.currentState = "normal";
		
	}
    private mouseOver(e: mouse.MouseEvent):void {
		this.currentState = "hover";
	}

}