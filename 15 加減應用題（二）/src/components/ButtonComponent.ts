class ButtonComponent extends eui.Component implements  eui.UIComponent {
	
	private buttonImage: eui.Image;
	
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
		mouse.setButtonMode(this.buttonImage,true);
		this.buttonImage.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMouseOver, this);
		this.buttonImage.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onMouseOut, this);
		this.buttonImage.source = this.normalSource;	
	}

	private onMouseOver(e: egret.TouchEvent): void
	{
		this.buttonImage.source = this._overSource;
	}

	private onMouseOut(e: egret.TouchEvent): void
	{
		this.buttonImage.source = this._normalSource;
	}

	private _normalSource = 'hight_normal_png';

	public get normalSource(): string
	{
		return this._normalSource;
	}
	
	public set normalSource(normal: string)
	{
		this._normalSource = normal;
	}


	private _overSource = 'hight_over_png';

	public get overSource(): string
	{
		return this._overSource;
	}
	
	public set overSource(normal: string)
	{
		this._overSource = normal;
	}

}