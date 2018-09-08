class ProcessComponent extends eui.Component implements  eui.UIComponent {
	
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
		this.trainMovieClipPlayer.x = this.currentQuestionIndex * 66;
	}

	private _currentQuestionIndex = 0;

	public get currentQuestionIndex():number
	{
		return this._currentQuestionIndex;
	}
	
	public set currentQuestionIndex(value: number)
	{
		this._currentQuestionIndex = value;
		this.trainMovieClipPlayer && (this.trainMovieClipPlayer.x = this._currentQuestionIndex * 66)
	}
}