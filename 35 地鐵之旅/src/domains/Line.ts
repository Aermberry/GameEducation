class Line {

	private stations: Station[];

	private position: number;

	public constructor() {
		
	}

	public setStations(stations: Station[]): void
	{
		this.stations = stations;
	}

	public getCurrectStation(position: number): Station
	{
		this.position = position;
		return this.stations[position];
	}

	public getLastStation(): Station
	{
		return this.stations[this.position-1];
	}

	public getNextStation(): Station
	{
		return this.stations[this.position+1];
	}

	public nextStationCursor(): number
	{
		return this.position++;
	}

	public lastStationCursor(): number
	{
		return this.position--;
	}

	public getStartingStation(): Station
	{
		return this.stations[0];
	}

	public getTerminalStation(): Station
	{
		return this.stations[this.stations.length-1];
	}

	public isLastStation(): boolean
	{
		return this.position >= (this.stations.length-1);
	}

	public isStartingStation(): boolean
	{
		return this.position == 0;
	}

	public getPositionByName(name: string): number
	{
		for(let i = 0; i < this.stations.length; i++)
		{
			if(name == this.stations[i].stationName) return i
		}
	}

	public getPosition(): number
	{
		return this.position;
	}
}