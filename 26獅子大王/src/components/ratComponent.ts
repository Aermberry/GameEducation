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
	}

	private activeStatus(): void {
		this.currentState = "active";
	}

	private hoverStatus(): void {
		this.currentState = "hover";
		GameStart.optionsScene.getOptionInstance.playVoice("sound 34_mp3")
	}

	public clickStatus(): void {
		this.currentState = "click";
	}

	public disableMouse(): void {
		this.rat_hover.removeEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}

	public ableMouse(): void {
		this.rat_hover.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}

}