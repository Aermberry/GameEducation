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
		console.log(123445);
		this.trainMovieClipPlayer.x = this._currentQuestionIndex * 66;
	}

	private _currentQuestionIndex = 0;

	public get currentQuestionIndex():number
	{
		return this._currentQuestionIndex;
	}
	
	public set currentQuestionIndex(index:number)
	{
		this._currentQuestionIndex = index;
		this.trainMovieClipPlayer && (this.trainMovieClipPlayer.x = this._currentQuestionIndex * 66)
	}
}