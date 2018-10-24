class PauseButton extends eui.Component implements  eui.UIComponent {
	private titleLabel: eui.Label;
	private bgImage: eui.Image;

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
		mouse.setButtonMode(this.bgImage, true);
		mouse.setButtonMode(this.titleLabel, true);
		this.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMouseOver, this);
		this.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onMouseOut, this);

		this.titleLabel.text = this.title;
	}

	private onMouseOver(e: mouse.MouseEvent): void
	{
		this.titleLabel.textColor = 0xffffff;
	}

	private onMouseOut(e: mouse.MouseEvent): void
	{
		this.titleLabel.textColor = 0x010C5A;
	} 

	private _title = '暫停';

	public get title(): string
	{
		return this._title;
	}

	public set title(value: string)
	{
		this._title = value;
		this.titleLabel && (this.titleLabel.text = value);
	}
	
}