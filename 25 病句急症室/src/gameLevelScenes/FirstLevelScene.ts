class FirstLevelScene extends eui.Component implements  eui.UIComponent {
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
	
    private ourFirstImg:eui.Image;
	private classImg:eui.Image;
	private whenImg:eui.Image;
	private commaImg:eui.Image;
	private ourSecondImg:eui.Image;
	private veryImg:eui.Image;
	private keepOutImg:eui.Image;
	private listenImg:eui.Image;
	private periodImg:eui.Image;

	private _touchStatus:boolean = false;  //當前觸摸狀態，按下時，值爲true；
	private _distance:egret.Point = new egret.Point(); //鼠標點擊時，鼠標全局坐標與_bird的位置差
	 



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
		mouse.setButtonMode(this.ourFirstImg, true);

		// this.ourFirstImg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ourFirstMouseDown, this);
		// this.ourFirstImg.addEventListener(egret.TouchEvent.TOUCH_END, this.ourFirstImgMouseUp, this);
		
		this.exitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.confrimToExit, this);
		this.cueBoxImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cueBoxTouchEevnt, this);

	}

	// private ourFirstMouseDown(evt:egret.TouchEvent)
	// {   
	// 	console.log("Mouse Down");
	// 	this._touchStatus = true;
	//     this.initialPosition = [this.ourFirstImg.x,this.ourFirstImg.y];

	// 	this._distance.x = evt.stageX - this.ourFirstImg.x;
	// 	this._distance.y = evt.stageY - this.ourFirstImg.y;
	// 	this.ourFirstImg.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
	// 	return initialPosition;
	// }

	// private mouseMove(evt:egret.TouchEvent):void
	// {
	// 	if(this._touchStatus)
	// 	{
    //       console.log("move up");
	// 	  this.ourFirstImg.x = evt.stageX - this._distance.x;
	// 	  this.ourFirstImg.y = evt.stageY - this._distance.y;
	// 	}
	// }

	// private ourFirstImgMouseUp(evt:egret.TouchEvent):void
	// {
	// 	console.log("Mouse Up");
	// 	this._touchStatus = false;
	// 	this.ourFirstImg.x = ;
	// 	this.ourFirstImg.y= ;
	// 	this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
	// }


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
		

		this.returnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new FirstLevelScene()), this);
	    this.currentSoundChannel = (RES.getRes('cue_box_bgm_mp3') as egret.Sound).play(0,1);	
	}

	private async confrimToExit():Promise<void>
	{   
		this.blueFrame.visible = true;
        this.blueFrameTweenGroup.play(0);
		
		await lzlib.ThreadUtility.sleep(500)
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