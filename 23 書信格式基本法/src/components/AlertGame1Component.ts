class AlertGame1Component extends eui.Component implements  eui.UIComponent {
	
	private alertMessageLabel: eui.Label;
	
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
		this.alertMessageLabel.text = this._message;
	}

	private _message = '';

	public get message(): string
	{
		return this._message;
	}

	public set message(text: string)
	{
		this._message = text;
		this.alertMessageLabel && (this.alertMessageLabel.text = this._message);
	}
	
}