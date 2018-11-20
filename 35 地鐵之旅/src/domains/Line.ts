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
		console.log(this.stations.length-1);
		console.log(this.stations[this.stations.length-1]);
		return this.stations[this.stations.length-1];
	}

	public getNextStation(): Station
	{
		return this.stations[this.position+1];
	}

	public getStartingStation(): Station
	{
		return this.stations[0];
	}

	// public getTerminalStation(): Station
	// {
	// 	return this.stations[--this.stations.length];
	// }

	public isLastStation(): boolean
	{
		return this.position >= (this.stations.length-1);
	}

	public isStartingStation(): boolean
	{
		return this.position == 0;
	}
}