class GoodsComponent extends eui.Component implements  eui.UIComponent {
	private goodsImage: eui.Image;

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
}