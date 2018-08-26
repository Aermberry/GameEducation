class BiscuitProgressBar extends eui.Component implements  eui.UIComponent {

	private baseCount = 0;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public addProgressBarBaseCount(delta: number): void
	{
		this.baseCount += delta;
	}

	public updateProgress(inCorrectPlaceCount: number, inWrongPlaceCount: number): void 
	{
		for (let index = 0; index < inCorrectPlaceCount; index++) {
			(this.getChildAt(this.baseCount + index) as BiscuitComponent).currentState = 'correct';
		}

		for (let index = 0; index < inWrongPlaceCount; index++) {
			(this.getChildAt(this.baseCount + inCorrectPlaceCount + index) as BiscuitComponent).currentState = 'wrong';
		}
	}
}