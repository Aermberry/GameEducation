class MainScene extends eui.Component implements  eui.UIComponent, MainView {

	private goodsGroup: eui.Group;
	private roomGroup: eui.Group;
	private hornAnimation: MovieClipPlayer;
	private toastGroup: eui.Group;
	private toastLabel: eui.Label;
	private goodsAndRoomGroup: eui.Group;

	private instructionButton: CircleButton;
	private validateButton: CircleButton;
	private exitButton: CircleButton;

	private progressBar: BiscuitProgressBar;

	private dogsGroup: eui.Group;
	private gamePassedMovie: egret.tween.TweenGroup;

	private actionGroup: eui.Group;
	private actionTitleLabel:eui.Label;
	private actionLeftButton: CircleButton;
	private actionRightButton: CircleButton;

	private correctGroup: eui.Group;

	private currentSoundChannel: egret.SoundChannel;

	private startButton2: eui.Image;
	private startMask: eui.Rect;

	private presenter = new MainPresenter();

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
		this.initGoodsDragDrop();
		this.instructionButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onInstructionButtonClick, this.presenter);
		this.validateButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onValidateButtonClick, this.presenter);
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onExitButtonClick, this.presenter);
		this.startButton2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButton2Click, this);
	}

	private onStartButton2Click(): void
	{
		this.presenter.loadView(this, this.goodsGroup.$children.map(child => child as GoodsComponent));
		this.startMask.visible = false;
		this.startButton2.visible = false;
	}

	private initGoodsDragDrop(): void
	{
		for (let index = 0; index < this.goodsGroup.numChildren; index++) {
			let child = this.goodsGroup.getChildAt(index);
			let drag = new lzlib.Drag();
			this.addChild(drag);
			drag.enableDrag(child, false, index);
		}

		let drop = new lzlib.Drop();
		this.addChild(drop);
		drop.enableDrop(this.roomGroup);
		this.roomGroup.addEventListener(lzlib.LzDragEvent.DROP, this.onRoomDrop, this);
	}

	private async onRoomDrop(e: lzlib.LzDragEvent):Promise<void>
	{
		e.preventDefault();
		let dragObj = e.dragObject as GoodsComponent;

		if (!dragObj.isInRoom) {
			//当前物件还未进入房间，要先在GoodsGroup放一个PlaceHolder
			let placeHolder = dragObj.clone() as GoodsComponent;
			placeHolder.x = e.originalPoint.x;
			placeHolder.y = e.originalPoint.y;
			placeHolder.currentState = 'gray';
			placeHolder.enabled = false;
			this.goodsGroup.addChild(placeHolder);
		}

		dragObj.x = e.localX - (e.stageX - e.dragObject.x);
		dragObj.y = e.localY - (e.stageY - e.dragObject.y);
		this.roomGroup.addChild(dragObj);
		dragObj.enabledAudioName = false;
		dragObj.isInRoom = true;
	}

	private stopCurrentSound(): void
	{
		this.currentSoundChannel && this.currentSoundChannel.stop();
	}

	public async playIntroductionAudio(): Promise<void>
	{
		this.stopCurrentSound();
		return lzlib.SoundUtility.playSound('sound 4 (instructionSoundRaw)_mp3');
	}

	/** 提升progress bar的base count，表示当前round已经完成 */
	public addProgressBarBaseCount(delta: number): void 
	{
		this.progressBar.addProgressBarBaseCount(delta);
	}

	public toastGamePassedMessage(): void
	{
		this.toastMessage('請前往下一節啦！');
	}

	private async toastMessage(message: string): Promise<void>
	{
		this.toastGroup.visible = true;
		this.toastLabel.text = message;
		this.hornAnimation.visible = false;
		await lzlib.ThreadUtility.sleep(3000);
		this.toastGroup.visible = false;
	}

	public showGamePassedPanel(): void
	{
		this.actionGroup.visible = true; 
		this.actionTitleLabel.text = '遊戲完成！';
		this.actionLeftButton.title = '重設';
		this.actionLeftButton.tip = '重新開始遊戲';
		this.actionLeftButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onReplayButtonClick, this.presenter);
		this.actionRightButton.title = this.actionRightButton.tip = '離開';
		this.actionRightButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onExitButtonClick, this.presenter);
	}

	public playGamePassedAudio(): void
	{
		this.stopCurrentSound();
		this.currentSoundChannel = (RES.getRes('sound 10 (completeSoundRaw)_mp3') as egret.Sound).play(0, 1);
	}

	public playGamePassedMovie(): void
	{
		this.swapChildren(this.dogsGroup, this.goodsAndRoomGroup);
		this.gamePassedMovie.play(0);
	}
	
	/** 关闭游戏 */
	public exit(): void 
	{
		window.close();
	}
	
	/** 启用goods */
	public enableGoods(goods: GoodsComponent[]): void 
	{
		goods.forEach(x => x.enabled = true);
	}
	
	/** 禁用goods */
	public disableGoods(goods: GoodsComponent[]): void 
	{
		goods.forEach(x => x.enabled = false);
	}

	public updateGoodsStateToNormal(goods: GoodsComponent[]): void
	{
		goods.forEach(x => x.currentState = 'normal');
	}
	
	public highlightInstructionButton(): void 
	{
		this.instructionButton.highlight = true;
	}
	
	public normalizeInstructionButton(): void 
	{
		this.instructionButton.highlight = false;
	}
	
	public enableValidateButton(): void 
	{
		this.validateButton.enabled = true;
	}
	
	public disableValidateButton(): void 
	{
		this.validateButton.enabled = false;
	}
	
	public enableInstructionButton(): void 
	{
		this.instructionButton.enabled = true;
	}

	public disableInstructionButton(): void
	{
		this.instructionButton.enabled = false;
	}

	public async playInstructionAsync(instructionAudioName: string): Promise<void>
	{
		return lzlib.SoundUtility.playSound(instructionAudioName);
	}

	public alertPlayingInstruction(): void
	{
		this.toastGroup.visible = true;
		this.toastLabel.text = '請留心聆聽指示內容';
		this.hornAnimation.visible = true;
	}

	public async alertYouCanMoveGoodsNow(): Promise<void>
	{
		this.toastGroup.visible = true;
		this.toastLabel.text = '現在可以移動傢俬了';
		this.hornAnimation.visible = false;
		await lzlib.ThreadUtility.sleep(2000);
		this.toastGroup.visible = false;
	}
	
	public playSomeGoodsNotInRoomAudio(): void 
	{
		this.stopCurrentSound();
		this.currentSoundChannel = (RES.getRes('sound 6 (guideSound1Raw)_mp3') as egret.Sound).play(0, 1);
	}
	
	public playNotAllGoodsInCorrectPlayAudio(): void 
	{
		this.stopCurrentSound();
		this.currentSoundChannel = (RES.getRes('sound 5 (guideSound2Raw)_mp3') as egret.Sound).play(0, 1);
		this.actionGroup.visible = true;
	}

	public openContinuePanel(): void
	{
		this.actionGroup.visible = true;
		this.actionTitleLabel.text = '繼續努力';
		this.actionLeftButton.title = this.actionLeftButton.tip = '繼續';
		this.actionLeftButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onContinueButtonClick, this.presenter);
		this.actionRightButton.title = this.actionRightButton.tip = '離開';
		this.actionRightButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onExitButtonClick, this.presenter);
	}

	public closeContinuePanel(): void
	{
		this.actionGroup.visible = false;
		this.actionLeftButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onContinueButtonClick, this.presenter);
		this.actionRightButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onExitButtonClick, this.presenter);
	}

	public toastNextRoundMessage(): void
	{
		this.toastMessage('請前往下一節啦！');
	}
	
	public openNextRoundPanel(): void
	{
		this.actionGroup.visible = true;
		this.actionLeftButton.title = this.actionLeftButton.tip = '下一節';
		this.actionLeftButton.titleSize = 62;
		this.actionLeftButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onNextRoundButtonClick, this.presenter);
		this.actionRightButton.title = this.actionRightButton.tip = '離開';
		this.actionRightButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onExitButtonClick, this.presenter);
	}
	
	public closeNextRoundPanel(): void 
	{
		this.toastGroup.visible = false;
		this.actionGroup.visible = false;
		this.actionLeftButton.titleSize = 92;
		this.actionLeftButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onNextRoundButtonClick, this.presenter);
		this.actionRightButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onExitButtonClick, this.presenter);
	}
	
	public updateProgress(inCorrectPlaceCount: number, inWrongPlaceCount: number): void 
	{
		this.progressBar.updateProgress(inCorrectPlaceCount, inWrongPlaceCount);
	}

	public hideToastView(): void
	{
		this.toastGroup.visible = false;
	}
	
	public reopenMyself(): void
	{
		// Main.instance.gotoScene(new MainScene());
		window.location.reload();
	}

	public showCorrectGroup(): void
	{
		this.toastGroup.visible = false;
		this.correctGroup.visible = true;
	}
}