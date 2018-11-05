class BootsComponent extends eui.Component implements  eui.UIComponent {
	
	private textLabel: eui.Label;
	private boots: MovieClipPlayer;
	
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
		this.boots.playLoop();

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