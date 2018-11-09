class DecorationInfo {

	private _alertInfo = '';
	private _audio = '';

	public constructor(alertInfo,audio) {
		this._alertInfo = alertInfo;
		this._audio = audio;
	}

	public get alertInfo(): string
	{
		return this._alertInfo;
	}

	public playMP3(): void
	{
		lzlib.SoundUtility.playSound(this._audio);
	}
}