class SecondLevelSelectScene extends eui.Component implements  eui.UIComponent, ISecondLevelSelectView {
	private answerGroup: eui.Group;
	private backgroundGroup: eui.Group;
	private placeBtnHightlightRect: eui.Rect;
	private highlightPlaceButtonMovie: egret.tween.TweenGroup;

	//初始化右邊顯示的圖片，人物跟物件默認隱藏，顯示地點
	private placeBtnImg:eui.Image;
	private placeGroup: eui.Group;
    private firstPlace:eui.Image;
	private secondPlace:eui.Image;
    private thirdPlace:eui.Image;
    private forthPlace:eui.Image;
    private fifithPlace:eui.Image;
    private sixthPlace:eui.Image;

    //人物
	private personBtnImg:eui.Image;
	private personGroup: eui.Group;
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
	private thingGroup: eui.Group;
	private pineConeImg:eui.Image;
	private basketballImg:eui.Image;
	private soccerImg:eui.Image;
    
	//當前播放的音頻
	private currentSoundChannel:egret.SoundChannel;
    
	//按下confirm后顯示的内容
	private resultGroup: eui.Group;
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
	private replayGroup:eui.Group;
	private correctGroup:eui.Group;
	private correctImg:eui.Image;

	//video tap 
	private videoTapGroup: eui.Group;
	private videoTap1Group: eui.Group;
	private videoTap2Group: eui.Group;

	private confirmFrame: eui.Image;

	private presenter = new SecondLevelSelectPresenter();

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
		mouse.setButtonMode(this.replayGroup, true);
		mouse.setButtonMode(this.correctGroup, true);
	    this.currentSoundChannel = (RES.getRes('second_select_bgm_mp3') as egret.Sound).play(0,1);	
		this.initRightBtn();
		this.initExitBtn();
		this.initConfirmBtn();
		this.initCorrectBtn();
		this.initReplayBtn();
		this.initVideoTapGroup();
		this.initBackgroundGroupDrop();
		this.initHornSound();

		this.presenter.loadView(this);
	}

	private initHornSound(): void
	{
		this.headSoundGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onHeadSoundClick, this.presenter);
		this.bottomSoundGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onButtomSoundClick, this.presenter);
	}

	public set places(values: Place[])
	{
		values.forEach((place, index) => {
			let child = this.placeGroup.getChildAt(index);
			let drag = new lzlib.Drag();
			this.stage.addChild(drag);
			drag.enableDrag(child, true, new DragData(DragType.place, place));
			child.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => this.presenter.onPlaceMouseDown(place), this);
		}, this);
	}

	public set persons(values: Person[])
	{
		values.forEach((person, index) => {
			let child = this.personGroup.getChildAt(index);
			let drag = new lzlib.Drag();
			this.stage.addChild(drag);
			drag.enableDrag(this.personGroup.getChildAt(index), true, new DragData(DragType.person, person));
			child.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => this.presenter.onPersonMouseDown(person), this);
		}, this);
	}

	public set things(values: Thing[])
	{
		values.forEach((thing, index) => {
			let child = this.thingGroup.getChildAt(index);
			let drag = new lzlib.Drag();
			this.stage.addChild(drag);
			drag.enableDrag(child, true, new DragData(DragType.thing, thing));
			child.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => this.presenter.onThingMouseDown(thing), this);
		}, this);
	}

	private initRightBtn() {
		this.placeBtnImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showPlaceImg, this);
		this.personBtnImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showPersonImg, this);
		this.thingBtnImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showThingImg, this);
	}

	private initVideoTapGroup(): void
	{
		for (let child of this.videoTapGroup.$children) {
			let drop = new lzlib.Drop();
			this.addChild(drop);
			drop.enableDrop(child);
			child.addEventListener(lzlib.LzDragEvent.DROP, this.onDropIntoVedioTape, this);
		}
	}

	private onDropIntoVedioTape(e: lzlib.LzDragEvent): void
	{
		console.log('drop in tape');
		e.preventDefault();
		console.log('e.dragObject.parent is null ? ' + (e.dragObject.parent));
		e.dragObject.parent && e.dragObject.parent.removeChild(e.dragObject);
		this.presenter.onDropIntoVideoTape(e.data as DragData, new egret.Point(e.localX, e.localY), this.videoTapGroup.getChildIndex((e.target as eui.Group))) ;
	}

	private showPlaceImg() {
		this.placeGroup.visible = true;
		this.personGroup.visible = false;
		this.thingGroup.visible = false;		

		//添加拖拽事件
	}

    private showPersonImg(){
		this.placeGroup.visible = false;
		this.personGroup.visible = true;
		this.thingGroup.visible = false;
	}

    private showThingImg() {
		this.placeGroup.visible = false;
		this.personGroup.visible = false;
		this.thingGroup.visible = true;
	}

	//初始化confirm按鈕事件
	private initConfirmBtn() {
		this.confirmGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onSubmitClick, this.presenter);
	}

	public playFirstCompitionSound() {
		this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('first_compition_mp3')as egret.Sound ).play(0,1);
	}
	public playSecondCompitionSound() {
		this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('second_compition_mp3')as egret.Sound ).play(0,1);
	}
    
	//初始化exitBtn
	private initExitBtn() {
		this.exitGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>window.close(), this);
	}

	//初始化rePlay按鈕
    private initReplayBtn() {
		this.replayGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goFirstStartScene, this);
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
		this.presenter.onCorrectButtonClick();
	}

	private initBackgroundGroupDrop(): void
	{
		this.backgroundGroup.$children.forEach(child => {
			let drop = new lzlib.Drop();
			this.stage.addChild(drop);
			drop.enableDrop(child);
			child.addEventListener(lzlib.LzDragEvent.DROP, this.onBackgroundGroupDrop, this);
		});
	}

	private onBackgroundGroupDrop(e: lzlib.LzDragEvent): void
	{
		this.presenter.onDropOutOfVideoTape(e.data as DragData);
		e.dragObject.parent != null && e.dragObject.parent.removeChild(e.dragObject);
		e.preventDefault();
	}

    //控制顯示隱藏
	private hidePlace() {
	}
    private showPlace(){
	}
	private hidePerson() {
		
	}
    private showPerson(){
	}
	private hideThing() {
	}
    private showThing(){
	}
	private hideRigthBtn() {
	}
    private showRigthBtn() {
	}
	private hideConfirmPage(){
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
	

	public stopCurrentSoundChannel():void{
        if(this.currentSoundChannel != null){
            this.currentSoundChannel.stop();
        } 
    }

	public playAudio(audioName: string): void
	{
		this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes(audioName) as egret.Sound).play(0, 1);
	}

	 /** 设置场景的背景图片 */
    public addSceneBackground(place: Place, sceneIndex: number): void
	{
		let background = new eui.Image();
		background.name = 'background';
		background.source = PlaceFormatter.getImageSource(place);
		background.left = background.right = background.top = background.bottom = 0;
		(this.videoTapGroup.getChildAt(sceneIndex) as eui.Group).addChildAt(background, 1);
		
		let drag = new lzlib.Drag();
		this.stage.addChild(drag);
		drag.enableDrag(background, false, new DragData(DragType.place, place, sceneIndex));
	}

    /** 删除场景的背景图片 */
    public removeSceneBackground(sceneIndex: number): void
	{
		let scene = (this.videoTapGroup.getChildAt(sceneIndex) as eui.Group);
		let background = scene.getChildByName('background');
		background && scene.removeChild(background);
	}

	/** 添加人物 */
    public addPerson(person: Person, dropPoint: egret.Point, sceneIndex: number)
	{
		let image = new eui.Image();
		image.source = PersonFormatter.getImageSource(person);
		image.x = dropPoint.x;
		image.y = dropPoint.y;
		image.scaleX = 0.5;
		image.scaleY = 0.5;
		image.name = person.toString();
		(this.videoTapGroup.getChildAt(sceneIndex) as eui.Group).addChild(image);
		
		let drag = new lzlib.Drag();
		this.stage.addChild(drag);
		drag.enableDrag(image, false, new DragData(DragType.person, person, sceneIndex));
	}

    /** 删除人物 */
    public removePerson(person: Person, sceneIndex: number): void
	{
		let image = this.getVideoTapGroup(sceneIndex).getChildByName(person.toString());
		image && this.getVideoTapGroup(sceneIndex).removeChild(image);
	}

	/** 添加运动 */
    public addThing(thing: Thing, dropPoint: egret.Point, sceneIndex: number): void
	{
		let image = new eui.Image();
		image.source = ThingFormatter.getImageSource(thing);
		image.x = dropPoint.x;
		image.y = dropPoint.y;
		image.scaleX = 0.8;
		image.scaleY = 0.8;
		image.name = thing.toString();
		(this.videoTapGroup.getChildAt(sceneIndex) as eui.Group).addChild(image);

		let drag = new lzlib.Drag();
		this.stage.addChild(drag);
		drag.enableDrag(image, false, new DragData(DragType.thing, thing, sceneIndex));
	}

    /** 删除运动 */
    public removeThing(thing: Thing, sceneIndex: number): void
	{
		let image = this.getVideoTapGroup(sceneIndex).getChildByName(thing.toString());
		image && this.getVideoTapGroup(sceneIndex).removeChild(image);
	}

	private getVideoTapGroup(sceneIndex: number): eui.Group
	{
		return this.videoTapGroup.getChildAt(sceneIndex) as eui.Group;
	}

	public showAnswerView(): void
	{
		this.answerGroup.visible = true;
	}

    public hideAnswerView(): void
	{
		this.answerGroup.visible = false;
	}

	public showSceneCompareResult(compareResults: SceneCompareResult[]): void
	{
		this.resultGroup.visible = true;
		for (let index = 0; index < compareResults.length; index++) {
			let resultGroup = this.resultGroup.getChildAt(index) as eui.Group;
			(resultGroup.getChildByName('placeResult') as eui.Image).source = compareResults[index].isPlaceEqual ? 'yes_png' : 'no_png';
			(resultGroup.getChildByName('personResult') as eui.Image).source = compareResults[index].isPersonEqual ? 'yes_png' : 'no_png';
			(resultGroup.getChildByName('thingResult') as eui.Image).source = compareResults[index].isThingEqual ? 'yes_png' : 'no_png';
		}
	}

	public hideSceneCompareResult(): void
	{
		this.resultGroup.visible = false;
	}

	public playWrongAudio(): void
	{
		this.playAudio('sound 16 (ex1_part2_incorrect.mp3)_mp3');
	}

    public playCorrectAudio(): void
	{
		this.playAudio('sound 17 (ex1_part2_correct.mp3)_mp3');
	}

	public disableConfirmGroup(): void
	{
		this.confirmGroup.touchEnabled = false;
		this.confirmFrame.alpha = 0.4;
	}

	public enableConfirmGroup(): void
	{
		this.confirmGroup.touchEnabled = true;
		this.confirmFrame.alpha = 1;
	}

	public enableButton(): void
	{
		this.correctGroup.touchEnabled = true;
		this.correctGroup.alpha = 1;
		this.replayGroup.touchEnabled = true;
		this.replayGroup.alpha = 1;
	}

    public highlightPlaceButton(): void
	{
		this.placeBtnHightlightRect.visible = true;
		this.highlightPlaceButtonMovie.playLoopAsync();
	}

	public normalizePlaceButton(): void
	{
		this.highlightPlaceButtonMovie.stop();
		this.placeBtnHightlightRect.visible = false;
	}
}