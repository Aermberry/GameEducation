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

				var sound:egret.Sound = new egret.Sound();
				sound.once(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
					this.currentSoundChannel = sound.play(0, 1);
					this.currentSoundChannel.once(egret.Event.SOUND_COMPLETE, resolve, this);
				}, this);
				sound.once(egret.IOErrorEvent.IO_ERROR, function loadError(event: egret.IOErrorEvent) {
					reject(event);
				}, this);
				sound.load("audios/" + soundName);
			});
		}

		public static stopCurrentSound(): void
		{
			this.currentSoundChannel && this.currentSoundChannel.stop();
		}
	}
}