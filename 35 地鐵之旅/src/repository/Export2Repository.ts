class Export2Repository {

	private exportAudios = {
		'A':'sound 32 (exit_A.mp3)_mp3',
		'B':'sound 31 (exit_B.mp3)_mp3',
		'C':'sound 30 (exit_C.mp3)_mp3',
		'D':'sound 29 (exit_D.mp3)_mp3',
		'E':'sound 28 (exit_E.mp3)_mp3'
	};
	private derectionAudios = {
		'A':'sound 66 (dest_carpark.mp3)_mp3',
		'B':'sound 62 (dest_park.mp3)_mp3',
		'C':'sound 68 (dest_busTerminus.mp3)_mp3',
		'D':'sound 63 (dest_office.mp3)_mp3',
		'E':'sound 64 (dest_oceanWorld.mp3)_mp3'
	};

	public constructor() {
	}

	public async playMP3(ep: string): Promise<void>
	{
		await lzlib.SoundUtility.playSound(this.exportAudios[ep]);
		await lzlib.SoundUtility.playSound('sound 21 (goes.mp3)_mp3');
		await lzlib.SoundUtility.playSound(this.derectionAudios[ep]);
	}

	public playWrongMP3(): void
	{
		lzlib.SoundUtility.playSound('sound 1 (inst_wrongExit.mp3)_mp3');
	}

	public playCompleteMP3(): void
	{
		lzlib.SoundUtility.playSound('sound 16 (inst_complete.mp3)_mp3');
	}
}