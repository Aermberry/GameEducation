class DragData {
	public constructor(type: DragType, data: number, sourceSceneId: number = -1) 
	{
		this.type = type;
		this.data = data;
		this.sourceSceneId = sourceSceneId;
	}

	public type: DragType = null;
	public data = -1;
	public sourceSceneId = -1;
}