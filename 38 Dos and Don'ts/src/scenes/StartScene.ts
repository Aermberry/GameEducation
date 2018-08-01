class StartScene extends eui.Component implements  eui.UIComponent {
    private currentSoundChannl:egret.SoundChannel;

	private bannerTweenGroup:egret.tween.TweenGroup;


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
		this.playAnimationToNextScene();
		
	}

	private async playAnimationToNextScene():Promise<void>
	{    
		this.bannerTweenGroup.play(0);
		
		this.currentSoundChannl = (RES.getRes('amy_go_shcool_mp3') as egret.Sound).play(0);
		await ThreadUtility.sleep(3000);		
		this.goNextScene();
	}
	
	private  goNextScene()
	{
		this.currentSoundChannl.stop();
		Main.instance.gotoScene(new BookSence1());
	}
		
}