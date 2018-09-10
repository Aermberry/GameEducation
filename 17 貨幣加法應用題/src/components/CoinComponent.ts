class CoinComponent extends eui.Component implements  eui.UIComponent {
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
		this.createImage();

	}

	private createImage(): void
	{
		for(let i = 0; i < this._number; i++)
		{
			let iocnImage = new eui.Image();
			iocnImage.source = this._coinSource;
			iocnImage.y = this._heightY * i;
			this.addChild(iocnImage);
		}
	}

	private _coinSource = 'tenyuan_coin_png';

	public get coinSource(): string
	{
		return this._coinSource;
	}

	public set coinSource(coin: string)
	{
		this._coinSource = coin;
	}

	private _number = 1;

	public get number(): number
	{
		return this._number;
	}

	public set number(num: number)
	{
		this._number = num;
	}
	
	private _heightY = 60;

	public get heightY(): number
	{
		return this._heightY;
	}

	public set heightY(num: number)
	{
		this._heightY = num;
	}
}