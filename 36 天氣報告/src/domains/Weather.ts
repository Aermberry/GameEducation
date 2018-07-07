class Weather {
	public constructor(audio: string, result: string) {
		this.audio = audio;
		this.result = result;
	}

	public audio: string; //天气预报的录音
	public result: string; //该地点的天气，可以是温度（用字符串表示）；可以是晴天、雨天、下雪，用图片的名称表示。
}