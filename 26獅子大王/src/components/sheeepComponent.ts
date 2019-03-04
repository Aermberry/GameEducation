class sheeepComponent extends eui.Component implements eui.UIComponent {

	private eyeAnim: egret.tween.TweenGroup;
	private flustered: egret.tween.TweenGroup;
	private eyesAnims: egret.tween.TweenGroup;
	private sheep_active: eui.Image
	private sheep_hover: eui.Image

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.playLoopAnim(this.flustered)
		this.playLoopAnim(this.eyeAnim)
		this.playLoopAnim(this.eyesAnims)
		this.sheep_active.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hoverStatus, this)
		this.sheep_hover.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}

	private playLoopAnim(Anim: egret.tween.TweenGroup): void {
		Anim.playLoopAsync();
	}

	private activeStatus(): void {
		this.currentState = "active";
	}

	private hoverStatus(): void {
		this.currentState = "hover";
		optionsScene.getOptionInstance.playVoice("sound 95_mp3")
	}

	public clickStatus(): void {
		this.currentState = "click";
	}

	public disableMouse(): void {
		this.sheep_hover.removeEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}

	public ableMouse(): void {
		this.sheep_hover.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}



}