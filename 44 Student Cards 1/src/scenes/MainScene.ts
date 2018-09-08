class MainScene extends eui.Component implements eui.UIComponent {
	private ageLabe: Ui.Tips;
	private ageButton: eui.Button;
	private addressButton: eui.Button;
	private mailGroup: eui.Group;
	private hobbyButton: eui.Button;
	private hobbyGroup: eui.Group;
	private clubButton: eui.Button;
	private clubTip: Ui.Tips;
	private confirmGroup: eui.Group;
	private dragGroup: eui.Group;
	private dropGroup: eui.Group;
	// private confitmGroup:eui.Group;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.loadVoice();
		// this.tipLabe.tipString="dddd"//动态文本
		this.ageButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAgeClickHelp, this);
		this.addressButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAddressClickHelp, this);
		this.hobbyButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHobbyClickHelp, this);
		this.clubButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClubClickHelp, this);
		this.initDragDrop();
		// console.log(this.dropGroup);
	}

	private initDragDrop(): void {
		this.dropGroup.removeChildren;
		for (let child of this.dragGroup.$children) {
			let drag = new lzlib.Drag();
			this.stage.addChild(drag);
			drag.enableDrag(child, false);
		}

		for (let child of this.dropGroup.$children) {
			let drop = new lzlib.Drop();
			this.addChild(drop);
			drop.enableDrop(child);
			child.addEventListener(lzlib.LzDragEvent.DROP, this.onLabelDrop, this)
		}
	}

	private onLabelDrop(e: lzlib.LzDragEvent): void {
		// this.dropGroup.$children[0].$getTouchEnabled=false;
		let targetComponent = e.target as eui.Label;
		let dragComponent = e.dragObject as eui.Label;
		if (dragComponent.text.trim() == targetComponent.text.trim()) {
			e.preventDefault();
			targetComponent.visible = true;
			dragComponent.visible = false;
			let index=this.dropGroup.getChildIndex(targetComponent);
			  this.confirmGroup.getChildAt( this.dropGroup.getChildIndex(targetComponent)).visible = true;
			 switch(index){
				 case 1:
				 this.ageButton.visible=true;
				 break;
				 case 2:
				 this.addressButton.visible=true;
				 break;
				 case 4:
				 this.hobbyButton.visible=true;
				 break;
			 }
			//  if(this.confirmGroup.$children[1].visible) this.ageButton.visible=true;
			//  if(this.confirmGroup.$children[2].visible)	this.addressButton.visible=true;
			//  if(this.confirmGroup.$children[4].visible) this.hobbyButton.visible=true;
			 if(this.confirmGroup.$children[5].visible&&this.confirmGroup.$children[6].visible)this.clubButton.visible=true;
			 this.confirm();
			this.confirmAllWorldsAreCorrect();
		}
		else{
			
		}
	}

	private confirm():void{
		if(this.confirmGroup.$children[2].visible) this.ageButton.visible=false;
		if(this.confirmGroup.$children[3].visible)	this.addressButton.visible=false;
		if(this.confirmGroup.$children[7].visible) this.clubButton.visible=false;
		if(this.confirmGroup.$children[5].visible&&this.confirmGroup.$children[6].visible) this.hobbyButton.visible=false;
	}

	private confirmAllWorldsAreCorrect(): void {
		if (this.confirmGroup.$children.all(child => child.visible)) {
			lzlib.ThreadUtility.sleep(3000);
			Main.instance.gotoScene(new FinishScene());
		}
	}

	private loadVoice(): void {
		lzlib.SoundUtility.playSound('02_mp3');
	}

	private onAgeClickHelp(): void {
		this.setChildIndex(this.ageLabe, 18);
		let index = this.getChildIndex(this.ageLabe);
		this.ageLabe.visible = true;
		setTimeout(() => {
			this.ageLabe.visible = false;
		}, 6000)
		this.setChildIndex(this.ageLabe, index);

	}

	private async onAddressClickHelp(): Promise<void> {
		this.setChildIndex(this.mailGroup, 18);
		let index = this.getChildIndex(this.mailGroup);
		this.mailGroup.visible = true;
		this.mailGroup.$children[0].visible = true;
		await lzlib.ThreadUtility.sleep(6000);
		this.mailGroup.$children[1].visible = true;
		this.mailGroup.$children[2].visible = true;
		await setTimeout(() => {
			this.mailGroup.visible = false;
		}, 6000)
		this.setChildIndex(this.mailGroup, index);
	}

	private async onHobbyClickHelp(): Promise<void> {
		this.setChildIndex(this.hobbyGroup, 18);
		let index = this.getChildIndex(this.hobbyGroup)
		this.hobbyGroup.visible = true;
		this.hobbyGroup.$children[0].visible = true;
		await lzlib.ThreadUtility.sleep(3000);
		this.hobbyGroup.$children[1].visible = true;
		await setTimeout(() => {
			this.hobbyGroup.visible = false;
		}, 6000)
		this.setChildIndex(this.hobbyGroup, index);
	}

	private async onClubClickHelp(): Promise<void> {
		this.setChildIndex(this.clubTip,18);
		let index=this.getChildIndex(this.clubTip);
		this.clubTip.visible = true;
		await lzlib.ThreadUtility.sleep(6000);
		this.clubTip.visible = false;
		this.setChildIndex(this.clubTip,index);
	}
}