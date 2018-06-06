class ImageButton extends eui.Button implements  eui.UIComponent {
	private _source: string
	private _scaleWhenMouseOver = 1.1 //当鼠标悬停在DisplayObject上时，本DisplayObject的scale XY值

	public constructor() {
		super();
		this.width = 100
		this.height = 100
	}

	public set source(value: string)
	{
		this._source = value
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
		(this.getChildByName('image') as eui.Image).source = this._source
		this.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onRollOver, this)
		this.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onRollOut, this)
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this)
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this)
	}

	private onRollOver(e: mouse.MouseEvent): void
	{
		this.scaleX = this.scaleY = this._scaleWhenMouseOver
	}

	private onRollOut(e: mouse.MouseEvent): void
	{
		this.scaleX = this.scaleY = 1.0
	}

	protected onTouchBegin(e: egret.TouchEvent): void
	{
		this.scaleX = this.scaleY = 1.0
	}

	private onTouchEnd(e: egret.TouchEvent): void
	{
		this.scaleX = this.scaleY = this._scaleWhenMouseOver
	}
	
}