class ContentFrameComponent extends eui.Component implements  eui.UIComponent {
	
	private currentlevelLabel: eui.Label;
	private exitImage: eui.Image;
	
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
		mouse.setButtonMode(this.exitImage,true);
		this.exitImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitImageTap, this);
		this.exitImage.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMouseOver, this);
		this.exitImage.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onMouseOut, this);
		this.currentlevelLabel.text = this._currentlevel;
	}
	
	private onExitImageTap(): void
	{
		window.close();
	}

	private onMouseOver(e: egret.TouchEvent): void
	{
		(e.target as eui.Image).source = 'exit_over_png'
	}

	private onMouseOut(e: egret.TouchEvent): void
	{
		(e.target as eui.Image).source = 'exit_normal_png';
	}

	private _currentlevel = '1';

	public get currentlevel(): string
	{
		return this._currentlevel;
	}

	public set currentlevel(num: string)
	{
		this._currentlevel = num;
	}
	
}