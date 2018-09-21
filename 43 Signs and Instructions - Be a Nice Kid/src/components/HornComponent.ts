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
	}

	private onHornImageOver(): void
	{
		lzlib.SoundUtility.playSound(this._soundPath);
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