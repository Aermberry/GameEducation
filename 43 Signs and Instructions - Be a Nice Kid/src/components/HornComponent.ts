class HornComponent extends eui.Component implements  eui.UIComponent {
	
	private hornImage: eui.Image;

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
		mouse.setButtonMode(this.hornImage,true);
		this.hornImage.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onHornImageOver, this);
		this.hornImage.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onHornImageOut, this)
	}

	private onHornImageOver(e: egret.TouchEvent): void
	{
		lzlib.SoundUtility.playSound(this._soundPath);
		this.hornImage.source = 'horn_over_png';
	}

	private onHornImageOut(e: egret.TouchEvent): void
	{
		this.hornImage.source = 'horn_normal_png';
	}

	private _soundPath = '';

	public get soundPath(): string
	{
		return this._soundPath;
	}

	public set soundPath(path: string)
	{
		this._soundPath = path;
	}

	
}