class invitation extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected async childrenCreated(): Promise <void>
	{
		super.childrenCreated();
		await lzlib.SoundUtility.playSound("sound 637_mp3");
		// RES.getRes("sound 637_mp3").play(0,1)
		initTow();
	}
	
}