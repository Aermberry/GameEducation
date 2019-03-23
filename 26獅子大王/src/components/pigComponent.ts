class pigComponent extends eui.Component implements eui.UIComponent {

	private eyeAnim: egret.tween.TweenGroup;
	private flusteredAnim: egret.tween.TweenGroup;
	private eyes: egret.tween.TweenGroup;
	private pig_active: eui.Image;
	private pig_hover:eui.Image;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.eyes.playLoopAsync();
		this.pig_active.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hoverStatus, this)
		this.pig_hover.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}

	private activeStatus(): void {
		this.currentState = "active";
	}

	private hoverStatus(): void {
		this.currentState = "hover";
		GameStart.optionsScene.getOptionInstance.playVoice("sound 13 (D3.mp3)_mp3");
		this.onAnim();
	}

	public clickStatus(): void {
		this.currentState = "click";
	}

	public async onAnim(): Promise<void> {
		this.eyeAnim.playOnceAsync().then(() => {
			this.flusteredAnim.playLoopAsync();
		})
	}

	public disableMouse(): void {
		this.pig_hover.removeEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}

	public ableMouse(): void {
		this.pig_hover.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}
}