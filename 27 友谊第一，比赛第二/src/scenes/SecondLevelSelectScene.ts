class SecondLevelSelectScene extends eui.Component implements  eui.UIComponent {
	//地點
	private placeBtnImg:eui.Image;
    private firstPlace:eui.Image;
	private secondPlace:eui.Image;
    private thirdPlace:eui.Image;
    private forthPlace:eui.Image;
    private fifithPlace:eui.Image;
    private sixthPlace:eui.Image;

    //人物
	private personBtnImg:eui.Image;
	private foxImg:eui.Image;
	private hippoImg:eui.Image;
	private frogImg:eui.Image;
	private penguinImg:eui.Image;
	private kolalaImg:eui.Image;
	private dogImg:eui.Image;
	private catImg:eui.Image;
	private squirrelImg:eui.Image;
	private pigImg:eui.Image;

    
	//物件
	private thingBtnImg:eui.Image;
	private pineConeImg:eui.Image;
	private basketballImg:eui.Image;
	private soccerImg:eui.Image;
    
	//當前播放的音頻
	private currentSoundChannel:egret.SoundChannel;
    
	//按下confirm后顯示的内容
    private headSoundFrame:eui.Image;
	private headSoundImg:eui.Image;
	private bottomSoundFrame:eui.Image;
	private bottomSoundImg:eui.Image;
	private headCheckBoxImg:eui.Image;
	private bottomCheckBoxImg:eui.Image;
	private headSoundGroup:eui.Group;
	private bottomSoundGroup:eui.Group;
    
	//下方按鈕
	private exitGroup:eui.Group;
	private confirmGroup:eui.Group;	
	private rePlayGroup:eui.Group;
	private correctGroup:eui.Group;
	private correctImg:eui.Image;

	

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
		mouse.setButtonMode(this.placeBtnImg, true);
		mouse.setButtonMode(this.personBtnImg, true);
		mouse.setButtonMode(this.thingBtnImg, true);
		mouse.setButtonMode(this.exitGroup, true);
		mouse.setButtonMode(this.rePlayGroup, true);
		mouse.setButtonMode(this.correctGroup, true);
	    this.currentSoundChannel = (RES.getRes('second_select_bgm_mp3') as egret.Sound).play(0,1);		
		this.initSelectImg();
		this.initRightBtn();
        
		this.initexitBtn();
		this.initConfirmBtn();
		this.initRePlayBtn();
	}

	

    private initSelectImg(){
		//初始化右邊顯示的圖片，人物跟物件默認隱藏，顯示地點
		this.hidePerson();
		this.hideThing();
		this.showPlace();
		this.hideConfirmPage();
		this.showRigthBtn();
	}

	private initRightBtn() {
		this.placeBtnImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showPlaceImg, this);
		this.personBtnImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showPersonImg, this);
		this.thingBtnImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showThingImg, this);
	}


	private showPlaceImg() {
		this.setChildIndex(this.firstPlace, this.numChildren-1);
		this.setChildIndex(this.secondPlace, this.numChildren-1);
		this.setChildIndex(this.thirdPlace, this.numChildren-1);
		this.setChildIndex(this.forthPlace, this.numChildren-1);
		this.setChildIndex(this.fifithPlace, this.numChildren-1);
		this.setChildIndex(this.sixthPlace, this.numChildren-1);
		//隱藏其他，顯示當前
		this.hidePerson();
		this.hideThing();
        this.showPlace();
		this.hideConfirmPage();
		this.showRigthBtn();
		
        
		//添加拖拽事件
		this.firstPlace.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.firstDragStart, this);
		this.firstPlace.addEventListener(egret.TouchEvent.TOUCH_END, this.firstDragStop , this);
		
	}
    private firstDragStart() {
		this.dragStart();
		this.stopCurrentSoundChannel();
	    this.currentSoundChannel = (RES.getRes('first_place_mp3') as egret.Sound).play(0,1);
	}
	private firstDragStop() {
		this.dragStop();
	}
	private dragStart() {
		
	}
	private dragStop() {
		
	}


    private showPersonImg(){
		this.setChildIndex(this.foxImg, this.numChildren-1);
		this.setChildIndex(this.hippoImg, this.numChildren-1);
		this.setChildIndex(this.frogImg, this.numChildren-1);
		this.setChildIndex(this.kolalaImg, this.numChildren-1);
		this.setChildIndex(this.dogImg, this.numChildren-1);
		this.setChildIndex(this.catImg, this.numChildren-1);
		this.setChildIndex(this.sixthPlace, this.numChildren-1);
		this.setChildIndex(this.squirrelImg, this.numChildren-1);
		this.setChildIndex(this.pigImg, this.numChildren-1);
		
		//隱藏其他，顯示當前
		this.showPerson();
		this.hidePlace();
		this.hideThing();
		this.hideConfirmPage();
		this.showRigthBtn();
		
        
	}
    private showThingImg() {
		this.setChildIndex(this.pineConeImg, this.numChildren-1);
		this.setChildIndex(this.basketballImg, this.numChildren-1);
		this.setChildIndex(this.soccerImg, this.numChildren-1);
		
		//隱藏其他，顯示當前
		this.hidePlace();
        this.hidePerson();
		this.showThing();
		this.hideConfirmPage();
		this.showRigthBtn();
	}

	
    

	//初始化confirm按鈕事件
	private initConfirmBtn() {
		this.confirmGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showResult, this);
	}
	private showResult() {
        this.initCorrectBtn();		
		this.hidePlace();
		this.hidePerson();
		this.hideThing();
        this.showConfirmPage();
		this.hideRigthBtn();
	    this.headSoundGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playFirstCompitionSound, this);
	    this.bottomSoundGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playSecondCompitionSound, this);			
	}
	private playFirstCompitionSound() {
		this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('first_compition_mp3')as egret.Sound ).play(0,1);
	}
	private playSecondCompitionSound() {
		this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('second_compition_mp3')as egret.Sound ).play(0,1);
	}
    
	//初始化exitBtn
	private initexitBtn() {
		this.exitGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>window.close(), this);
	}

	//初始化rePlay按鈕
    private initRePlayBtn() {
		this.rePlayGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goFirstStartScene, this);
	}
	private goFirstStartScene() {
		this.stopCurrentSoundChannel();
		Main.instance.gotoScene(new FirstLevelStartScene());
		
	}

	//初始化correctBtn
	private initCorrectBtn() {
		this.stopCurrentSoundChannel();
	    this.correctImg.alpha = 1;
		this.correctGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backSelectImg, this);
	}
	private backSelectImg(){
		//顯示右邊的圖片，人物跟物件默認隱藏，顯示地點
		this.hidePerson();
		this.hideThing();
		this.showPlace();
		this.hideConfirmPage();
		this.showRigthBtn();
		this.stopCurrentSoundChannel();
	
	}


    //控制顯示隱藏
	private hidePlace() {
		this.firstPlace.visible = false;
		this.secondPlace.visible = false;
		this.thirdPlace.visible = false;
		this.forthPlace.visible = false;
		this.fifithPlace.visible = false;
		this.sixthPlace.visible = false;
	}
    private showPlace(){
        this.firstPlace.visible = true;
		this.secondPlace.visible = true;
		this.thirdPlace.visible = true;
		this.forthPlace.visible = true;
		this.fifithPlace.visible = true;
		this.sixthPlace.visible = true;
	}
	private hidePerson() {
		this.foxImg.visible = false;
		this.hippoImg.visible = false;
		this.frogImg.visible = false;
		this.penguinImg.visible = false;
		this.kolalaImg.visible = false;
		this.dogImg.visible = false;
		this.catImg.visible = false;
		this.squirrelImg.visible = false;
		this.pigImg.visible = false;
	}
    private showPerson(){
		this.foxImg.visible = true;
		this.hippoImg.visible = true;
		this.frogImg.visible = true;
		this.penguinImg.visible = true;
		this.kolalaImg.visible = true;
		this.dogImg.visible = true;
		this.catImg.visible = true;
		this.squirrelImg.visible = true;
		this.pigImg.visible = true;
	}
	private hideThing() {
		this.pineConeImg.visible = false;
		this.basketballImg.visible = false;
		this.soccerImg.visible = false;
	}
    private showThing(){
		this.pineConeImg.visible = true;
		this.basketballImg.visible = true;
		this.soccerImg.visible = true;
	}
	private hideRigthBtn() {
		this.placeBtnImg.visible = false;
		this.personBtnImg.visible = false;
		this.thingBtnImg.visible = false;
	}
    private showRigthBtn() {
		this.placeBtnImg.visible = true;
		this.personBtnImg.visible = true;
		this.thingBtnImg.visible = true;
	}
	private hideConfirmPage(){
		this.headSoundImg.visible = false;
		this.headSoundFrame.visible = false;
		this.bottomSoundFrame.visible = false;
		this.bottomSoundImg.visible = false;
		this.headCheckBoxImg.visible = false;
		this.bottomCheckBoxImg.visible = false;
		this.headSoundGroup.visible = false;
		this.bottomSoundGroup.visible = false;
	}
	private showConfirmPage(){
		this.headSoundImg.visible = true;
		this.headSoundFrame.visible = true;
		this.bottomSoundFrame.visible = true;
		this.bottomSoundImg.visible = true;
		this.headCheckBoxImg.visible = true;
		this.bottomCheckBoxImg.visible = true;
		this.headSoundGroup.visible = true;
		this.bottomSoundGroup.visible = true;
	}
	

	private stopCurrentSoundChannel():void{
        if(this.currentSoundChannel != null){
               this.currentSoundChannel.stop();
        } 
    }

}