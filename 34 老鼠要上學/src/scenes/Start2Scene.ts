class Start2Scene extends eui.Component implements  eui.UIComponent {
	
	public nextQuestionComponent: NextQuestionComponent;
	
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
		console.log(this.nextQuestionComponent);
		this.nextQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionComponentTap, this);
	}

	private onNextQuestionComponentTap(): void
	{
		console.log(12345);
		Main.instance.gotoScene(new Start3Scene());
	}
	
}