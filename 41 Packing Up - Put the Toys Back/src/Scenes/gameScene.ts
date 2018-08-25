class GameScene extends eui.Component implements  eui.UIComponent {
	private helpButton:eui.Button;
	private toysImage:eui.Image;
	private toyNameLabel:eui.Label;
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
			Main.instance.gotoScene(new TipsScene())
		},this);
		this.startGame(); 
	}

	private async startGame():Promise<void>{
		await lzlib.SoundUtility.playSound('01b_mp3');
		this.toysImage.visible = true;
		this.toyNameLabel.visible = true;
		await lzlib.ThreadUtility.sleep(500);
		this.helpButton.visible = true;
	}


	
}