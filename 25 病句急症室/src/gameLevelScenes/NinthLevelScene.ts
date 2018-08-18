class NinthLevelScene extends eui.Component implements  eui.UIComponent {
	private exitBtn:ExitButton;
	private blueFrameTweenGroup:egret.tween.TweenGroup;
	private exitTipLabel:eui.Label;
	private yes:YesOrNoButton;
	private no:YesOrNoButton;
	private blueFrame:eui.Image;
	private currentSoundChannel:egret.SoundChannel;

	private cueButton: eui.Button;
	private cueGroup: eui.Group;
	private returnGroup: eui.Group;
	
	private wordGroup: eui.Group;
	private correctGroup:eui.Group;
	private correctLabel: eui.Label;

	private trashGroup: eui.Group;

	private doctorAngryTweenGroup:egret.tween.TweenGroup;
	private trashComplexTweenGroup:egret.tween.TweenGroup;
	private doctorBlinkImg:eui.Image;
	private doctorAngryImg:eui.Image;

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
		mouse.setButtonMode(this.exitBtn, true);
		mouse.setButtonMode(this.cueButton, true);

		
		this.exitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.confrimToExit, this);
		this.cueButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cueBoxTouchEevnt, this);
		this.returnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReturnGroupClick, this);

		for (let index = 0; index < this.wordGroup.numChildren; index++) {
			let child = this.wordGroup.getChildAt(index);
			let drag = new lzlib.Drag();
			this.addChild(drag);
			drag.enableDrag(child, false, index);
		}

		let drop = new lzlib.Drop();
		this.stage.addChild(drop);
		drop.enableDrop(this.trashGroup);
		this.trashGroup.addEventListener(lzlib.LzDragEvent.DROP, this.onTrashDrop, this);
	}

	private async onTrashDrop(e: lzlib.LzDragEvent):Promise<void>
	{
		if ((e.data as number) == 5) {
            e.preventDefault();
			this.trashGroup.removeEventListener(lzlib.LzDragEvent.DROP, this.onTrashDrop, this);
			this.stage.removeChild(e.dragObject);
			
			lzlib.SoundUtility.playSound('sound 77 (over to down )_mp3');
			await this.trashComplexTweenGroup.playOnceAsync();
			await lzlib.SoundUtility.playSound('sound 78_mp3');
			this.correctGroup.visible = true;
			this.wordGroup.visible = false;			
			this.doctorAngryImg.visible = false;
			this.doctorBlinkImg.visible = true;
			await lzlib.ThreadUtility.sleep(1500);
			Main.instance.gotoScene(new TenthLevelScene());
		}
		else{
           await this.doctorAngryTweenGroup.playOnceAsync();
		}
	}  

	private cueBoxTouchEevnt():void
	{   
		this.stopCurrentSoundChannel();
		this.cueButton.currentState = 'down';
		this.cueGroup.visible = true;
	    this.currentSoundChannel = (RES.getRes('cue_box_bgm_mp3') as egret.Sound).play(0,1);	
	}

	private onReturnGroupClick(): void
	{
		this.cueGroup.visible = false;
		this.cueButton.currentState = 'up';
	}

	private async confrimToExit():Promise<void>
	{   
		this.blueFrame.visible = true;
        this.blueFrameTweenGroup.play(0);
		await lzlib.ThreadUtility.sleep(500);
		this.exitTipLabel.visible = true;
		this.yes.visible = true;
		this.no.visible = true;
		this.yes.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>window.close(), this);
		this.no.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new FirstLevelScene()), this);
	}

	private stopCurrentSoundChannel():void
	{
        if(this.currentSoundChannel != null){
               this.currentSoundChannel.stop();
        } 
    }
	
}
