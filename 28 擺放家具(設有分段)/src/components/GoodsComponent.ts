class GoodsComponent extends eui.Component implements eui.UIComponent, lzlib.Cloneable {
	private goodsImage: eui.Image;
	private circleImage: eui.Image;

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
		this.goodsImage.source = this.source;
		
	}
	
	private _source = '';

	public get source(): string
	{
		return this._source;
	}

	public set source(value: string)
	{
		this._source = value;
		this.goodsImage && (this.goodsImage.source = value);
	}

	public clone(): Object
	{
		let result = new GoodsComponent();
		result.currentState = this.currentState;
		result.source = this.source;
		result.width = this.width;
		result.height = this.height;
		return result;
	}

	public validateInCorrectPlace(): void
	{

	}

	public get isInRoom(): boolean
	{
		return false;
	}

	public get isInCorrectPlace(): boolean
	{
		return false;
	}

	public get isInWrongPlace(): boolean
	{
		return false;
	}
}