class Station {

	private nextStation: string;
	private lastStation: string;
	private terminalStation: string;
	private startingStation: string;
	private isUpperStrata: boolean; //当前站点是否在上层
	private isHaveUpperStrat: boolean;//当前站点是否有上层
	private isHaveLowerStrat: boolean;//当前站点是否有下层
	private isHaveExitDoor: boolean;//当前站点是否可以出口

	public constructor() {
	}
}