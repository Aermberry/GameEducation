class StationAudio {
	
	public nextAudios: string[];
	public lastAudios: string[];

	public constructor(nextAudios = null, lastAudios = null) {
		this.nextAudios = nextAudios;
		this.lastAudios = lastAudios;
	}


	public async playNextStationMP3(): Promise<void>
	{
		for(let i = 0; i < this.nextAudios.length; i++)
		{
			await lzlib.SoundUtility.playSound(this.nextAudios[i]);
		}
	}

	public async playLastStationMP3(): Promise<void>
	{
		for(let i = 0; i < this.lastAudios.length; i++)
		{
			await lzlib.SoundUtility.playSound(this.lastAudios[i]);
		}
	}
}