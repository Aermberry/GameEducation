class ProGoScene extends eui.Component implements  eui.UIComponent {
    private playGameGroup:eui.Group;
	private backGroup:eui.Group;
	private currentSoundChannel:egret.SoundChannel;

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
        
		this.backGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goStartScene, this);
		this.playGameGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playGameScene, this);
        this.currentSoundChannel = (RES.getRes('select_difficulty_scene_bgm_mp3') as egret.Sound).play(0,1);	

	}

	private goStartScene():void
	{
		this.stopCurrentSoundChannel();
		Main.instance.gotoScene(new StartScene());
	}
	
	private playGameScene():void
	{
		this.stopCurrentSoundChannel();
		// Main.instance.gotoScene(new ());
	}

	private stopCurrentSoundChannel():void
	{
        if(this.currentSoundChannel != null){
               this.currentSoundChannel.stop();
        } 
    }
	
}