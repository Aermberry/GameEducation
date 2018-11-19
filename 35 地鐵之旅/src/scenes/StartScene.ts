class StartScene extends eui.Component implements  eui.UIComponent {

	private journey1Group: eui.Group;
	private journey2Group: eui.Group;
	private startGroup: eui.Group;
	private journey1Image: eui.Image;
	private journey2Image: eui.Image;

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
		await lzlib.SoundUtility.playSound('sound 15 (inst_intro.mp3)_mp3');
		this.enableStartButton();
		this.journey1Group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onJourney1Click, this);
		this.journey2Group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onJourney2Click, this);
		this.startGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartClick, this);
	}

	private onStartClick(): void
	{
		let group = this.getChildByName('selected');
		let index = this.getChildIndex(group);
		
		if(index == 1)
		{
			CurrectJourneyRepository.termiuns = 'huaguoshan';
			CurrectJourneyRepository.currectJourney = '旅程一';
			CurrectJourneyRepository.startDate = new Date();
			Main.instance.gotoScene(new EntranceScene);
		}else{
			CurrectJourneyRepository.termiuns = 'hailong';
			CurrectJourneyRepository.currectJourney = '旅程二';
			CurrectJourneyRepository.startDate = new Date();
			Main.instance.gotoScene(new Entrance2Scene);
		}
	}

	private onJourney1Click(): void
	{
		this.journey2Group.name = '';
		this.journey1Group.name = 'selected';
		this.journey1Image.source = 'background_journey2_png';
		this.journey2Image.source = 'background_journey1_png';
	}

	private onJourney2Click(): void
	{
		this.journey1Group.name = '';
		this.journey2Group.name = 'selected';
		this.journey1Image.source = 'background_journey1_png';
		this.journey2Image.source = 'background_journey2_png';
	}
	
	private enableStartButton(): void
	{
		this.startGroup.alpha = 1;
	}
	
}