class Scence01 extends eui.Component implements  eui.UIComponent {
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

		let data=RES.getRes("HittheGong.json");
		let textr=RES.getRes("HittheGong.png");
		let mcFactory:egret.MovieClipDataFactory= new egret.MovieClipDataFactory(data,textr);
		let mc1:egret.MovieClip=new egret.MovieClip(mcFactory.generateMovieClipData("mc1"));

		this.addChild(mc1);
		mc1.gotoAndPlay(1,-1);
	}	
}