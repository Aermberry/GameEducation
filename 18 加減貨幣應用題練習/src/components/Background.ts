namespace Ui{
	export class Background extends eui.Component implements  eui.UIComponent {
	private indexLabel:Ui.IndexTitle
	public constructor() {
		super();
		this.skinName="BackgroundSkin";
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();

		this.indexLabel.index=this.index;
		console.log(this.indexLabel.index);
	}

	private _index:string;

	public set index(value){
		this._index=value;
		// this.indexLabel&&(this.indexLabel.index=value);
	}

	public get index():string{
		return this._index;
	}
	
}
}
