// TypeScript file

class BeginButton extends eui.Button implements eui.UIComponent{
   

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
		
		
	}

	

}