class SelectDifficultScene extends eui.Component implements  eui.UIComponent {
    private currentSoundChannel:egret.SoundChannel;
    private backGroup:eui.Group;
	private easyGroup:eui.Group;
	private proGroup:eui.Group;

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
		this.easyGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goEasyGoGameScene, this);
		this.proGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goProGoGameScene, this);
		this.currentSoundChannel = (RES.getRes('select_difficulty_scene_bgm_mp3') as egret.Sound).play(0,1);	

	}
	
	private goStartScene():void
	{
		this.stopCurrentSoundChannel();
		Main.instance.gotoScene(new StartScene());
	}
	
	private goEasyGoGameScene():void{
		this.stopCurrentSoundChannel();
		Main.instance.gotoScene(new EasyGoScene(new EasyQuestionRepository()));
	}

	private goProGoGameScene():void{
		this.stopCurrentSoundChannel();
		Main.instance.gotoScene(new EasyGoScene(new ProQuestionRepository()));
	}
    

	private stopCurrentSoundChannel():void
	{
        if(this.currentSoundChannel != null){
               this.currentSoundChannel.stop();
        } 
    }
}