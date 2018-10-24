namespace lzlib {
	export class SoundUtility {
		public static currentSoundChannel: egret.SoundChannel;

		public static playSound(soundName: string, stopCurrentSound: boolean = true): Promise<void>
		{
			return new Promise<void>((resolve, reject)=> {
				if (this.currentSoundChannel && stopCurrentSound) {
					//默认先暂停当前的声音
					this.currentSoundChannel.stop();
				}

				this.currentSoundChannel = (RES.getRes(soundName) as egret.Sound).play(0, 1);
				this.currentSoundChannel.once(egret.Event.SOUND_COMPLETE, resolve, this);
			});
		}

		public static stopCurrentSound(): void
		{
			this.currentSoundChannel && this.currentSoundChannel.stop();
		}
	}
}