class MainScene extends eui.Component implements eui.UIComponent {
	private ageLabe: Ui.Tips;
	private ageButton: eui.Button;
	private addressButton: eui.Button;
	private mailGroup: eui.Group;
	private hobbyButton:eui.Button;
	private hobbyGroup: eui.Group;
	private clubButton:eui.Button;
	private clubTip:Ui.Tips;
	private dragGroup:eui.Group;
	private dropGroup:eui.Group;
	private confitmGroup:eui.Group;

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
		this.hobbyButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onHobbyClickHelp,this);
		this.clubButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClubClickHelp,this);
		this.initDragDrop();
		// console.log(this.dropGroup);
	}

	private initDragDrop():void{
		for(let child of this.dragGroup.$children){
			let drag=new lzlib.Drag();
			this.stage.addChild(drag);
			drag.enableDrag(child,false);
		}

		for(let child of this.dropGroup.$children){
			let drop=new lzlib.Drop();
			this.addChild(drop);
			drop.enableDrop(child);
			child.addEventListener(lzlib.LzDragEvent.DROP,this.onLabelDrop,this)
		}
	}

	private onLabelDrop(e:lzlib.LzDragEvent):void {
		let targetComponent=e.target as eui.Label;
		let dragComponent=e.dragObject as eui.Label;
		if(dragComponent.text==targetComponent.text){
			e.preventDefault();
			targetComponent.visible=true;
			dragComponent.visible=false;
			this.confirmAllWorldsAreCorrect();
		}
	}

	private confirmAllWorldsAreCorrect():void{
		let list=this.dropGroup.$children;
		list.forEach((child,idx,list)=>{
			let index=idx;
			if(!child.visible){
				return;
			}
			else{
				this.confitmGroup.$children[index].visible=true;
			}
		})

		lzlib.ThreadUtility.sleep(3000);
		Main.instance.gotoScene(new FinishScene());

	}

	private loadVoice(): void {
		lzlib.SoundUtility.playSound('02_mp3');
	}

	private onAgeClickHelp():void {
		this.ageLabe.visible = true;
		setTimeout(() => {
		this.ageLabe.visible=false;	
		},6000)
	}

	private async onAddressClickHelp(): Promise<void> {
		this.mailGroup.visible = true;
		this.mailGroup.$children[0].visible = true;
		await lzlib.ThreadUtility.sleep(6000);
		this.mailGroup.$children[1].visible = true;
		this.mailGroup.$children[2].visible = true;
		await setTimeout(() => {
			this.mailGroup.visible = false;
		},6000)
	}

	private async onHobbyClickHelp():Promise<void> {
		this.hobbyGroup.visible = true;
		this.hobbyGroup.$children[0].visible = true;
		await lzlib.ThreadUtility.sleep(3000);
		this.hobbyGroup.$children[1].visible = true;
		await setTimeout(() => {
			this.hobbyGroup.visible = false;
		},6000)
	}

	private async onClubClickHelp():Promise<void> {
		this.clubTip.visible=true;
		await lzlib.ThreadUtility.sleep(6000);
		this.clubTip.visible=false;
	}
}