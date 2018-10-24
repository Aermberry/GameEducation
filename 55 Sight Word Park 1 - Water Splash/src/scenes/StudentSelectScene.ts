class StudentSelectScene extends eui.Component implements  eui.UIComponent {

	private  back_Image:eui.Group;
	private  StudenModel_Group:eui.Group;
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
		mouse.setButtonMode(this.back_Image, true);
		
		this.currentSoundChannel = (RES.getRes('select_difficulty_scene_bgm_mp3') as egret.Sound).play(0,1);
		this.back_Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goStartScene, this);
		this.StudenModel_Group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goNextScene, this);
	}
    
	private goNextScene():void
	{   
		this.stopCurrentSoundChannel();
	    Main.instance.gotoScene(new SelectDiffcultScene());
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