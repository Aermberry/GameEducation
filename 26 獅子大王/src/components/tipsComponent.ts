class tipsComponent extends eui.Component implements eui.UIComponent {

	private tipsAnim: egret.tween.TweenGroup;

	private rect: eui.Rect;

	private returnGroup: eui.Group;
	private calendarTipsGroup:eui.Group;

	private letterGroup:eui.Group;

	private scene: eui.Component;
	private bulbComponent:bulbComponent;

	private calendar:eui.Image;

	private voice: string;

	private letterTipsGroup:eui.Group;


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
		this.letterTipsGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER,this.showLetter,this);
		this.letterTipsGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT,this.cancleShowLetter,this);
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
		let sound = optionsScene.getOptionInstance.playVoice(voiceName).then(()=>{
			this.calendarTipsGroup.visible=true;
			this.letterTipsGroup.visible=true;
		});
		return sound;
	}

	private showCalendar():void{
		this.calendar.visible=true
	}
	private cancleShowCalendar():void{
		this.calendar.visible=false;
	}

	private showLetter():void{
		this.letterGroup.visible=true;
	}

	private cancleShowLetter():void{
		this.letterGroup.visible=false;
	}

}