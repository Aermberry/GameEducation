class GameScene extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
	}

	protected async partAdded(partName:string,instance:any): Promise<void>
	{
		super.partAdded(partName,instance);
		await lzlib.SoundUtility.playSound('sound_step_introduce_mp3');
		console.log('introduce');
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}