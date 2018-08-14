// TypeScript file

// TypeScript file

class ProButton extends eui.Button implements eui.UIComponent{
    

    
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
        if(this.enabled){
        this.currentState = "hover";
        }
		
	}

	private onMouseOut(e: mouse.MouseEvent): void
	{   

		this.currentState = "normal";
		
	}

    public setProLabel(value: string): void
	{   
		this.label = value;
	}
    
	
    public resetpro(): void
	{
		this.currentState = 'normal';
		this.enabled = true;
	}
}