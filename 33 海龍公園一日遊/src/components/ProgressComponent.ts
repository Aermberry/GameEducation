class ProgressComponent extends eui.Component implements  eui.UIComponent {
	
	private trainMovieClipPlayer:MovieClipPlayer;

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
		this.trainMovieClipPlayer.x = (LevelBiz.instance.currentLevel * 4 + LevelBiz.instance.currentQuestionIndex) * 66;
	}
}