class DragData {
	public constructor(type: DragType, dataId: number, sourceSceneId: number = -1) 
	{
		this.type = type;
		this.dataId = dataId;
		this.sourceSceneId = sourceSceneId;
	}

	public type: DragType = null;
	public dataId = -1;
	public sourceSceneId = -1;
}