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
		console.log(position);
	}

	public async loadView(view: MotorCarView): Promise<void>
	{
		this.view = view;
		
		this.isRight ? this.view.openRightDoor() : this.view.openLeftDoor();
		await this.view.playStartIntroduction();
		this.isRight ? this.view.closeRightDoor() : this.view.closeLeftDoor();

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
				let currentStation = this.line.nextStationCursor();
				console.log(currentStation);
				if (currentStation)
				{
				
					this.station = currentStation;
					this.view.stationPillarBackground(this.station.getBackground());
						console.log(1);
					console.log(this.station);
					await this.rightDoor();	
					this.view.closeRightDoor();
					
				}else{
					this.station = this.line.lastStationCursor();
					this.view.stationPillarBackground(this.station.getBackground());
					console.log(2);
					console.log(this.station);
					await this.leftDoor();
					this.view.closeLeftDoor();
					
					this.isRight = false;
					
				}
			}else{
				//往起始站方向
				let currentStation = this.line.lastStationCursor();
				console.log(currentStation);
				if (currentStation)
				{	
					this.station = currentStation;
					this.view.stationPillarBackground(this.station.getBackground());
					console.log(3);
					console.log(this.station);
					await this.leftDoor();
					this.view.closeLeftDoor();

				}else{				
					this.station = this.line.nextStationCursor();
					this.view.stationPillarBackground(this.station.getBackground());
					console.log(4);
					console.log(this.station);
					await this.rightDoor();
					this.view.closeRightDoor();
					this.isRight = true;
				}
			}
		}
		
	}

	public async leftDoor(): Promise<void>
	{
		await this.stationAudio.playLastStationMP3();
		await lzlib.SoundUtility.playSound('sound 39 (e_openLeft.mp3)_mp3');
		this.view.openLeftDoor();
		await lzlib.ThreadUtility.sleep(3500);
	}

	public async rightDoor(): Promise<void>
	{
		await this.stationAudio.playNextStationMP3();
		await lzlib.SoundUtility.playSound('sound 38 (e_openRight.mp3)_mp3');
		this.view.openRightDoor();
		await lzlib.ThreadUtility.sleep(3500);
	}
}