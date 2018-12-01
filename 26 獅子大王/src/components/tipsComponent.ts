class tipsComponent extends eui.Component implements eui.UIComponent {

	private tipsAnim: egret.tween.TweenGroup;
	private rect: eui.Rect;
	private returnGroup: eui.Group;
	private scene: eui.Component;
	private voice: string;
	private bulbComponent:bulbComponent;
	private calendar:eui.Image;

	public constructor(scene: eui.Component, voice: string) {
		super();
		this.scene = scene;
		this.voice = voice
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.returnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.return, this)
	}

	public playAnim(): void {
		this.tipsAnim.playOnceAsync();
		this.playVoice(this.voice).then(() => {
			this.returnGroup.visible = true;
		})
	}

	private return(): void {
		this.scene.removeChild(this);
	}

	private async playVoice(voiceName: string): Promise<void> {
		let sound = lzlib.SoundUtility.playSound(voiceName);
		return sound;
	}

	private showCalendar():void{
		this.calendar.visible=true
	}
}