class LabelComponents extends eui.Component implements  eui.UIComponent {
	
	private backgroundRect: eui.Rect;
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
		this.backgroundRect.fillColor = this.fillColor;
	}

	private _text = '';

	public get text(): string
	{
		return this._text;
	}
	
	public set text(text: string)
	{
		this._text = text;
		this.textLabel && (this.textLabel.text = this._text);
	}

	private _fillColor = 0xfffd38;

	public get fillColor(): number
	{
		return this._fillColor;
	}

	public set fillColor(color: number)
	{
		this._fillColor = color;
		this.backgroundRect && (this.backgroundRect.fillColor = color)
	}
}