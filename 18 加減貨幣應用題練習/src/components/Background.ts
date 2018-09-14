namespace Ui{
	export class Background extends eui.Component implements  eui.UIComponent {
	private indexLabel:Ui.IndexTitle
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

		this.indexLabel.index=this.index;
	}

	private _index:string;

	public set index(value){
		this._index=value;
	}

	public get index():string{
		return this._index;
	}
	
}
}
