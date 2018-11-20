class Line {

	private stations: Station[];

	private position: number;

	public constructor(stations: Station[]) {
		this.stations = stations;
	}

	public getCurrectStation(position: number): Station
	{
		this.position = position;
		return this.stations[position];
	}

	public getLastStation(): Station
	{
		return this.stations[--this.position];
	}

	public getNextStation(): Station
	{
		return this.stations[++this.position];
	}

	public getStartingStation(): Station
	{
		return this.stations[0];
	}

	public getTerminalStation(): Station
	{
		return this.stations[--this.stations.length];
	}
}