class DescriptionGameplayScene extends eui.Component implements  eui.UIComponent {
    private cueBoxImg:eui.Image;
	private currentSoundChannel:egret.SoundChannel;
	
	private blueDialogImg:eui.Image;
	private firstDialogLabel:eui.Label;
	private secondDialogLabel:eui.Label;

	private doctorGroup:eui.Group;
	private doctorSmellImgae:eui.Image;
	private beginBtn:BeginButton;

	private doctorMovieClip:egret.MovieClip;
	private doctorFactory:egret.MovieClipDataFactory;

	private goldYellowDialogImg:eui.Image;
	private goldYellowDialogFisrstLabel:eui.Label;
	private goldYellowDialogSecondLabel:eui.Label;

	private firstLineDialog:eui.Label;
	private secondLineDialog:eui.Label;
	private thirdLineDialog:eui.Label;
	private forthLineDialog:eui.Label;

	private eixtBtn:ExitButton;
	
	public constructor() 
	{
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
        mouse.setButtonMode(this.eixtBtn, true);
        mouse.setButtonMode(this.beginBtn, true);
        mouse.setButtonMode(this.cueBoxImg, true);
		
		this.initExitBtn();
		this.cueBoxImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playTouchCueBoxSOund, this);

        this.doctorFactory = new egret.MovieClipDataFactory(RES.getRes('doctor_say_json'), RES.getRes('doctor_say_png'));
		this.doctorMovieClip = new egret.MovieClip(this.doctorFactory.generateMovieClipData('doctor_say'));
		this.doctorGroup.addChild(this.doctorMovieClip);
		this.doctorMovieClip.play(0);
		
		this.showNextDialog();
	}

	private async showNextDialog():Promise<void> 
	{   	
		await lzlib.ThreadUtility.sleep(2500);
		this.blueDialogImg.visible = false;
		this.firstDialogLabel.visible = false;
		this.secondDialogLabel.visible = false;

		this.goldYellowDialogImg.visible = true;
		this.goldYellowDialogFisrstLabel.visible = true;
		this.goldYellowDialogSecondLabel.visible = true;

		this.showBeginBtn();
	}

	private async showBeginBtn():Promise<void> 
	{
		await lzlib.ThreadUtility.sleep(2000);
		this.goldYellowDialogImg.visible = false;
		this.goldYellowDialogFisrstLabel.visible = false;
		this.goldYellowDialogSecondLabel.visible = false;
		
		this.doctorGroup.removeChild(this.doctorMovieClip);
		this.doctorSmellImgae.visible = true;
		this.firstLineDialog.visible = true;
		this.secondLineDialog.visible = true;
		this.thirdLineDialog.visible = true;
		this.forthLineDialog.visible = true;
		this.initBeginBtn();
	}

	private async initBeginBtn():Promise<void>
	{   
		await lzlib.ThreadUtility.sleep(2000);
		this.beginBtn.visible = true;
		this.beginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goPlayGameScene, this);
	}

	private goPlayGameScene():void 
	{
		this.stopCurrentSoundChannel();
		Main.instance.gotoScene(new FirstLevelScene());
	}

	private initExitBtn():void
	{
		this.eixtBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.exitGame, this);
	}
	private exitGame():void
	{
		this.stopCurrentSoundChannel();
		window.close();
	}

	private playTouchCueBoxSOund():void
	{   
		this.stopCurrentSoundChannel();
	    this.currentSoundChannel = (RES.getRes('cue_box_bgm_mp3') as egret.Sound).play(0,1);	
	}

	private stopCurrentSoundChannel():void
	{
        if(this.currentSoundChannel != null)
		{
               this.currentSoundChannel.stop();
        } 
    }
	
}