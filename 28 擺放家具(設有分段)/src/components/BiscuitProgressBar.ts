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
		for (let index = this.baseCount; index < inCorrectPlaceCount; index++) {
			(this.getChildAt(index) as BiscuitComponent).currentState = 'correct';
		}

		for (let index = this.baseCount + inCorrectPlaceCount; index < inWrongPlaceCount; index++) {
			(this.getChildAt(index) as BiscuitComponent).currentState = 'wrong';
		}
	}
}