class SelectDiffcultScene extends eui.Component implements  eui.UIComponent {
    private back_Image:eui.Group;
	private EasyModel_Group:eui.Group;
	private proModel_Group:eui.Group;
	private currentSoundChannel:egret.SoundChannel;
	private MovieClip:MovieClipPlayer;
	private exampleMovieClip_Group:eui.Group;


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
		mouse.setButtonMode(this.back_Image, true);
		mouse.setButtonMode(this.EasyModel_Group, true);
		mouse.setButtonMode(this.proModel_Group, true);		
        
		this.currentSoundChannel = (RES.getRes('select_difficulty_scene_bgm_mp3') as egret.Sound).play(0,1);
		this.back_Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goStartScene, this);

		this.EasyModel_Group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goEasyGameScene, this);
		this.proModel_Group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goProGameScene, this);	
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