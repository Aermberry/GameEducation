class BookingScene extends eui.Component implements  eui.UIComponent {
	
	private stationLabel: eui.Label;
	private pointGroup: eui.Group;

	private currectJourneyRepo = new CurrectJourneyRepository();
	
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
		mouse.enable(this.stage);
		this.initStationLabel();
		await lzlib.SoundUtility.playSound('sound 3 (inst_ticket.mp3)_mp3');
		this.initMouseAndClick();
	}

	private initMouseAndClick(): void
	{
		this.pointGroup.$children.map(child => {
			let image = child as eui.Image;
			mouse.setButtonMode(image, true);
			image.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onPointOver, this);
			image.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onPointOut, this);
			image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPointclick, this);
		})
	}

	private onPointOver(e: egret.TouchEvent): void
	{
		let image = (e.target as eui.Image);
		if(image.source == 'icon_station_png')
		{
			image.source = 'circle_yellow_selected_png';
		}else
		{
			image.source = 'icon_yellow_selected_png';
		}
	}
	
	private onPointOut(e: egret.TouchEvent): void
	{
		let image = (e.target as eui.Image);
		if(image.source == 'circle_yellow_selected_png')
		{
			image.source = 'icon_station_png';
		}else
		{
			image.source = 'icon_transfer_png';
		}
	}

	private async onPointclick(e: egret.TouchEvent): Promise<void>
	{
		let name = e.target.$name;
		if(CurrectJourneyRepository.termiuns == name)
		{
			//跳转ticketCheck场景
			CurrectJourneyRepository.currectJourney == '旅程一' ? Main.instance.gotoScene(new TicketCheck1Scene()) : Main.instance.gotoScene(new TicketCheck2Scene());
		}else{
			//播放选择错误音频
			await lzlib.SoundUtility.playSound('sound 2 (inst_wrongDest.mp3)_mp3');
			await lzlib.SoundUtility.playSound('sound 9 (inst_mission_p2.mp3)_mp3');
			await this.currectJourneyRepo.playTermiunsMP3();
		}
	}

	private initStationLabel(): void
	{
		CurrectJourneyRepository.currectJourney == '旅程一' ? this.stationLabel.text = '海龍公園站' : this.stationLabel.text = '香蕉站';
	}
}