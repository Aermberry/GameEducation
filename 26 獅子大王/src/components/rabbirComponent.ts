class rabbirComponent extends eui.Component implements eui.UIComponent {

	private rabbit_active: eui.Image;
	private rabbit_hover: eui.Image;

	public constructor() {
		super();

	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		// this.currentState = "active"
		this.rabbit_active.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hoverStatus, this)
		this.rabbit_hover.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}

	public  activeStatus(): void {
		this.currentState = "active";
	}

	private async hoverStatus(): Promise<void> {
		this.currentState = "hover";
		lzlib.SoundUtility.playSound("sound 157_mp3")
	}

	public clickStatus(): void {
		this.currentState = "click";
		// setTimeout(function() {
		// 	this.ableMouse();
		// }, 100);
	}

	public disableMouse(): void {
		this.rabbit_hover.removeEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}

	public ableMouse(): void {
		this.rabbit_hover.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}

}