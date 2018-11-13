class DragScene extends eui.Component implements  eui.UIComponent,DragView {
	
	private glovesLabel: eui.Label;
	private gownLabel: eui.Label;
	private crownLabel: eui.Label;
	private gentleLabel: eui.Label;
	private nightingaleLabel: eui.Label;
	private clothesGroup: eui.Group;
	private eyesGroup: eui.Group;
	private noseGroup: eui.Group;
	private hairGroup: eui.Group;
	private otherGroup: eui.Group;
	private mouthGroup: eui.Group;
	private princessGroup: eui.Group;
	private princessRectGroup: eui.Group;
	private partsOfBodyGroup: eui.Group;
	private gentleGroup: eui.Group;
	private nightingaleGroup: eui.Group;
	private crownGroup: eui.Group;
	private glovesGroup: eui.Group;
	private gownGroup: eui.Group;
	private crown: eui.Image;//皇冠图片
	private glassSlippersImage: eui.Image;
	private necklace: eui.Image;
	private earringsImage: eui.Image;
	private glovesImage: eui.Image;
	private hatImage: eui.Image;
	private glassesImage: eui.Image;
	private braceletImage: eui.Image;
	private bootsImage: eui.Image;
	private bodyPartMaskRect: eui.Rect;
	private headRect: eui.Rect;
	private bodyRect: eui.Rect;

	//文字闪烁Label
	private description1Label: eui.Label;
	private description2Label: eui.Label;
	private description3Label: eui.Label;
	private description4Label: eui.Label;
	private description5Label: eui.Label;
	private descriptionRD = [];

	private alertGroup: eui.Group;
	private alertTetxLabel: eui.Label;//拖拽后的提示信息标签
	private alertMovie: MovieClipPlayer;

	private partsOfBody: any;
	private mouseOverTexts: any;
	private curShowText: eui.Group;

	private finishAnimationGroup: eui.Group;
	private drapFinishAnimation: egret.tween.TweenGroup;
	private bodyPartMaskRectAnimation: egret.tween.TweenGroup;
	private alertTextAnimation: egret.tween.TweenGroup;

	private bootsComponent: BootsComponent;
	private backBootsComponent: BootsComponent;

	private presenter = new DragPresenter();

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected async childrenCreated(): Promise<void>
	{
		super.childrenCreated();
		await this.playStartMP3();
		await lzlib.SoundUtility.playSound('drag_Introduction_mp3');
		await this.playBodyPartMaskAnimation();
		mouse.enable(this.stage);
		this.mouseOverTexts = {
			'gown': this.gownGroup,
			'crown': this.crownGroup,
			'gentle': this.gentleGroup,
			'gloves': this.glovesGroup,
			'nightingale': this.nightingaleGroup
		};
		this.partsOfBody = {
			'clothes1': this.clothesGroup,
			'eyesBlue': this.eyesGroup,
			'nosePointed': this.noseGroup,
			'mouthRed': this.mouthGroup,
			'hairWave': this.hairGroup,
			'crown': [this.crown,this.glassesImage,this.hatImage],
			'glassSlippers': [this.glassSlippersImage,this.bootsImage],
			'necklace': this.necklace,
			'earrings': this.earringsImage,
			'gloves': [this.glovesImage,this.braceletImage]
		};
		this.descriptionRD = [new TextFlicker([this.description1Label,this.description2Label]),new TextFlicker([this.description3Label,this.description4Label,this.description5Label])];
		this.bootsComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, () => Main.instance.gotoScene(new Task2IntroductionScene()), this);
		this.backBootsComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, () => Main.instance.gotoScene(new SelectTaskScene()), this);
		this.initDrap();
		this.initDrop();
		this.initMouse();
		this.presenter.loadView(this);
	}

	private async playStartMP3(): Promise<void>
	{
		// await lzlib.SoundUtility.playSound('drag_Introduction_mp3');
	}

	private initDrop(): void
	{
		this.princessRectGroup.$children.map((child) => {
			let drop = new lzlib.Drop();
			this.addChild(drop);
			drop.enableDrop(child);
			child.addEventListener(lzlib.LzDragEvent.DROP, this.presenter.onDrop, this.presenter);
		})
		// this.headRect.addEventListener(lzlib.LzDragEvent.DROP, this.presenter.onHeadDrop, this.presenter);
		// this.bodyRect.addEventListener(lzlib.LzDragEvent.DROP, this.presenter.onBodyDrop, this.presenter);
	}

	private initDrap(): void
	{
		this.clothesGroup.$children.map((child) => {
			let drag = new lzlib.Drag();
			this.addChild(drag);
			drag.enableDrag(child, false);
		})
		this.eyesGroup.$children.map((child) => {
			let drag = new lzlib.Drag();
			this.addChild(drag);
			drag.enableDrag(child, false);
		})
		this.mouthGroup.$children.map((child) => {
			let drag = new lzlib.Drag();
			this.addChild(drag);
			drag.enableDrag(child, false);
		})
		this.hairGroup.$children.map((child) => {
			let drag = new lzlib.Drag();
			this.addChild(drag);
			drag.enableDrag(child, false);
		})
		this.otherGroup.$children.map((child) => {
			let drag = new lzlib.Drag();
			this.addChild(drag);
			drag.enableDrag(child, false);
		})
		this.noseGroup.$children.map((child) => {
			let drag = new lzlib.Drag();
			this.addChild(drag);
			drag.enableDrag(child, false);
		})
	}

	private initMouse(): void
	{
		this.glovesLabel.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.presenter.onMouseOver, this.presenter);
		this.gownLabel.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.presenter.onMouseOver, this.presenter);
		this.crownLabel.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.presenter.onMouseOver, this.presenter);
		this.gentleLabel.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.presenter.onMouseOver, this.presenter);
		this.nightingaleLabel.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.presenter.onMouseOver, this.presenter);

		this.glovesLabel.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.presenter.onMouseOut, this.presenter);
		this.gownLabel.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.presenter.onMouseOut, this.presenter);
		this.crownLabel.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.presenter.onMouseOut, this.presenter);
		this.gentleLabel.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.presenter.onMouseOut, this.presenter);
		this.nightingaleLabel.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.presenter.onMouseOut, this.presenter);
	}

	public async alertCorrectInfo(text: string): Promise<void>
	{
		this.alertTetxLabel.text = text;
		this.playAlertMovie();
	}

	public async alertWrongtInfo(text: string): Promise<void>
	{
		this.alertTetxLabel.text = text;
		this.playAlertMovie();
	}

	public async AlertReTry(): Promise<void>
	{
		this.alertTetxLabel.text = '     Try again!';
		this.playAlertMovie();
	}

	private async playAlertMovie(): Promise<void>
	{
		this.alertGroup.visible = true;
		this.alertMovie.play();
		await lzlib.ThreadUtility.sleep(500);
		await this.alertTextAnimation.playOnceAsync();
		// this.alertGroup.visible = false;
	}

	public textFlicker(curRD: number): void
	{
		try{
			let textFlicker = this.descriptionRD[curRD];
			textFlicker.flicker();
		}catch(e){
			this.AlertReTry();
		}
	}

	public hideDrapPart(dragObj: eui.Image): void
	{
		let part = this.partsOfBody[dragObj.name];
		if(Array.isArray(part))
		{
			part.map((element) => {(element as egret.DisplayObject).visible = false});
		}else{
			(this.partsOfBody[dragObj.name] as egret.DisplayObject).visible = false;
		}
		
	}

	public showCorrectPart(name: string): void
	{
		this.princessGroup.getChildByName(name).visible = true;
	}

	public showOverText(labelName: string): void
	{
		this.curShowText = (this.mouseOverTexts[labelName] as eui.Group);
		this.curShowText.visible = true;
	}

	public hideOverText(): void
	{
		this.curShowText.visible = false;
	}

	public async playBodyPartMaskAnimation(): Promise<void>
	{
		await this.bodyPartMaskRectAnimation.playOnceAsync();
		this.bodyPartMaskRect.visible = false;
	}

	public playFinishAnimation(): void
	{
		this.finishAnimationGroup.visible = true;
		this.drapFinishAnimation.play(0);
	} 

	public playFinishMP3(): void
	{
		lzlib.SoundUtility.playSound('drap_finish_mp3');
	}
}