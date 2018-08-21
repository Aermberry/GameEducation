class MainScene extends eui.Component implements  eui.UIComponent {

	public goods: eui.Group;
	public containerHome: eui.Group;
	public hornAnimation;
	public hornBlack;

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
		
		this.loadAudio('resource/audio/init.mp3', this.soundInitChannel , this.soundinitComplete);

		for (let index = 0; index < this.goods.numChildren; index++) {

			let child = this.goods.getChildAt(index);
			let drag = new lzlib.Drag();
			this.addChild(drag);
			drag.enableDrag(child, true, index);
		
		}

		let drop = new lzlib.Drop();
		this.stage.addChild(drop);
		drop.enableDrop(this.containerHome);
		this.containerHome.addEventListener(lzlib.LzDragEvent.DROP, this.onTrashDrop, this);
	}

	private async onTrashDrop(e: lzlib.LzDragEvent):Promise<void>
	{
		
		let dragObj = e.dragObject;
		dragObj.x = e.$stageX - 960 - (dragObj.width / 2);
		dragObj.y = e.$stageY - (dragObj.height / 2);
		this.containerHome.addChild(dragObj);

	}

	private sound:egret.Sound;
	private soundInitChannel:egret.SoundChannel;

	private loadAudio(url: string, soundChannel:egret.SoundChannel, callback) 
	{
		
		this.sound = new egret.Sound();
		this.sound.addEventListener(egret.Event.COMPLETE, (event:egret.Event) => {
      		soundChannel = this.sound.play(0,1);
			soundChannel.addEventListener(egret.Event.SOUND_COMPLETE, callback, this)
  		}, this);
  		this.sound.addEventListener(egret.IOErrorEvent.IO_ERROR, (event:egret.IOErrorEvent) => {
      		console.log("loaded error!");
  		}, this);
  		this.sound.load(url);
		
	}

	private soundinitComplete(e:egret.Event) {

		this.hornAnimation.visible = false;
		this.hornBlack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hornBlackTop, this)
	}

	private bigFurnitureChannel:egret.SoundChannel
	private hornBlackTop(e:egret.TouchEvent){

		// let goodsChild = this.goods.$children;
		this.hornAnimation.visible = true;

		this.goods.$children.map( (index) => {
			index.alpha = 0.4;
		})

		this.loadAudio('resource/audio/big_furniture.mp3', this.bigFurnitureChannel ,this.bigFurnitureComplete)


	}

	private bigFurnitureComplete(e:egret.Event) {
		var goodsArr = this.goods.$children;
		var index = 0;
		for (let i = goodsArr.length - 1; index < 3; i--) {
			console.log(goodsArr);
			console.log(i);
			console.log(goodsArr[i]);
			goodsArr[i].alpha = 1;
			let drag = new lzlib.Drag();
			this.addChild(drag);
			drag.enableDrag(goodsArr[goodsArr.length]);
			index++

		}
	}
	
}