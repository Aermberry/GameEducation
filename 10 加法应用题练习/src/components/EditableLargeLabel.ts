class EditableLargeLabel extends EditableLabel implements  eui.UIComponent {
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
		this.resultLabel.font = 'calculation_font_fnt';
		this.userInput.textDisplay.size = 65;
	}
	
}