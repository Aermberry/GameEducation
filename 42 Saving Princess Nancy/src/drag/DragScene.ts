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

	private mouseOverTexts: any;
	private curShowText: eui.Group;

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
		// await this.playStartMP3();
		mouse.enable(this.stage);
		this.mouseOverTexts = {
			'gown': this.gownGroup,
			'crown': this.crownGroup,
			'gentle': this.gentleGroup,
			'gloves': this.glovesGroup,
			'nightingale': this.nightingaleGroup
		};
		this.initDrap();
		this.initDrop();
		this.initMouse();
		this.presenter.loadView(this);
	}

	private async playStartMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('drag_Introduction_mp3');
	}

	private initDrop(): void
	{
		this.princessRectGroup.$children.map((child) => {
			let drop = new lzlib.Drop();
			this.addChild(drop);
			drop.enableDrop(child);
			child.addEventListener(lzlib.LzDragEvent.DROP, this.presenter.onDrop, this.presenter);
		})
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

	public isCorrect(name: string): void
	{
	}

	public showText(name: string): void
	{}

	public alertCorrectInfo(name: string): void
	{}

	public textFlicker(name: string): void
	{}

	public hideDrapPart(dragObj: eui.Image): void
	{
		console.log(dragObj.parent.name);
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

	public isIncludeDrap(drapObj: eui.Image): void
	{
		this.partsOfBodyGroup.$children.map((child) => {
			if(child instanceof eui.Group){
				child.$children.map((childImg) => {
					console.log(childImg.name);
					console.log(drapObj.name);
					console.log(childImg);
					childImg.name == drapObj.name && console.log(child);
					
				})
			}
		})
	}
	
}