class GreenTextComponent extends eui.Component implements  eui.UIComponent {
	
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
		mouse.enable(this.stage);
		mouse.setButtonMode(this.textLabel, true);
		this.textLabel.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMouseOver, this);
		this.textLabel.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMouseOut, this);
		this.textLabel.text = this._text;
	}

	private onMouseOver(e: egret.TouchEvent): void
	{
		this.currentState = 'over';
	}
		
	private onMouseOut(e: egret.TouchEvent): void
	{
		this.currentState = 'normal';
	}

	private _text = '';

	public get text(): string
	{
		return this._text;
	}

	public set text(text: string)
	{
		this._text = text;
	}
	
}