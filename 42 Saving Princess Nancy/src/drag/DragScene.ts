class DragScene extends eui.Component implements  eui.UIComponent,DragView {
	

	private presenter = new DragPresenter();

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected async childrenCreated(): Promise<void>
	{
		super.childrenCreated();
		await this.playStartMP3();
		this.presenter.loadView(this);
	}

	private async playStartMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('drag_Introduction_mp3');
	}
	
}