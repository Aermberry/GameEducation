class Game1Scene extends eui.Component implements  eui.UIComponent {
	
	private nameGroup: eui.Group;
	private nextLevelComponent: eui.Group;
	private contentComponent: ContentComponent;
	private shangKuanLabel: LabelComponents;
	private textLabel: LabelComponents;
	private xiaKuanLabel: LabelComponents;
	private dateLabel: LabelComponents;
	private blessLabel: LabelComponents;
	private greetLabel: LabelComponents;

	private labelComponents: any;

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
		this.labelComponents = {
			shangkuan: this.shangKuanLabel,
			xiakuan: this.xiaKuanLabel,
			text: this.textLabel,
			date: this.dateLabel,
			bless: this.blessLabel,
			greet: this.greetLabel
		};
		this.enableDrag();
		this.nextLevelComponent.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNextQuestionTap,this);
		this.contentComponent.game1Scene = this;
	}

	private enableDrag(): void
	{
		for (let index = 0; index < this.nameGroup.numChildren; index++) {
			let child = this.nameGroup.getChildAt(index);
			let drag = new lzlib.Drag();
			this.addChild(drag);
			drag.enableDrag(child, false, index);
		}
	}

	private onNextQuestionTap(): void
	{
		if (this.contentComponent.isFinish) {
			Main.instant.gotoScene(new Game2Scene())	
		}
	}

	public removeNameChildrent(curLabel: string): void
	{	
		(this.labelComponents[curLabel] as LabelComponents).visible = false;
	}

	public addNameGroupChildrent(labelComponents: LabelComponents): void
	{
		this.nameGroup.addChild(labelComponents);
	}
	
}