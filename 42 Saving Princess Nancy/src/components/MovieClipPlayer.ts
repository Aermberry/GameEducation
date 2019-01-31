class MovieClipPlayer extends eui.Component implements  eui.UIComponent {
	
	private mc:egret.MovieClip;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		let mcFactory = new egret.MovieClipDataFactory(RES.getRes(this.dataSet), RES.getRes(this.texture));
		this.mc = new egret.MovieClip(mcFactory.generateMovieClipData(this.movieClipName));
		this.addChild(this.mc);
		this._isPlay == true ? this.mc.play(-1) : this.mc.play(0);
	}

	public playLoop(): void
	{
		this.mc.play(-1);
	}

	public play(): void
	{
		this.mc.gotoAndPlay(0);
	}

	public stop(): void
	{
		this.mc.stop();
	}
	
	private _dataSet = '';

	public get dataSet(): string
	{
		return this._dataSet;
	}

	public set dataSet(value: string)
	{
		this._dataSet = value;
	}

	private _texture = '';

	public get texture(): string
	{
		return this._texture;
	}

	public set texture(value: string)
	{
		this._texture = value;
	}

	private _movieClipName = '';
	
	public get movieClipName(): string
	{
		return this._movieClipName;
	}

	public set movieClipName(value: string)
	{
		this._movieClipName = value;
	}

	private _isPlay = false;

	public get isLoopPlay(): boolean
	{
		return this._isPlay;
	}

	public set isLoopPlay(value: boolean)
	{
		this._isPlay = value;
	}
}