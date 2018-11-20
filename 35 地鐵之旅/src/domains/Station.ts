class Station {

	// private nextStation: string;
	// private lastStation: string;
	// private terminalStation: string;
	// private startingStation: string;
	private mp3: string[]; //站点播放的MP3
	private background: string;//站点背景
	private upperStrataLine: Line;
	private lowerStrataLine: Line;
	private exitInLeft: boolean;
	public stationName: string;//站点名称
	public isUpperStrata: boolean; //当前站点是否在上层
	public is1And2Marking: boolean; 
	// public isHaveUpperStrat: boolean;//当前站点是否有上层
	// public isHaveLowerStrat: boolean;//当前站点是否有下层


	public constructor(mp3:string[],background:string,name:string,upperLine = null,lowerLine = null,isUpper = true,exitInLeft = true,is1And2 = true) {
		this.mp3 = mp3;
		this.background = background;
		this.stationName = name;
		this.upperStrataLine = upperLine;
		this.lowerStrataLine = lowerLine;
		this.isUpperStrata = isUpper;
		this.exitInLeft = exitInLeft;
		this.is1And2Marking = is1And2;
	}

	//设置‘出’显示在left or right

	public set isExitInLeft(bool: boolean)
	{
		this.exitInLeft = bool;
	}

	public get isExitInLeft(): boolean
	{
		return this.exitInLeft;
	}

	//设置当前是什么月台，如3和4月台

	public set is1And2(bool: boolean)
	{
		this.is1And2Marking = bool;
	}

	public get is1And2(): boolean
	{
		return this.is1And2Marking;
	}

	public getUpperStrataLine(): Line
	{
		return this.upperStrataLine;
	}

	public getLowerStrataLine(): Line
	{
		return this.lowerStrataLine;
	}

	public getBackground(): string
	{
		return this.background;
	}

	public async playIntroductionMP3(): Promise<void>
	{
		for(let i = 0; i < this.mp3.length; i++)
		{
			await lzlib.SoundUtility.playSound(this.mp3[i]);
		}
	}

}