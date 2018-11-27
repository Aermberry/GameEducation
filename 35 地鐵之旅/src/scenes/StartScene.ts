class StartScene extends eui.Component implements  eui.UIComponent {

	private journey1Group: eui.Group;
	private journey2Group: eui.Group;
	private startGroup: eui.Group;
	private journey1Image: eui.Image;
	private journey2Image: eui.Image;
	private startButton2: eui.Image;
	private startMask: eui.Rect;

	private currentButtonIndex = 1;

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
		this.journey1Group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onJourney1Click, this);
		this.journey2Group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onJourney2Click, this);
		this.startGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartClick, this);
		this.startButton2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButton2Click, this);
	}

	private async onStartButton2Click(): Promise<void>
	{
		this.startMask.visible = false;
		this.startButton2.visible = false;
		this.startGroup.visible = true;
		await lzlib.SoundUtility.playSound('sound 15 (inst_intro.mp3)_mp3');
		this.enableStartButton();
	}

	private onStartClick(): void
	{
		if(this.currentButtonIndex == 1)
		{
			CurrectJourneyRepository.termiuns = 'huaguoshan';
			CurrectJourneyRepository.currectJourney = '旅程一';
			CurrectJourneyRepository.startDate = new Date();
			CurrectJourneyRepository.arriving = '花果山站';
			Main.instance.gotoScene(new EntranceScene);
		}else{
			CurrectJourneyRepository.termiuns = 'hailong';
			CurrectJourneyRepository.currectJourney = '旅程二';
			CurrectJourneyRepository.startDate = new Date();
			CurrectJourneyRepository.arriving = '海龍公園站';
			Main.instance.gotoScene(new Entrance2Scene);
		}
	}

	private onJourney1Click(): void
	{
		this.currentButtonIndex = 1;
		this.journey1Image.source = 'background_journey2_png';
		this.journey2Image.source = 'background_journey1_png';
	}

	private onJourney2Click(): void
	{
		this.currentButtonIndex = 2;
		this.journey1Image.source = 'background_journey1_png';
		this.journey2Image.source = 'background_journey2_png';
	}
	
	private enableStartButton(): void
	{
		this.startGroup.alpha = 1;
	}
	
}