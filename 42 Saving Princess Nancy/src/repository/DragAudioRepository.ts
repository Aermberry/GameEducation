class DragAudioRepository {

	private audios = {
		'gown': 'gown_mp3',
		'crown': 'crown_mp3',
		'gentle': 'gentle_mp3',
		'gloves': 'gloves_mp3',
		'nightingale': 'nightingale_mp3'
	}

	public constructor() {
	}

	public async playMP3(name: string): Promise<void>
	{
		await lzlib.SoundUtility.playSound(this.audios[name]);
	}

	public stopMP3(): void
	{
		lzlib.SoundUtility.stopCurrentSound();
	}
}