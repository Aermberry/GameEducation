class WaitingPresent {

	private view: WaitingVIew;
	private currentLine: Line;//当前线
	private position: number;//在当前线的第position站
	private station: Station;//当前站
	private isArrowClick = false;

	private upperStrata = '往上層';
	private lowerStrata = '往下層';
	private lobby = '往大堂';

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
			this.station.is1And2 ? this.view.marking1And2(this.currentLine.getStartingStation().stationName) : this.view.marking3And4(this.currentLine.getStartingStation().stationName);
		}else if(this.currentLine.isStartingStation())
		{
			this.station.is1And2 ? this.view.marking1And2(this.currentLine.getTerminalStation().stationName) : this.view.marking3And4(this.currentLine.getTerminalStation().stationName);
		}else
		{
			if(this.station.is1And2)
			{
				this.view.marking1(this.currentLine.getTerminalStation().stationName);
				this.view.marking2(this.currentLine.getStartingStation().stationName);
			}else
			{
				this.view.marking3(this.currentLine.getStartingStation().stationName);
				this.view.marking4(this.currentLine.getTerminalStation().stationName);
			}
		}

		//显示两边的操作按钮
		if(this.station.isUpperStrata)
		{
			//‘出'显示在左边
			this.view.showExitButtonLeft();
			this.view.showOperationLeft();
			this.view.setTipTextLeft('往大堂');
			
			//判断是否可以有下层
			if(this.station.getLowerStrataLine())
			{
				this.view.showExitButtonRight();
				this.view.hideExitButtonright();
				this.view.setTipTextRight('往下層');
			}else{
				//没有只显示‘出'
				this.view.hideOperationRight();
			}

		}else{
			//‘出’显示在右边
			this.view.showExitButtonRight();
			this.view.showOperationRight();
			this.view.setTipTextRight('往大堂');
			//判断是否可以有上层
			if(this.station.getUpperStrataLine())
			{
				this.view.showExitButtonLeft();
				this.view.hideExitButtonLeft();
				this.view.setTipTextLeft('往上層');
			}else{
				//没有只显示‘出'
				this.view.hideOperationLeft();
			}

		}

		this.runRail();
		await this.station.playIntroductionMP3();
		this.isArrowClick = true;
		this.view.initMouseOperation();

	}

	private async runRail(): Promise<void>
	{
		while(true)
		{
			await this.runLeftCar();
			
			await this.runRightCar();
		}
	}

	private async runLeftCar(): Promise<void>
	{
			this.view.runLeftCar();
			await lzlib.ThreadUtility.sleep(1500);
			//enable左箭头按钮
			this.isArrowClick && this.view.enableLeftArrow()
			await lzlib.ThreadUtility.sleep(3000);
			this.isArrowClick &&  this.view.disableLeftArrow();
	}

	private async runRightCar(): Promise<void>
	{
			this.view.runRightCar();
			await lzlib.ThreadUtility.sleep(1500);
			//enable右箭头按钮
			this.isArrowClick &&  this.view.enableRightArrow();
			await lzlib.ThreadUtility.sleep(3000);
			this.isArrowClick &&  this.view.disableRightArrow();
	}

	public onOperateLeftOut(e: egret.TouchEvent): void
	{
		this.view.hideTipLeft();
	}

	public onOperateRightOut(e: egret.TouchEvent): void
	{
		this.view.hideTipRight();
	}

	public onStrataClick(e: egret.TouchEvent): void
	{
		let operateGroup = (e.$currentTarget as eui.Group).$parent;
		let name = ((operateGroup.getChildByName('tip') as eui.Group).getChildByName('tipText') as eui.Label).text;
		if(name == this.lobby)
		{
			//往大堂
			if(this.station.stationName == CurrectJourneyRepository.arriving)
			{
				CurrectJourneyRepository.currectJourney == '旅程一' ? Main.instance.gotoScene(new Export1Scene()) : Main.instance.gotoScene(new Export2Scene());
			}else{
				lzlib.SoundUtility.playSound('sound 2 (inst_wrongDest.mp3)_mp3');
			}
		}else if(name == this.upperStrata)
		{
			//往上层
			let line = this.station.getUpperStrataLine();
			let position = line.getPositionByName(this.station.stationName);
			Main.instance.gotoScene(new WaitingScene(line, position));
		}else if(name == this.lowerStrata)
		{
			//往下层
			let line = this.station.getLowerStrataLine();
			let position = line.getPositionByName(this.station.stationName);
			Main.instance.gotoScene(new WaitingScene(line, position));
		}
	}

	public onArrowLeftClick(): void
	{
		// let line: Line = null;
		// if(this.station.isUpperStrata)
		// {
		// 	line = this.station.getUpperStrataLine();
		// }else{
		// 	line = this.station.getLowerStrataLine();
		// }
		let position = this.currentLine.getPositionByName(this.station.stationName);
		Main.instance.gotoScene(new MotorCarScene(this.currentLine, position, true));
	}

	public onArrowRightClick(): void
	{
		let position = this.currentLine.getPositionByName(this.station.stationName);
		Main.instance.gotoScene(new MotorCarScene(this.currentLine, position, false));
	}
	
}
