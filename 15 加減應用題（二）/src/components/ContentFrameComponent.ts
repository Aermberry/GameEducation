class ContentFrameComponent extends eui.Component implements  eui.UIComponent {
	
	private currentlevelLabel: eui.Label;
	private exitLabel: eui.Label;
	
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
		mouse.setButtonMode(this.exitLabel,true);
		this.exitLabel.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMouseOver, this);
		this.exitLabel.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onMouseOut, this);
		this.currentlevelLabel.text = this._currentlevel;
	}
	
	private onMouseOver(e: egret.TouchEvent): void
	{
		(e.target as eui.Label).textColor = 0xffffff;
	}

	private onMouseOut(e: egret.TouchEvent): void
	{
		(e.target as eui.Label).textColor = 0x1D3A66;
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