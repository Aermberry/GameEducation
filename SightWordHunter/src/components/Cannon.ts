class Cannon extends eui.Component implements  eui.UIComponent {
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
	
	public setCurrentState(value: string)
	{
		this.currentState = value;
		(RES.getRes('sound_effect_kacha_mp3') as egret.Sound).play(0, 1);
	}
}