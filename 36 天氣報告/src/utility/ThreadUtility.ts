class ThreadUtility {
	public static sleep(ms = 0) {
    	return new Promise(r => setTimeout(r, ms));
	}

	public static playSound(soundName: string): Promise<egret.SoundChannel>
	{
		return new Promise<egret.SoundChannel>((resolve, reject)=> {
			return (RES.getRes(soundName) as egret.Sound).play(0, 1)
				.once(egret.Event.SOUND_COMPLETE, resolve, this);
		});
	}
}