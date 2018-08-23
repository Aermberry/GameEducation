class gameScene extends eui.Component implements  eui.UIComponent {
	private helpButton:eui.Button;
	private flower:eui.Image;
	private text_plant:eui.Label;
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
		this.helpButton.addEventListener(egret.TouchEvent.TOUCH_TAP,function():void{
			Main.instance.gotoScene(new tipsScene())
		},this);
		this.startGame();
	}

	private async startGame():Promise<void>{
		await lzlib.SoundUtility.playSound('01a_mp3');
		this.helpButton.visible=true;
		this.flower.visible=true;
		this.text_plant.visible=true;
	}
	
}