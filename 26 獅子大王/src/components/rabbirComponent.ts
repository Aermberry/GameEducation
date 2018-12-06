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

		this.rabbit_active.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hoverStatus, this)
		this.rabbit_hover.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
		this.currentState="active"
	}

	private activeStatus(): void {
		this.currentState = "active";
	}

	private hoverStatus(): void {
		this.currentState = "hover";
		lzlib.SoundUtility.playSound("sound 157_mp3")
	}

	private clickStatus(): void {
		this.currentState = "click";
	}

	public playVoice(): void {
		let sound: egret.Sound = RES.getRes("")
		sound.play();
	}

}