class ImageButton extends eui.Component implements  eui.UIComponent {
	private backgroundImage: eui.Image;
	private contentImage: eui.Image;

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
		mouse.setButtonMode(this.backgroundImage, true);
		mouse.setButtonMode(this.contentImage, true);
		this.backgroundImage.source = this.backgroundImageSource;
		this.contentImage.source = this.normalImageSource;
		this.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMouseOver, this);
		this.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onMouseOut, this);
	}

	private onMouseOver(): void
	{
		this.contentImage.source = this.overImageSource;
	}

	private onMouseOut(): void
	{
		this.contentImage.source = this.normalImageSource;
	}
	
	private _backgroundImageSource = '';

	public get backgroundImageSource(): string
	{
		return this._backgroundImageSource;
	}

	public set backgroundImageSource(value: string)
	{
		this._backgroundImageSource = value;
		this.backgroundImage && (this.backgroundImage.source = value);
	}

	private _normalImageSource = '';

	public get normalImageSource(): string
	{
		return this._normalImageSource;
	}

	public set normalImageSource(value: string)
	{
		this._normalImageSource = value;
	}

	private _overImageSource = '';

	public get overImageSource(): string
	{
		return this._overImageSource;
	}

	public set overImageSource(value: string)
	{
		this._overImageSource = value;
	}
}