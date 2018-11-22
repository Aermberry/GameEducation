class TicketCheck2Scene extends eui.Component implements  eui.UIComponent {
	
	private platform1Group: eui.Group;
	private platform2Group: eui.Group;
	private lineRepo = new LineRepository();
	
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
		this.enablePlatform();
		this.platform1Group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlatform1Click, this);
		this.platform2Group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlatform2Click, this);
		
	}

	private onPlatform1Click(): void
	{
		Main.instance.gotoScene(new WaitingScene(this.lineRepo.line2,0));
	}

	private onPlatform2Click(): void
	{
		Main.instance.gotoScene(new WaitingScene(this.lineRepo.line3,1));
	}

	private async playMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('sound 56 (e_directionMount.mp3)_mp3');
		await lzlib.SoundUtility.playSound('sound 26 (go_1_2.mp3)_mp3');
		await lzlib.SoundUtility.playSound('sound 58 (e_directionAirport.mp3)_mp3');
		await lzlib.SoundUtility.playSound('sound 23 (go_3_4.mp3)_mp3');
		await lzlib.SoundUtility.playSound('sound 18 (inst_c_plm.mp3)_mp3');
	}

	private enablePlatform(): void
	{
		this.platform1Group.alpha = 1;
		this.platform2Group.alpha = 1;
	}
	
}