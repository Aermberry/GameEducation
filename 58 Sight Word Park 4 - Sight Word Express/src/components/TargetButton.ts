// TypeScript file

class TargetButton extends eui.Button implements eui.UIComponent{
    

    
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
		this.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onMouseOver, this);
		this.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onMouseOut, this);
	}
    
    private onMouseOver(e: mouse.MouseEvent): void
	{
		this.currentState = "hover";
	}

	private onMouseOut(e: mouse.MouseEvent): void
	{
		this.currentState = "normal";
		
	}

    public setLabel(value: string): void
	{   
		
		this.label = value;
	}
    
	
    public reset(): void
	{
		this.currentState = 'normal';
		this.enabled = true;
	}
}