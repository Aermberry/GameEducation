class SelectDiffcultScene extends eui.Component implements  eui.UIComponent {
    private backGroup:eui.Group;
	private easyGroup:eui.Group;
	private proGroup:eui.Group;
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
		mouse.setButtonMode(this.backGroup, true);
		mouse.setButtonMode(this.easyGroup, true);
		mouse.setButtonMode(this.proGroup, true);		
        
		this.currentSoundChannel = (RES.getRes('select_difficulty_scene_bgm_mp3') as egret.Sound).play(0,1);
		this.backGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goStartScene, this);

		this.easyGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goEasyGameScene, this);
		this.proGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goProGameScene, this);	
			
		
	}

	private goEasyGameScene():void
	{
		this.stopCurrentSoundChannel();
		Main.instance.gotoScene(new PlayingScene(Difficulty.easy));
	}

	private goProGameScene():void
	{
		this.stopCurrentSoundChannel();
		Main.instance.gotoScene(new PlayingScene(Difficulty.pro));
	}

	private goStartScene():void
	{
        this.stopCurrentSoundChannel();
		Main.instance.gotoScene(new StartScene());
	}

	private stopCurrentSoundChannel():void
	{
		if(this.currentSoundChannel != null)
		{
          this.currentSoundChannel.stop();
		}
	}
	
	
}