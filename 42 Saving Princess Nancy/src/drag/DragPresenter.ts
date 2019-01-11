class DragPresenter {

	private isCorrect = false;
	private currectIndex = 0;//表示当前拖拽正确的数目； droping correct number currect 
	private mixCount = 10;//拖拽完成；drop finish
	private view: DragView;
	private audioRepo = new DragAudioRepository();
	private alertInfoRepo = new AlertInfoRepository();
	private currectRD = new CurrectRD();
	private headBodyRepo = new HeadBodyRepository();
	private correctDecoration = new CorrectDecoration();

	public constructor() {
	}

	public loadView(view: DragView): void
	{
		this.view = view;
	}

	public async onDrop(e: lzlib.LzDragEvent): Promise<void>
	{
		let dragImage = (e.dragObject as eui.Image);
		let dragName = dragImage.name
		if(dragName == e.target.$name){
			//拖拽正确 drop correct
			this.isCorrect = true;
			this.currectIndex++;
			//显示拖拽正确部分 show part for correct 
			this.view.showCorrectPart(dragName);
			//隐藏右边拖拽完成的部分 hide correct part in right
			this.view.hideDrapPart(dragImage);
			//弹出信息 alert info
			let decorationInfo = this.alertInfoRepo.getInfo(dragName);
			this.view.alertCorrectInfo(decorationInfo.alertInfo);
			await decorationInfo.playMP3();
			this.currectIndex == this.mixCount && this.dropFinish();
			await lzlib.ThreadUtility.sleep(600);
			this.isCorrect = false;

		}else{

			await lzlib.ThreadUtility.sleep(500);
			if(this.isCorrect)
			{
				return;
			}else{
				//拖拽失败 drop failure
				
				//闪烁拖拽部位的对应文字  flicker text 
				let curRD = this.currectRD.getCurrectRD(dragName);
				// curRD == undefined ? this.view.AlertReTry() : this.view.textFlicker(curRD);
				this.view.textFlicker(curRD);
				//弹出信息 alert info
				curRD == 0 ? this.view.rdText('st') : this.view.rdText('rd'); //判断当前的段落显示不同的值；
				this.correctDecoration.isCorrectDecoration(dragName) == false && this.view.alertWrongtInfo(this.currectRD.getTextRD());
			}
			
		}
	}
	
	public onDropCancel(): void
	{
		console.log('drop cancel');
	}

	public onMouseOver(e: egret.TouchEvent): void
	{
		let textLabel = e.target as eui.Label;
		let name = e.target.$name;
		textLabel.textColor = 0x2353E0;
		this.audioRepo.playMP3(name);
		this.view.showOverText(name);
	}

	public onMouseOut(e: egret.TouchEvent): void
	{
		let textLabel = e.target as eui.Label;
		textLabel.textColor = 0xF55125;
		this.audioRepo.stopMP3();
		this.view.hideOverText();
	}

	public onHeadDrop(e: lzlib.LzDragEvent): void
	{
		if(!this.headBodyRepo.isInHead(e.dragObject.name)){
			//弹出信息
			this.view.AlertReTry();
		}
	}

	public onBodyDrop(e: lzlib.LzDragEvent): void
	{
		if(!this.headBodyRepo.isInBody(e.dragObject.name)){
			//弹出信息
			this.view.AlertReTry();
		}
	}

	private async dropFinish(): Promise<void>
	{
		await lzlib.ThreadUtility.sleep(5000);
		this.view.playFinishAnimation();
		this.view.playFinishMP3();
	}
	
}