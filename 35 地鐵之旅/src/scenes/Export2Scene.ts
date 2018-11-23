class Export2Scene extends eui.Component implements  eui.UIComponent {

	private chuLabel: eui.Label;
	private exportGroup: eui.Group;
	private exportBackGroup: eui.Group;

	private routeComponent: RouteComponent;
	private controllingComponent: ControllingComponent;

	private exportRepo = new Export2Repository();
	
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
		mouse.enable(this.stage);
		await this.playMP3();
		this.enableExportClick();
		this.initMouse();
		this.initClick();
		this.controllingComponent.addEventListener(ControllingEvent.ROUTE_CLICK, this.onRouteClick, this);
	}

	private onRouteClick(): void
	{
		this.routeComponent.visible = true;
	}

	private initMouse(): void
	{
		this.exportGroup.$children.map((child) => {
			mouse.setButtonMode(child, true);
			child.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onLabelOver, this);

		})
	}

	private onLabelOver(e: egret.TouchEvent): void
	{
		let label = e.target as eui.Label;
		this.exportRepo.playMP3(label.text);
	}

	private initClick(): void
	{
		this.exportGroup.$children.map((child) => {
			child.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLabelClick, this);

		})
	}

	private onLabelClick(e: egret.TouchEvent): void
	{
		let label = e.target as eui.Label;
		if(label.text == 'B')
		{
			this.exportRepo.playCompleteMP3();
			Main.instance.gotoScene(new Arriving1Scene());
		}else
		{
			this.exportRepo.playWrongMP3();
		}
	}
	
	private enableExportClick(): void
	{
		this.chuLabel.alpha = 1;
		this.exportGroup.alpha = 1;
		this.exportBackGroup.alpha = 1;
	}

	private async playMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('sound 19 (inst_c_exit.mp3)_mp3');
	}
}