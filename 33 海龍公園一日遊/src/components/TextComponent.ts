class TextComponent extends eui.Component implements  eui.UIComponent {
	
	public textLabel:eui.Label;
	
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
		this.textLabel.text = this._text;
	}

	private _text = '';

	public get text(): string
	{
		return this._text;
	}
	
	public set text(val: string)
	{
		this._text = val;
	}
}