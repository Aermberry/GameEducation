class ConjunctionComponent extends eui.Component implements  eui.UIComponent {
	
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
		this.AnswerAudioBind();
	}

	private _text = '';

	public get text(): string
	{
		return this._text;
	}
	
	public set text(val: string)
	{
		this._text = val;
		this.textLabel && (this.textLabel.text = val);
	}

	private AnswerAudioBind():void
	{
		mouse.enable(this.stage);
		mouse.setButtonMode(this, true);
		this.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onRollOver, this);
		this.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onRollOut, this);	
	}

	private onRollOver(e): void
	{
		
	}
	
	private onRollOut(e): void
	{
		
	}
}