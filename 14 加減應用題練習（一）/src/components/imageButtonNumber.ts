class imageButtonNumber extends eui.Image implements  eui.UIComponent {
	private originalSource: string | egret.Texture;
	private _mouseOverSource: string | egret.Texture;

	public constructor() {
		super();
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		mouse.setButtonMode(this, true);
		this.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onMouseOver, this);
		this.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onMouseOut, this);
	}

	private onMouseOver(): void
	{
		this.originalSource = this.source;
		this.source = this.mouseOverSource;
	}

	private onMouseOut(): void
	{
		this.source = this.originalSource;
	}

	public get mouseOverSource(): string | egret.Texture
	{
		return this._mouseOverSource;
	}

	public set mouseOverSource(value: string | egret.Texture)
	{
		this._mouseOverSource = value;
	}
}