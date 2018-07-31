class TenthLevelScene extends eui.Component implements  eui.UIComponent {
	private exitBtn:ExitButton;
	private blueFrameTweenGroup:egret.tween.TweenGroup;
	private exitTipLabel:eui.Label;
	private yes:YesOrNoButton;
	private no:YesOrNoButton;
	private blueFrame:eui.Image;
	private cueBoxImg:eui.Image;
	private cueBoxOpenImg:eui.Image;
	private currentSoundChannel:egret.SoundChannel;

	private greenFrame:eui.Image;
	private firstTipLabel:eui.Label;
	private secondTipLabel:eui.Label;
	private returnBtnImg:eui.Image;
	private returnLabel:eui.Label;
	private returnGroup:eui.Group;
	
	private wordGroup: eui.Group;
	private correctGroup:eui.Group;


	private trashCanImg: eui.Image;
	private trashGroup: eui.Group;

	private doctorBlinkTweenGroup:egret.tween.TweenGroup;
	private doctorAngryTweenGroup:egret.tween.TweenGroup;
	private trashComplexTweenGroup:egret.tween.TweenGroup;
	private doctorBlinkImg:eui.Image;
	private docotrorTipImg:eui.Image;
    private doctorTipLabel:eui.Label;
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
		mouse.setButtonMode(this.cueBoxImg, true);

		
		this.exitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.confrimToExit, this);
		this.cueBoxImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cueBoxTouchEevnt, this);

		for (let index = 0; index < this.wordGroup.numChildren; index++) {
			let child = this.wordGroup.getChildAt(index);
			let drag = new lzlib.Drag();
			this.stage.addChild(drag);
			drag.enableDrag(child, true, index);
		}

		let drop = new lzlib.Drop();
		this.addChild(drop);
		drop.enableDrop(this.trashGroup);
		this.trashGroup.addEventListener(lzlib.LzDragEvent.DROP, this.onTrashDrop, this);
	}

	private async onTrashDrop(e: lzlib.LzDragEvent):Promise<void>
	{
        console.log('执行了onTrashDrop');
		console.log('drop index: ' + e.data);

		if ((e.data as number) == 1) {
            e.preventDefault();
			this.correctGroup.visible = true
			this.wordGroup.visible = false;	
			this.doctorAngryImg.visible = false;
			this.doctorBlinkImg.alpha = 1;
			this.doctorBlinkTweenGroup.play(0);
			this.trashComplexTweenGroup.play(0);
			await lzlib.ThreadUtility.sleep(300);
			this.doctorBlinkTweenGroup.stop();
			this.trashComplexTweenGroup.stop();
			Main.instance.gotoScene(new ResultScene());
		}
		else{
		   this.docotrorTipImg.visible = true;
		   this.doctorTipLabel.visible =true;
           this.doctorAngryTweenGroup.play(0);
		   await lzlib.ThreadUtility.sleep(300);
		   this.docotrorTipImg.visible = false;
           this.doctorTipLabel.visible =false;
		   this.doctorAngryTweenGroup.stop();
		}
	}  

	private cueBoxTouchEevnt():void
	{   
		this.stopCurrentSoundChannel();
		this.cueBoxImg.visible = false;
		this.cueBoxOpenImg.visible = true;
		this.greenFrame.visible = true;
		this.firstTipLabel.visible = true;
		this.secondTipLabel.visible = true;
		this.returnBtnImg.visible = true;
		this.returnLabel.visible = true;
		this.returnGroup.visible = true;
		

		this.returnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new TenthLevelScene()), this);
	    this.currentSoundChannel = (RES.getRes('cue_box_bgm_mp3') as egret.Sound).play(0,1);	
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
		this.no.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new TenthLevelScene()), this);
	}

	private stopCurrentSoundChannel():void
	{
        if(this.currentSoundChannel != null){
               this.currentSoundChannel.stop();
        } 
    }
	
}
