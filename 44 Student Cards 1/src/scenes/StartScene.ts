class StartScene extends eui.Component implements  eui.UIComponent {
	private titleLabel:eui.Label;
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
		let underLine=new Base();
		underLine.drawLine(this.titleLabel,this);

	}
	
}