class MainScene extends eui.Component implements  eui.UIComponent, MainView {

	public goodsGroup: eui.Group;
	public containerHome: eui.Group;
	public hornAnimation;
	public hornBlack;

	private currentSoundChannel: egret.SoundChannel;

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
		for (let index = 0; index < this.goods.numChildren; index++) {
			let child = this.goods.getChildAt(index);
			let drag = new lzlib.Drag();
			this.addChild(drag);
			drag.enableDrag(child, false, index);
		}

		let drop = new lzlib.Drop();
		this.stage.addChild(drop);
		drop.enableDrop(this.containerHome);
		this.containerHome.addEventListener(lzlib.LzDragEvent.DROP, this.onTrashDrop, this);
	}

	private async onTrashDrop(e: lzlib.LzDragEvent):Promise<void>
	{
		e.preventDefault();

		let dragObj = e.dragObject;
		dragObj.x = e.localX - (e.stageX - e.dragObject.x);
		dragObj.y = e.localY - (e.stageY - e.dragObject.y);
		this.containerHome.addChild(dragObj);
	}

	private stopCurrentSound(): void
	{
		this.currentSoundChannel && this.currentSoundChannel.stop();
	}

	/** 提升progress bar的base count，表示当前round已经完成 */
	public addProgressBarBaseCount(delta: number): void 
	{
		
	}

	/** 播放通关动画 */
	public playGamePassedAnimation(): void 
	{

	}
	
	/** 关闭游戏 */
	public exit(): void {

	}
	
	/** 启用goods */
	public enableGoods(goods: GoodsComponent[]): void 
	{

	}
	
	/** 禁用goods */
	public disableGoods(goods: GoodsComponent[]): void 
	{

	}
	
	public highlightInstructionButton(): void 
	{

	}
	
	public normalizeInstructionButton(): void 
	{

	}
	
	public enableValidateButton(): void 
	{

	}
	
	public disableValidateButton(): void 
	{

	}
	
	public enableInstructionButton(): void 
	{

	}

	public disableInstructionButton(): void
	{

	}

	public async playInstructionAsync(instructionAudioName: string): Promise<void>
	{

	}

	public alertPlayingInstruction(): void
	{

	}

	public alertYouCanMoveGoodsNow(): void
	{

	}
	
	public alertSomeGoodsNotInRoom(): void 
	{

	}
	
	public alertNotAllGoodsInCorrectPlace(): void 
	{
	}
	
	public showNextRoundPanel(): void 
	{

	}
	
	public closeNextRoundPanel(): void 
	{

	}
	
	public updateProgress(inCorrectPlaceCount: number, inWrongPlaceCount: number): void 
	{

	}
	
}