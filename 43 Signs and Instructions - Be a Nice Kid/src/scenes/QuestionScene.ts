class QuestionScene extends eui.Component implements  eui.UIComponent {
	
	private likeImage: eui.Image;
	private optionGroup1: eui.Group;
	private optionGroup4: eui.Group;
	
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

	public showLikeImage(): void
	{
		this.likeImage.visible = true;
	}

	public showOption(arr: any[]): void
	{
		
	}
	
}