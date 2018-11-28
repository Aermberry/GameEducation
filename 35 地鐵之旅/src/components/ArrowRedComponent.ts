class ArrowRedComponent extends eui.Component implements  eui.UIComponent {
	
	private arrowImage: eui.Image;
	
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
		mouse.setButtonMode(this.arrowImage, true);
	}

	private onMouseOver(): void
	{
		this.currentState = 'over';
	}

	private onMouseOut(): void
	{
		this.currentState = 'normal';
	}

	public disable(): void
	{
		this.enabled = false;
		this.currentState = 'disable';
	}

	public enable(): void
	{
		this.enabled = true;
		this.currentState = 'normal';
	}

	public enableMouse(): void
	{
		this.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMouseOver, this);
		this.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onMouseOut, this);
	}

	public disableMouse(): void
	{
		this.removeEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMouseOver, this);
		this.removeEventListener(mouse.MouseEvent.MOUSE_OUT, this.onMouseOut, this);
	}
	
}