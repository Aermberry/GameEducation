class SceneCompareResult {
	public isPlaceEqual = false;
	public isPersonEqual = false;
	public isThingEqual = false;

	public constructor() {
	}

	public get isAllEqual(): boolean
	{
		return this.isPlaceEqual && this.isPersonEqual && this.isThingEqual;
	}
}