class Scene15 extends eui.Component implements  eui.UIComponent {
	private nextButton:eui.Button;
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
		Base.onAsyncPlayBlackgroundMusic('36_mp3',this.nextButton)
		Base.onClickNextScene(this.nextButton,new Scene16());
	}


	
}