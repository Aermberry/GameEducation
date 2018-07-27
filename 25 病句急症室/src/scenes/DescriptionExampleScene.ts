class DescriptionExampleScene extends eui.Component implements  eui.UIComponent {
	private cueBoxImg:eui.Image;
	private blueFrameDialogImg:eui.Image;
	private beginBtn:eui.Image;
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
		this.goNextDialog();
		this.cueBoxImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playTouchCueBoxSOund, this);
	}

	private playTouchCueBoxSOund() {
		this.currentSoundChannel = (RES.getRes('cue_box_bgm_mp3') as egret.Sound).play(0)
	}

	private async goNextDialog():Promise<void> {
		await lzlib.ThreadUtility.sleep(4000);
		this.showExample();
	}
    
	
	private async showExample():Promise<void> {
		await lzlib.ThreadUtility.sleep(4000)
		this.beginBtn.visible = true;
		this.beginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new DescriptionGameplayScene()), this);

	}
    
	private stopCurrentSoundChannel():void{
        if(this.currentSoundChannel != null){
               this.currentSoundChannel.stop();
        } 
    }
	
}