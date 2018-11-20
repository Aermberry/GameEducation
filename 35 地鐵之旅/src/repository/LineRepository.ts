class LineRepository {

	public line1: Line;
	public line2: Line;
	public line3: Line;
	private stationrepo = new StationRepository();

	public constructor() {
		this.line1 = new Line(this.stationrepo.stations1);
		this.line2 = new Line(this.stationrepo.stations2);
		this.line3 = new Line(this.stationrepo.stations3);
	}
}