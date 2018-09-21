class QuestionScene extends eui.Component implements  eui.UIComponent {
	
	private optionGroup1: eui.Group;
	private optionGroup4: eui.Group;
	
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
		let mcFactory = new egret.MovieClipDataFactory(RES.getRes('picture4_json'), RES.getRes('picture4_png'));
		let mc = new egret.MovieClip(mcFactory.generateMovieClipData('picture4'));
		this.optionGroup4.addChild(mc);
		mc.play(-1);
		console.log(this.optionGroup4);
	}
	
}