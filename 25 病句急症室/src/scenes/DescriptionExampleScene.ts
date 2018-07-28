class DescriptionExampleScene extends eui.Component implements  eui.UIComponent {
	private cueBoxImg:eui.Image;
	private blueFrameDialogImg:eui.Image;
    private blueFrameFirstDialogLabel:eui.Label;
	private blueFrameSecondDialogLabel:eui.Label;
	private blueFrameThirdDialogLabel:eui.Label;

    private exampleFirstDialog:eui.Label;
    private exampleSecondtDialog:eui.Label;
    private exampleThirdDialog:eui.Label;
	
	private beginbutton:BeginButton;
	private currentSoundChannel:egret.SoundChannel;
    private exitBtn:ExitButton;

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
		mouse.enable(this.stage);
        mouse.setButtonMode(this.cueBoxImg, true);
		mouse.setButtonMode(this.exitBtn, true);
		mouse.setButtonMode(this.beginbutton, true);

		this.initExitBtn();
		this.goNextDialog();
		this.cueBoxImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playTouchCueBoxSOund, this);
	}

	private playTouchCueBoxSOund() {
		this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('cue_box_bgm_mp3') as egret.Sound).play(0,1)
	}

	private async goNextDialog():Promise<void> {
		await lzlib.ThreadUtility.sleep(4000);
		this.blueFrameDialogImg.visible = false;
		this.blueFrameFirstDialogLabel.visible = false;
		this.blueFrameSecondDialogLabel.visible = false;
		this.blueFrameThirdDialogLabel.visible = false;
		this.showExample();
	}
    
	private async showExample():Promise<void> {
        this.exampleFirstDialog.alpha = 1;
		this.exampleSecondtDialog.alpha = 1;
		this.exampleThirdDialog.alpha = 1;
		
		await lzlib.ThreadUtility.sleep(4000);
		this.showBeginBtn();
		

	}
	private showBeginBtn() {
		this.beginbutton.visible = true;
		this.beginbutton.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new DescriptionGameplayScene()), this);
	}

	private initExitBtn() {
		this.exitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.exitGame, this);
	}
	private exitGame() {
		window.close();
	}
    
	private stopCurrentSoundChannel():void{
        if(this.currentSoundChannel != null){
               this.currentSoundChannel.stop();
        } 
    }

	
}