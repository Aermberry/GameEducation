class LeaveAndEnterScene4 extends eui.Component implements  eui.UIComponent {
	private leaverSchoolGroup:eui.Group;
	private enterParkGroup:eui.Group;

	private currentSoundChannl:egret.SoundChannel;

	
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
		this.playSoundToNextGroup();
	}

	private async playSoundToNextGroup():Promise<void>
	{
		// this.currentSoundChannl = (RES.getRes('leave_school_mp3') as egret.Sound).play(0,1);
		lzlib.SoundUtility.playSound("leave_school_mp3");
        await ThreadUtility.sleep(2500);
		this.stopSoundChannel();
		this.leaverSchoolGroup.visible = false;
		this.enterParkGroup.visible = true;
		this.enterPark();
	}

	private async enterPark():Promise<void>
	{
		// this.currentSoundChannl = (RES.getRes('enter_park_mp3') as egret.Sound).play(0,1);
		lzlib.SoundUtility.playSound("enter_park_mp3");
        await ThreadUtility.sleep(3000);
		Main.instance.gotoScene(new PhotoSCene5());
	}
	

	private stopSoundChannel():void
	{
		if( this.currentSoundChannl != null){
			this.currentSoundChannl.stop();
		}
	}
}