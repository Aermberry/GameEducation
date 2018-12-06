class ratComponent extends eui.Component implements eui.UIComponent {

	private Flustered: egret.tween.TweenGroup;
	private eyes: egret.tween.TweenGroup;
	private rat_active: eui.Image;
	private rat_hover: eui.Image;


	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.Flustered.playLoopAsync();
		this.eyes.playLoopAsync();
		this.rat_active.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hoverStatus, this)
		this.rat_hover.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
		this.rat_hover.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.active, this);
		this.rat_hover.addEventListener(egret.TouchEvent.TOUCH_END, this.tips, this);
		this.currentState = "active"
	}

	private activeStatus(): void {
		this.currentState = "active";
	}

	private hoverStatus(): void {
		this.currentState = "hover";
		lzlib.SoundUtility.playSound("sound 34_mp3")
	}

	private clickStatus(): void {
		this.currentState = "click";
	}

	private async hover(): Promise<void> {
		this.bulbComponent.currentState = "hover";
	}

	private async normal(): Promise<void> {
		await this.enableMouse();
		this.bulbComponent.currentState = "normal"
	}
	private async active(): Promise<void> {
		await this.disableMouse();
		this.bulbComponent.currentState = "active";
	}

	private async disableMouse(): Promise<void> {
		this.bulbComponentGroup.removeEventListener(mouse.MouseEvent.MOUSE_OVER, this.hover, this);
	}
	private enableMouse(): void {
		this.bulbComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hover, this);
	}
	private

}