class BiscuitProgressBar extends eui.Component implements  eui.UIComponent {

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	public rightProcess;

	protected childrenCreated():void
	{

		this.createBiscuit();
		let ImgArr = this.rightProcess.$children;

		let curIndex = 1;
		let alphaSet = this._alphaSet;
		ImgArr.map(function(index){

			if (curIndex > alphaSet) {
				return;
			}

			index.alpha = 1;
			curIndex++;

		})

		curIndex = 0;
		let wrong = this._wrong;
		for(let i = this._alphaSet; curIndex < wrong; i++)
		{
			ImgArr[i].alpha = 0.7;
			curIndex++;
		}
		
	}

	private _alphaSet = 0;

	public get alphaSet(): number
	{
		return this._alphaSet;
	}

	public set alphaSet(value: number)
	{
		this._alphaSet = value;
	}

	private _wrong = 0;

	public get wrong(): number
	{
		return this._wrong;
	}

	public set wrong(value: number)
	{
		this._wrong = value;
	}

	private _biscuiNum = 0;

	public get biscuiNum(): number
	{
		return this._biscuiNum;
	}

	public set biscuiNum(value: number)
	{
		this._biscuiNum = value;
	}

	private createBiscuit() {

		let margin = 20;

		if(this._biscuiNum) {

			this.removeAll(this.rightProcess.$children);
			
			for(let i = 0; i < this._biscuiNum; i++) 
			{

				let image = new eui.Image();
				image.width = 127;
				image.height = 159;
				image.alpha = 0.4;
				image.source = 'biscuit_png';
				image.x = i * (image.width + margin);

				if(i == 0)
				{
					image.y = 52;
					image.x = margin;

				}
				else if(i%2 != 0) 
				{
					image.y = 58;
					
				}
				else
				{
					image.rotation = 20
					image.y = 50;
					image.x = i * (image.width + margin) + 20;
				}
				this.rightProcess.addChild(image);
			}

		}

	}

	private removeAll(arr)
	{
		if(arr.length)
		{

			for(let i = 0; i < arr.length; i++)
			{
				this.rightProcess.removeChildAt(i);
			}

		}
	}
}