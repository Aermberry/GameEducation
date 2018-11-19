class CurrectJourneyRepository {

	public static currectJourney = '旅程一';
	public static startDate = new Date;
	public static termiuns = 'huaguoshan';

	private termiunAudios = {
		'huaguoshan': 'sound 12 (inst_mission_dest_mount.mp3)_mp3',
		'hailong': 'sound 11 (inst_mission_dest_park.mp3)_mp3'
	};

	public constructor() {
	}

	public async playTermiunsMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound(this.termiunAudios[CurrectJourneyRepository.termiuns]);
	}


}