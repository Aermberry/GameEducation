class Station {

	// private nextStation: string;
	// private lastStation: string;
	// private terminalStation: string;
	// private startingStation: string;
	private mp3: string[]; //站点播放的MP3
	private background: string;//站点背景
	private stationName: string;//站点名称
	private upperStrataLine: Line;
	private lowerStrataLine: Line;
	public isUpperStrata: boolean; //当前站点是否在上层
	public isHaveUpperStrat: boolean;//当前站点是否有上层
	public isHaveLowerStrat: boolean;//当前站点是否有下层


	public constructor(mp3:string[],background:string,name:string,upperLine:Line,lowerLine:Line,isUpper:boolean) {
		
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

	private async playIntroductionMP3(): Promise<void>
	{
		for(let i = 0; i < this.mp3.length; i++)
		{
			await lzlib.SoundUtility.playSound(this.mp3[i]);
		}
	}

}