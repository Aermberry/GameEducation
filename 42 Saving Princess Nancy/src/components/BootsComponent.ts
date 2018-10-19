class BootsComponent extends eui.Component implements  eui.UIComponent {
	
	private textLabel: eui.Label;
	
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

	private _text = 'Next';

	public get text(): string
	{
		return this._text;
	}

	public set text(text: string)
	{
		this._text = text;
	}
	
}