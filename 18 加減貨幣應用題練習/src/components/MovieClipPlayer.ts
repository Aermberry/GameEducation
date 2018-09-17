/**
 * 允许使用者在exml直接播放movie clip，不需要在代码中设置，例子：
 * <ns1:MovieClipPlayer dataSet="xxx_json" texture="xxx_png" movieClipName="xxx" x="0" y="0" width="100" height="100" />
 */
class MovieClipPlayer extends eui.Component implements  eui.UIComponent {
	
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
		let mc = new egret.MovieClip(mcFactory.generateMovieClipData(this.movieClipName));
		this.addChild(mc);
		mc.play(1);
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
}