class goods extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	private image: eui.Image
	protected childrenCreated():void
	{
		console.log(this.height);
		this.image = new eui.Image();
		this.image.source = RES.getRes(this._src);
		this.image.width = this.width;
		this.image.height = this.height;
		
		if(this._isAlpha) {
			this.image.alpha = 0.5;
		}

		this.addChild(this.image);
		
	}

	private _src = '';

	public get src(): string
	{
		return this._src;
	}

	public set src(value:string)
	{
		this._src = value;
	}

	private _isAlpha = false;

	public get isAlpha(): boolean
	{
		return this._isAlpha;
	}

	public set isAlpha(value: boolean)
	{
		this._isAlpha = value;
	}

	private _isWrong = false;

	public get isWrong(): boolean
	{
		return this._isWrong;
	}

	public set isWrong(value:boolean)
	{
		this._isWrong = value;
	}


}