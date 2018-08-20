class Scene06 extends eui.Component implements  eui.UIComponent {
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
		this.playBackgroundMusic();
	}

		private async playBackgroundMusic():Promise<void> {
		await lzlib.SoundUtility.playSound('');
	}
	
}