class tipsComponent extends eui.Component implements eui.UIComponent {

	private tipsAnim: egret.tween.TweenGroup;

	private rect: eui.Rect;

	private returnGroup: eui.Group;
	private calendarTipsGroup:eui.Group;

	private scene: eui.Component;
	private bulbComponent:bulbComponent;

	private calendar:eui.Image;

	private voice: string;

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
		mouse.enable(this.stage);
		mouse.setButtonMode(this.calendarTipsGroup, true);
		this.calendarTipsGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER,this.showCalendar,this);
		this.calendarTipsGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT,this.cancleShowCalendar,this);
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
		let sound = lzlib.SoundUtility.playSound(voiceName).then(()=>{
			this.calendarTipsGroup.visible=true;
		});
		return sound;
	}

	private showCalendar():void{
		this.calendar.visible=true
	}
	private cancleShowCalendar():void{
		this.calendar.visible=false;
	}

}