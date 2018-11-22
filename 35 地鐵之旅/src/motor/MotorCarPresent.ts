class MotorCarPresent {

	private line: Line;
	private station: Station;
	private stationAudio: StationAudio;
	private position: number;
	private isRight: boolean;
	private view: MotorCarView;

	public constructor(line: Line, position: number, isRight: boolean) {
		this.line = line;
		this.position = position;
		this.isRight = isRight;
		this.station = this.line.getCurrectStation(this.position);
	}

	public async loadView(view: MotorCarView): Promise<void>
	{
		this.view = view;
		//设置柱子颜色
		this.view.stationPillarBackground(this.station.getBackground());
		this.isRight ? this.view.openRightDoor() : this.view.openLeftDoor();
		await this.view.playStartIntroduction();
		await this.isRight ? this.view.closeRightDoor() : this.view.closeLeftDoor();
		this.runCar();
	}

	public async runCar(): Promise<void>
	{
		while(true)
		{
			this.stationAudio = this.station.getStationAudio();
			
			if(this.isRight)
			{
				//往终点站方向
				let currentStation = this.line.getNextStation();
				if (currentStation)
				{
					this.station = currentStation;
					this.line.nextStationCursor();

					this.view.driveCar();
					await this.stationAudio.playNextStationMP3();
					await lzlib.ThreadUtility.sleep(2000);
					this.view.stopDriveCar();
					await this.rightDoor();	
					await this.view.closeRightDoor();
					
				}else{
					this.station = this.line.getLastStation();
					this.line.lastStationCursor();

					this.view.driveCar();
					await this.stationAudio.playLastStationMP3();
					await lzlib.ThreadUtility.sleep(2000);
					this.view.stopDriveCar();
					await this.leftDoor();
					await this.view.closeLeftDoor();
					
					this.isRight = false;
					
				}
			}else{
				//往起始站方向
				let currentStation = this.line.getLastStation();
			
				if (currentStation)
				{	
					this.station = currentStation;
					this.line.lastStationCursor();
					
					this.view.driveCar();
					await this.stationAudio.playLastStationMP3();
					await lzlib.ThreadUtility.sleep(2000);
					this.view.stopDriveCar();
					await this.leftDoor();
					await this.view.closeLeftDoor();

				}else{				
					this.station = this.line.getNextStation();
					this.line.nextStationCursor();
			
					this.view.driveCar();
					await this.stationAudio.playNextStationMP3();
					await lzlib.ThreadUtility.sleep(2000);
					this.view.stopDriveCar();
					await this.rightDoor();
					await this.view.closeRightDoor();
					this.isRight = true;
				}
			}
		}
		
	}

	public async leftDoor(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('sound 39 (e_openLeft.mp3)_mp3');
		this.view.stationPillarBackground(this.station.getBackground());
		this.view.openLeftDoor();
		this.view.enableLeftArrow();
		await this.view.playGapMP3();
		//禁止左边箭头点击
		await this.view.playMindoorMP3();
		this.view.disableLeftArrow();
	}

	public async rightDoor(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('sound 38 (e_openRight.mp3)_mp3');
		this.view.stationPillarBackground(this.station.getBackground());
		this.view.openRightDoor();
		this.view.enableRightArrow();
		await this.view.playGapMP3();
		//禁止左边箭头点击
		await this.view.playMindoorMP3();
		this.view.disableRightArrow();
	}

	public onArrowClick(): void
	{
		Main.instance.gotoScene(new WaitingScene(this.line,this.line.getPosition()));
	}
}