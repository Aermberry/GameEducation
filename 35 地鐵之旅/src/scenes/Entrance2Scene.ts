class Entrance2Scene extends eui.Component implements  eui.UIComponent {
	
	private arrowComponent: ArrowRedComponent;
	
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected async childrenCreated(): Promise<void>
	{
		super.childrenCreated();
		await this.playMP3();
		this.arrowComponent.enable();
		this.arrowComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onArrowClick, this);
	}

	private onArrowClick(): void
	{
		Main.instance.gotoScene(new BookingScene());
	}

	private async playMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('sound 10 (inst_mission_p1.mp3)_mp3');
		await lzlib.SoundUtility.playSound('sound 6 (inst_st_banana.mp3)_mp3');
		await lzlib.SoundUtility.playSound('sound 9 (inst_mission_p2.mp3)_mp3');
		await lzlib.SoundUtility.playSound('sound 11 (inst_mission_dest_park.mp3)_mp3');
		await lzlib.SoundUtility.playSound('sound 8 (inst_mission_p3.mp3)_mp3');
	}
}