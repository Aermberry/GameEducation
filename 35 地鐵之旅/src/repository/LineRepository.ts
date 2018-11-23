class LineRepository {

	public line1 = new Line();
	public line2 = new Line();
	public line3 = new Line();
	public stations1: Station[];
	public stations2: Station[];
	public stations3: Station[];

	private stationAudioRepo = new StationAudioRepository();
	
	private line2Audios = ['sound 21 (goes.mp3)_mp3','sound 36 (ep_st_apple.mp3)_mp3','sound 27 (go_1.mp3)_mp3','sound 21 (goes.mp3)_mp3','sound 35 (ep_st_banana.mp3)_mp3','sound 24 (go_2.mp3)_mp3'];

	public constructor() {



		this.stations1 = [
			new Station(['sound 21 (goes.mp3)_mp3','sound 33 (ep_st_sun.mp3)_mp3','sound 26 (go_1_2.mp3)_mp3'],this.stationAudioRepo.hailong,'pillar_blue_png','海龍公園站',this.line1),
			new Station(['sound 21 (goes.mp3)_mp3','sound 34 (ep_st_park.mp3)_mp3','sound 22 (go_3and4.mp3)_mp3'],this.stationAudioRepo.taiyang1,'pillar_orange_png','太陽站',this.line2,this.line1,false,true,false),
		],
		this.stations2 = [
			new Station(this.line2Audios, this.stationAudioRepo.xiangjiao2,'pillar_yellow_png','香蕉站',this.line2,this.line3),
			new Station(this.line2Audios,this.stationAudioRepo.taohua,'pillar_pink_png','桃花站',this.line2),
			new Station(this.line2Audios,this.stationAudioRepo.taiyang2,'pillar_orange_png','太陽站',this.line2,this.line1),
			new Station(this.line2Audios,this.stationAudioRepo.huaguo,'pillar_pink2_png','花果山站',this.line2),
			new Station(this.line2Audios,this.stationAudioRepo.lizhi,'pillar_blue_png','荔枝園站',this.line2),
			new Station(this.line2Audios,this.stationAudioRepo.juhua,'pillar_yellow_png','菊花站',this.line2),
			new Station(this.line2Audios,this.stationAudioRepo.pingguo,'pillar_red_png','蘋果站',this.line2)
		]
		this.stations3 = [
			new Station(['sound 21 (goes.mp3)_mp3','sound 35 (ep_st_banana.mp3)_mp3','sound 26 (go_1_2.mp3)_mp3'],this.stationAudioRepo.jichang,'pillar_gray_png','機場站',this.line3),
			new Station(['sound 21 (goes.mp3)_mp3','sound 37 (ep_st_airport.mp3)_mp3','sound 22 (go_3and4.mp3)_mp3'],this.stationAudioRepo.xiangjiao3,'pillar_yellow_png','香蕉站',this.line2,this.line3,false,true,false),
		]

		this.line1.setStations(this.stations1);
		this.line2.setStations(this.stations2);
		this.line2.color = 0xFF001B;
		this.line3.setStations(this.stations3);
		this.line3.color = 0x369924;

	}
}