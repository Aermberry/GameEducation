class AlertComponent extends eui.Component implements  eui.UIComponent {
	
	private contentLabel: eui.Label;
	private closeImage: eui.Image;
	
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
		mouse.setButtonMode(this.closeImage, true);
		this.closeImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
		this.contentLabel.text = this._text;
		this.closeImage.visible = this._isDisplayClose;
	}

	private onCloseClick(e: egret.TouchEvent): void
	{
		this.visible = false;
	}

	public showAlert(): void
	{
		this.visible = true;
	}

	private _text = '';

	public get text(): string
	{
		return this._text;
	}

	public set text(text: string)
	{
		this._text = text;
		this.contentLabel && (this.contentLabel.text = this._text);
	}

	private _isDisplayClose = true;

	public get isDisplayClose(): boolean
	{
		return this._isDisplayClose;
	}

	public set isDisplayClose(boolean: boolean)
	{
		this._isDisplayClose = boolean;
		this.closeImage && (this.closeImage.visible = this._isDisplayClose);
		
	}
	
}