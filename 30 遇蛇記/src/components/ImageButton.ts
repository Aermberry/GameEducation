class ImageButton extends eui.Button implements  eui.UIComponent {
	private _source: string
	private _tipSource: string
	private _scaleWhenMouseOver = 1.1 //当鼠标悬停在DisplayObject上时，本DisplayObject的scale XY值
	private mainImage: eui.Image;
	private tipImage: eui.Image;

	public constructor() {
		super();
		this.width = 100
		this.height = 100
	}

	public get source(): string
	{
		return this._source;
	}

	public set source(value: string)
	{
		this._source = value
	}

	public get tipSource(): string
	{
		return this._tipSource;
	}

	public set tipSource(value: string)
	{
		this._tipSource = value;
	}

	public get scaleWhenMouseOver(): number
	{
		return this._scaleWhenMouseOver;
	}

	public set scaleWhenMouseOver(value: number)
	{
		this._scaleWhenMouseOver = value
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		mouse.setButtonMode(this, true);
		this.mainImage.source = this.source
		this.tipImage.source = this.tipSource
		this.tipImage.y = this.mainImage.y + this.mainImage.height;
		this.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onRollOver, this)
		this.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onRollOut, this)
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this)
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this)
	}

	private onRollOver(e: mouse.MouseEvent): void
	{
		this.scaleX = this.scaleY = this.scaleWhenMouseOver;
		this.tipImage.visible = true;
	}

	private onRollOut(e: mouse.MouseEvent): void
	{
		this.scaleX = this.scaleY = 1.0
		this.tipImage.visible = false;
	}

	protected onTouchBegin(e: egret.TouchEvent): void
	{
		this.scaleX = this.scaleY = 1.0
	}

	private onTouchEnd(e: egret.TouchEvent): void
	{
		this.scaleX = this.scaleY = this.scaleWhenMouseOver
	}
	
}