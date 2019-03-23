class girffeComponent extends eui.Component implements eui.UIComponent {

	private eye: egret.tween.TweenGroup;
	private eyeSmell: egret.tween.TweenGroup;
	private flustedAnim: egret.tween.TweenGroup;
	private giraffe_active: eui.Image;
	private giraffe_hover: eui.Image;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();

		this.eye.playLoopAsync();
		this.eyeSmell.playLoopAsync();
		this.flustedAnim.playLoopAsync();
		this.giraffe_active.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hoverStatus, this)
		this.giraffe_hover.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}

	private activeStatus(): void {
		this.currentState = "active";
	}

	private hoverStatus(): void {
		this.currentState = "hover";
		GameStart.optionsScene.getOptionInstance.playVoice("sound 69_mp3");
	}

	public clickStatus(): void {
		this.currentState = "click";
	}

	public disableMouse(): void {
		this.giraffe_hover.removeEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}

	public ableMouse(): void {
		this.giraffe_hover.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}



}