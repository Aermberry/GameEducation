class AlertComponent extends eui.Component implements  eui.UIComponent {
	
	private contentLabel: eui.Label;
	
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
	}

	private _text = '';

	public get text(): string
	{
		return this._text;
	}

	public set text(text: string)
	{
		this._text = text;
		this.contentLabel && (this.contentLabel.text = this._text);
	}
	
}