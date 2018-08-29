class Game1Scene extends eui.Component implements  eui.UIComponent {
	
	private nameGroup: eui.Group;
	private nextQuestionGroup: eui.Group;
	private contentComponent: ContentComponent;

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
		this.enableDrag();
		this.nextQuestionGroup.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNextQuestionTap,this);
	}

	private enableDrag():void
	{
		for (let index = 0; index < this.nameGroup.numChildren; index++) {
			let child = this.nameGroup.getChildAt(index);
			let drag = new lzlib.Drag();
			this.addChild(drag);
			drag.enableDrag(child, false, index);
		}
	}

	private onNextQuestionTap()
	{
		this.contentComponent.isFinish()==true?Main.instance.gotoScene(new Game2Scene):false;
	}
	
}