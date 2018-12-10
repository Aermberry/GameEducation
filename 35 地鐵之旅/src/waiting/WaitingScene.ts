class WaitingScene extends eui.Component implements  eui.UIComponent,WaitingVIew {

	private tipLeftGroup: eui.Group;
	private tipRightGroup: eui.Group;
	private markingLeft: eui.Group;
	private markingRight: eui.Group;
	private strataLeftGroup: eui.Group;
	private strataRightGroup: eui.Group;
	private operateLeftGroup: eui.Group;
	private operateRightGroup: eui.Group;
	private pillarGroup: eui.Group;
	private smallPillarGroup: eui.Group;
	private currentLine: Line;//当前线

	private routeComponent: RouteComponent;

	private carLeftAnimation: egret.tween.TweenGroup;
	private carRightAnimation: egret.tween.TweenGroup;
	private controllingComponent: ControllingComponent;
	private arrowLeft: ArrowRedComponent;
	private arrowRight: ArrowRedComponent;
	private circleLeftRect: eui.Rect;
	private circleRightRect: eui.Rect;
	private platformLeftLabel: eui.Label;
	private platformRightLabel: eui.Label;

	private presenter = new WaitingPresent();

	private position: number;//在当前线的第position站

	private operationAudios = {
		'往下層': 'sound 22 (go_3and4.mp3)_mp3',
		'往上層': 'sound 26 (go_1_2.mp3)_mp3',
		'往大堂': 'sound 20 (goesLobby.mp3)_mp3'
	}

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

	public initMouseOperation(): void
	{
		mouse.enable(this.stage);
		mouse.setButtonMode(this.operateLeftGroup, true);
		mouse.setButtonMode(this.operateRightGroup, true);
		this.operateLeftGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onOperateLeftOver, this);
		this.operateRightGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onOperateRightOver, this);
		this.operateLeftGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.presenter.onOperateLeftOut, this.presenter);
		this.operateRightGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.presenter.onOperateRightOut, this.presenter);
		this.strataLeftGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onStrataClick, this.presenter);
		this.strataRightGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onStrataClick, this.presenter);
		this.arrowLeft.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onArrowLeftClick, this.presenter);
		this.arrowRight.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onArrowRightClick, this.presenter);
		this.controllingComponent.addEventListener(ControllingEvent.ROUTE_CLICK, this.onRouteClick, this);
	}

	private onRouteClick(): void
	{
		this.routeComponent.visible = true;
	}

	public onOperateLeftOver(e: egret.TouchEvent): void
	{
		this.showTipLeft();
		let label = this.tipLeftGroup.getChildByName('tipText') as eui.Label;
		lzlib.SoundUtility.playSound(this.operationAudios[label.text]);
	}

	public onOperateRightOver(e: egret.TouchEvent): void
	{
		this.showTipRight();
		let label = this.tipRightGroup.getChildByName('tipText') as eui.Label;
		lzlib.SoundUtility.playSound(this.operationAudios[label.text]);
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
			this.platformLeftLabel.text = '1';
			(this.markingRight.getChildByName('station') as eui.Label).text = '往' + name.substring(0,name.length-1);
			this.platformRightLabel.text = '2';
	}
	
	public marking3And4(name: string): void
	{
			(this.markingLeft.getChildByName('station') as eui.Label).text = '往' + name.substring(0,name.length-1);
			this.platformLeftLabel.text = '3';
			(this.markingRight.getChildByName('station') as eui.Label).text = '往' + name.substring(0,name.length-1);
			this.platformRightLabel.text = '4';
	}

	public marking1(name: string): void
	{
		(this.markingLeft.getChildByName('station') as eui.Label).text = '往' + name.substring(0,name.length-1);
		this.platformLeftLabel.text = '1';
	}

	public marking2(name: string): void
	{
		(this.markingRight.getChildByName('station') as eui.Label).text = '往' + name.substring(0,name.length-1);
		this.platformRightLabel.text = '2';
	}

	public marking3(name: string): void
	{
		(this.markingLeft.getChildByName('station') as eui.Label).text = '往' + name.substring(0,name.length-1);
		this.platformLeftLabel.text = '3';
	}

	public marking4(name: string): void
	{
		(this.markingRight.getChildByName('station') as eui.Label).text = '往' + name.substring(0,name.length-1);
		this.platformRightLabel.text = '4';
	}

	public async runLeftCar(): Promise<void>
	{
		await this.carLeftAnimation.playOnceAsync();
	}

	public async runRightCar(): Promise<void>
	{
		await this.carRightAnimation.playOnceAsync();
	}

	public enableLeftArrow(): void
	{
		this.arrowLeft.enable();
		this.arrowLeft.enableMouse();
	}

	public disableLeftArrow(): void
	{
		this.arrowLeft.disable();
		this.arrowLeft.disableMouse();
	}

	public enableRightArrow(): void
	{
		this.arrowRight.enable();
		this.arrowRight.enableMouse();
	}

	public disableRightArrow(): void
	{
		this.arrowRight.disable();
		this.arrowRight.disableMouse();
	}

	public showOperationLeft(): void
	{
		this.operateLeftGroup.visible = true;
	}

	public showOperationRight(): void
	{
		this.operateRightGroup.visible = true;
	}

	public hideOperationLeft(): void
	{
		this.operateLeftGroup.visible = false;
	}

	public hideOperationRight(): void
	{
		this.operateRightGroup.visible = false;
	}

	public showExitButtonLeft(): void
	{
		(this.operateLeftGroup.getChildByName('exit') as eui.Group).visible = true;
	}

	public hideExitButtonLeft(): void
	{
		(this.operateLeftGroup.getChildByName('exit') as eui.Group).visible = false;
	}

	public showExitButtonRight(): void
	{
		(this.operateRightGroup.getChildByName('exit') as eui.Group).visible = true;
	}

	public hideExitButtonright(): void
	{
		(this.operateRightGroup.getChildByName('exit') as eui.Group).visible = false;
	}

	public setTipTextLeft(text: string): void
	{
		let label = this.tipLeftGroup.getChildByName('tipText') as eui.Label;
		label.text = text;
	}	

	public setTipTextRight(text: string): void
	{
		let label = this.tipRightGroup.getChildByName('tipText') as eui.Label;
		label.text = text;
	}	

	public showTipLeft(): void
	{
		this.tipLeftGroup.visible = true;
	}

	public hideTipLeft(): void
	{
		this.tipLeftGroup.visible = false;
	}

	public showTipRight(): void
	{
		this.tipRightGroup.visible = true;
	}

	public hideTipRight(): void
	{
		this.tipRightGroup.visible = false;
	}

	public async wrongMP3(): Promise<void>
	{ 
		await lzlib.SoundUtility.playSound('sound 2 (inst_wrongDest.mp3)_mp3');
		lzlib.SoundUtility.playSound('sound 17 (inst_chkMap.mp3)_mp3');
	}

	public setMarkingColor(color: number): void
	{
		this.circleLeftRect.fillColor = color;
		this.circleRightRect.fillColor = color;
	}

}