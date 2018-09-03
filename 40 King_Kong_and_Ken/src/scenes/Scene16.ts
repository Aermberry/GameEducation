class Scene16 extends eui.Component implements  eui.UIComponent {
	private potImage:eui.Image;
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
		Base.onPlayBlackgroundMusic('37_mp3')
		Base.onClickVoice(this.potImage,'38_mp3',this.nextButton);
		Base.onClickNextScene(this.nextButton,new Scene17());
	}
	
}