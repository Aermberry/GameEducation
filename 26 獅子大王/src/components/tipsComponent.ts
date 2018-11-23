class tipsComponent extends eui.Component implements eui.UIComponent {

	private tipsAnim: egret.tween.TweenGroup;
	private rect: eui.Rect;
	private returnGroup: eui.Group;
	private scene: eui.Component;
	public constructor(scene: eui.Component) {
		super();
		this.scene = scene;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		// this.currentState = this.skin.states[0].name
		this.returnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.return, this)
	}

	public playAnim(): void {
		this.tipsAnim.playOnceAsync();
		this.playVoice().then(()=>{
			this.returnGroup.visible = true; 
		})
	}

	private return(): void {
		this.scene.removeChild(this);
	}

	private async playVoice(): Promise<void> {
		let sound = lzlib.SoundUtility.playSound('sound 342_mp3');
		return sound;
	}
}