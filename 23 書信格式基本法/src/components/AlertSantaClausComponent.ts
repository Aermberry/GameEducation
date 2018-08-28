class AlertSantaClausComponent extends eui.Component implements  eui.UIComponent {
	
	public alertLabel: eui.Label;

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
	}
	
	private _text = '在書信的內容中，[媽媽]和[妳]是同時出現，因此，[妳]是不可能是媽媽。';

	public get text(): string
	{
		return this._text;
	}

	public set text(str: string)
	{
		this._text = str;
		this.alertLabel && (this.alertLabel.text = this._text);
	}

}