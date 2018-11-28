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
		//显示车上的人
		this.view.showPeople(this.choosePerson());
		//设置柱子颜色
		this.view.stationPillarBackground(this.station.getBackground());
		//打开车门
		this.isRight ? this.view.openRightDoor() : this.view.openLeftDoor();
		//启用箭头点击
		this.isRight ? this.view.enableRightArrow() : this.view.enableLeftArrow();
		await lzlib.ThreadUtility.sleep(4000);
		//禁止箭头点击
		this.isRight ? this.view.disableRightArrow() : this.view.disableLeftArrow();

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
					await lzlib.ThreadUtility.sleep(5000);
					this.view.disableRightArrow();
					await this.view.closeRightDoor();
					
				}else{
					this.station = this.line.getLastStation();
					this.line.lastStationCursor();

					this.view.driveCar();
					await this.stationAudio.playLastStationMP3();
					await lzlib.ThreadUtility.sleep(2000);
					this.view.stopDriveCar();
					await this.leftDoor();
					await lzlib.ThreadUtility.sleep(5000);
					this.view.disableLeftArrow();
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
					await lzlib.ThreadUtility.sleep(5000);
					this.view.disableLeftArrow();
					await this.view.closeLeftDoor();

				}else{				
					this.station = this.line.getNextStation();
					this.line.nextStationCursor();
			
					this.view.driveCar();
					await this.stationAudio.playNextStationMP3();
					await lzlib.ThreadUtility.sleep(2000);
					this.view.stopDriveCar();
					await this.rightDoor();
					await lzlib.ThreadUtility.sleep(5000);
					this.view.disableRightArrow();
					await this.view.closeRightDoor();
					this.isRight = true;
				}
			}
		}
		
	}

	private choosePerson(): number[]
	{
		let count = Math.randomMinMax(1,3);
		let num = [];
		for(let i = 0; i < count; i++)
		{
			num[i] = Math.randomMinMax(0,6);
		}
		console.log(num);
		return num;
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
	}

	public onArrowClick(): void
	{
		Main.instance.gotoScene(new WaitingScene(this.line,this.line.getPosition()));
	}
}