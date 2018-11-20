class WaitingScene extends eui.Component implements  eui.UIComponent,WaitingVIew {

	private markingLeft: eui.Group;
	private markingRight: eui.Group;
	private operateLeftGroup: eui.Group;
	private operateRightGroup: eui.Group;
	private pillarGroup: eui.Group;
	private smallPillarGroup: eui.Group;
	private currentLine: Line;//当前线

	private carLeftAnimation: egret.tween.TweenGroup;
	private carRightAnimation: egret.tween.TweenGroup;
	private controllingComponent: ControllingComponent;
	private arrowLeft: ArrowRedComponent;
	private arrowRight: ArrowRedComponent;

	private presenter = new WaitingPresent();

	private position: number;//在当前线的第position站

	public constructor(line: Line,position:number) {
		super();
		this.currentLine = line;
		this.position =  position;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		this.presenter.loadView(this,this.currentLine,this.position);
	}

	public stationColor(backPath: string): void
	{
		let image = (this.pillarGroup.getChildByName('image') as eui.Image);
		image.source = backPath;
		this.smallPillarGroup.$children.map((child) => {
			let smallImage = child as eui.Image;
			smallImage.source = backPath;
		});
	}

	public stationText(text: string): void
	{
		let label = this.pillarGroup.getChildByName('text') as eui.Label;
		label.text = text;
	}

	public marking1And2(name: string): void
	{
			(this.markingLeft.getChildByName('station') as eui.Label).text = '往' + name.substring(0,name.length-1);
			(this.markingLeft.getChildByName('platformLabel') as eui.Label).text = '1';
			(this.markingRight.getChildByName('station') as eui.Label).text = '往' + name.substring(0,name.length-1);
			(this.markingRight.getChildByName('platformLabel') as eui.Label).text = '2';
	}
	
	public marking3And4(name: string): void
	{
			(this.markingLeft.getChildByName('station') as eui.Label).text = '往' + name.substring(0,name.length-1);
			(this.markingLeft.getChildByName('platformLabel') as eui.Label).text = '3';
			(this.markingRight.getChildByName('station') as eui.Label).text = '往' + name.substring(0,name.length-1);
			(this.markingRight.getChildByName('platformLabel') as eui.Label).text = '4';
	}

	public marking1(name: string): void
	{
		(this.markingLeft.getChildByName('station') as eui.Label).text = '往' + name.substring(0,name.length-1);
		(this.markingLeft.getChildByName('platformLabel') as eui.Label).text = '1';
	}

	public marking2(name: string): void
	{
		(this.markingRight.getChildByName('station') as eui.Label).text = '往' + name.substring(0,name.length-1);
		(this.markingRight.getChildByName('platformLabel') as eui.Label).text = '2';
	}

	public marking3(name: string): void
	{
		(this.markingLeft.getChildByName('station') as eui.Label).text = '往' + name.substring(0,name.length-1);
		(this.markingLeft.getChildByName('platformLabel') as eui.Label).text = '3';
	}

	public marking4(name: string): void
	{
		(this.markingRight.getChildByName('station') as eui.Label).text = '往' + name.substring(0,name.length-1);
		(this.markingRight.getChildByName('platformLabel') as eui.Label).text = '4';
	}

	public async runLeftCar(): Promise<void>
	{
		this.carLeftAnimation.playLoopAsync();
	}

	public async runRightCar(): Promise<void>
	{
		this.carRightAnimation.playLoopAsync();
	}

	public enableLeftArrow(): void
	{
		this.arrowLeft.enable();
	}

	public disableLeftArrow(): void
	{
		this.arrowLeft.disable();
	}

	public enableRightArrow(): void
	{
		this.arrowRight.enable();
	}

	public disableRightArrow(): void
	{
		this.arrowRight.disable();
	}

}