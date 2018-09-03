class Start1Scene extends eui.Component implements  eui.UIComponent {
	
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
		this.nextQuestionComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionComponentTap, this);
	}

	private onNextQuestionComponentTap(): void
	{
		Main.instance.gotoScene(new Start2Scene());
	}
	
}