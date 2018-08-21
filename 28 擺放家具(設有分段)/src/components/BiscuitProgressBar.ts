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

		let curIndex = 1;
		let alphaSet = this._alphaSet;
		console.log(this.rightProcess);
		let ImgArr = this.rightProcess.$children;
		
		ImgArr.map(function(index){

			if (curIndex > alphaSet) {
				return;
			}

			index.alpha = 1;
			curIndex++;

		})
		
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

}