class Scene20 extends eui.Component implements  eui.UIComponent {
	private voiceImage:eui.Image;
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
		Base.onPlayBlackgroundMusic('46_mp3');
		Base.onClickVoice(this.voiceImage,'47_mp3',this.nextButton);
		Base.onClickNextScene(this.nextButton,new Scene21());
	}
	
}