class AlertGame2Component extends eui.Component implements  eui.UIComponent {
	
	public alertLabel: eui.Label;
	public alertImage: eui.Image;

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
		this.alertLabel.text = this._text;
		this.alertImage.source = this._source;
	}

	private _text = '這便是問候語';

	public get text(): string
	{
		return this._text;
	}

	public set text(str: string)
	{
		this._text = str;
		this.alertLabel && (this.alertLabel.text = this._text);
	}

	private _source = 'pen_alert_png';

	public get source(): string
	{
		return this._source;
	}

	public set source(path: string)
	{
		this._source = path;
		this.alertImage && (this.alertImage.source = path);
	}
	
}