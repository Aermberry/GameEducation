class MainScene extends eui.Component implements  eui.UIComponent {
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
		this.loadVoice();
	}

	private loadVoice(): void {
		lzlib.SoundUtility.playSound('02_mp3');
	}
	
}