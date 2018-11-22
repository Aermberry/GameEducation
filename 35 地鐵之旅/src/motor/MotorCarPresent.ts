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
		
		this.isRight ? this.view.openRightDoor() : this.view.openLeftDoor();
		await this.view.playStartIntroduction();
		this.isRight ? this.view.closeRightDoor() : this.view.closeLeftDoor();
		this.view.stationPillarBackground(this.station.getBackground());
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

					await this.rightDoor();	
					await this.view.closeRightDoor();
					
				}else{
					this.station = this.line.getLastStation();
					this.line.lastStationCursor();

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
				
					await this.leftDoor();
					await this.view.closeLeftDoor();

				}else{				
					this.station = this.line.getNextStation();
					this.line.nextStationCursor();
			
					await this.rightDoor();
					await this.view.closeRightDoor();
					this.isRight = true;
				}
			}
		}
		
	}

	public async leftDoor(): Promise<void>
	{
		await this.stationAudio.playLastStationMP3();
		await lzlib.SoundUtility.playSound('sound 39 (e_openLeft.mp3)_mp3');
		this.view.stationPillarBackground(this.station.getBackground());
		this.view.openLeftDoor();
		await lzlib.ThreadUtility.sleep(3500);
	}

	public async rightDoor(): Promise<void>
	{
		await this.stationAudio.playNextStationMP3();
		await lzlib.SoundUtility.playSound('sound 38 (e_openRight.mp3)_mp3');
		this.view.stationPillarBackground(this.station.getBackground());
		this.view.openRightDoor();
		await lzlib.ThreadUtility.sleep(3500);
	}
}