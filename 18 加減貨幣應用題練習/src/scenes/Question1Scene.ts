class Question1Scene extends eui.Component implements  eui.UIComponent {
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

	private movieClip(){
		var data=RES.getRes("beer.json");
		var txtr=RES.getRes("beer.png");
		var mcFactory:egret.MovieClipDataFactory=new egret.MovieClipDataFactory(data,txtr);

		var mc1:egret.MovieClip=new egret.MovieClip(mcFactory.generateMovieClipData("mc1"));
		this.addChild(mc1);
		mc1.gotoAndPlay("start",3);
	}
	
}