class StartScene extends eui.Component implements  eui.UIComponent {
	private titleLabel:eui.Label;
 	private nextButton:eui.Button;
	private sound:egret.Sound;
	private soundChannel:egret.SoundChannel;
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
		this.drawLine(this.titleLabel, this);
		this.sound=RES.getRes("01_mp3");
		this.soundChannel=this.sound.play(0,1);
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.nextScene,this);
	}

	private nextScene():void{
		Main.instance.gotoScene(new MainScene());
		this.stopSound();
	}
	
	private stopSound() {
		var channel:egret.SoundChannel=this.soundChannel;
		if(channel){
			channel.stop();
			this.soundChannel=null;
			return;
		}
	}

	public drawLine(label:eui.Label,Sence:eui.Component,color:number=0x951602): void{
		let x0=label.x;
		let y0=label.y;	
		let x1=x0+label.width;
		let shp:egret.Shape=new egret.Shape();
		label.textColor=color;
		shp.graphics.lineStyle(5,color);
		shp.graphics.moveTo(x0,y0);
		shp.graphics.lineTo(x1,y0);
		shp.graphics.endFill();
		Sence.addChild(shp);
	}
	
}