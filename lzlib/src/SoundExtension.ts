namespace lzlib {
	export class SoundUtility {
		public static playSound(soundName: string): Promise<void>
		{
			return new Promise<void>((resolve, reject)=> {
				(RES.getRes(soundName) as egret.Sound).play(0, 1)
					.once(egret.Event.SOUND_COMPLETE, resolve, this);
			});
		}
	}
}