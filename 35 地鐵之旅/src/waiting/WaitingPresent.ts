class WaitingPresent {

	private view: WaitingVIew;
	private currentLine: Line;//当前线
	private position: number;//在当前线的第position站
	private station: Station;//当前站

	public constructor() {
	}

	public async loadView(view: WaitingVIew, line: Line, position: number): Promise<void>
	{
		this.view = view;
		this.currentLine = line;
		this.position = position;
		this.station = this.currentLine.getCurrectStation(this.position);

		this.view.stationColor(this.station.getBackground());
		this.view.stationText(this.station.stationName);
		
		//左右两边的标志
		if(this.currentLine.isLastStation())
		{
			this.station.is1And2Marking ? this.view.marking1And2(this.currentLine.getStartingStation().stationName) : this.view.marking3And4(this.currentLine.getStartingStation().stationName);
		}else if(this.currentLine.isStartingStation())
		{
			this.station.is1And2Marking ? this.view.marking1And2(this.currentLine.getLastStation().stationName) : this.view.marking3And4(this.currentLine.getLastStation().stationName);
		}else
		{
			if(this.station.is1And2Marking)
			{
				this.view.marking1(this.currentLine.getStartingStation().stationName);
				this.view.marking2(this.currentLine.getLastStation().stationName);
			}else
			{
				this.view.marking3(this.currentLine.getStartingStation().stationName);
				this.view.marking4(this.currentLine.getLastStation().stationName);
			}
		}

		this.station.playIntroductionMP3();
		while(true)
		{
			this.view.runLeftCar();
			await lzlib.ThreadUtility.sleep(1500);
			//enable左箭头按钮
			this.view.enableLeftArrow()
			await lzlib.ThreadUtility.sleep(3000);
			this.view.disableLeftArrow();
			this.view.runRightCar();
			await lzlib.ThreadUtility.sleep(1500);
			//enable右箭头按钮
			this.view.enableRightArrow();
			await lzlib.ThreadUtility.sleep(3000);
			this.view.disableRightArrow();
		}

		// this.view.stationOperation();
	}
}