class Game3Scene extends eui.Component implements  eui.UIComponent,Game3View {
	
	private correctNameGroup: eui.Group;
	private lackNameGroup: eui.Group;
	private alertGame2Component: AlertElderComponent;
	private nextQuestionAnimation: egret.tween.TweenGroup;
	private nextLevelAnimation: egret.tween.TweenGroup;
	private correctGroup: eui.Group;
	private nextLevelComponent: NextLevelComponent;
	private alertGroup: eui.Group;
	private alertInfoLabel: eui.Label;
	private hideAlertGroup: eui.Group;
	private contentComponent:ContentComponent;

	private presenter:Game3Presenter;

	private game3Repository = new Game3Repository();

	public constructor() {
		super();
		this.presenter = new Game3Presenter();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.initTap();
		this.contentComponent.playGame3Start();
		this.hideAlertGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHideAlertGroupTap, this);
		this.nextLevelComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextLevelComponentTap, this);
		this.presenter.loadView(this);
	}

	private initTap(): void
	{
		this.lackNameGroup.$children.map((label)=>{
			label.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onLackLabelComponentTap,this);
		})
		this.correctNameGroup.$children.map((label)=>{
			label.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCorrectLabelComponentTap,this);
		})
	}

	private onLackLabelComponentTap(e:egret.TouchEvent): void
	{
		this.presenter.onLackLabelComponentTap((e.target as LabelComponents).text);
	}

	private onCorrectLabelComponentTap(e:egret.TouchEvent): void
	{
		this.presenter.onCorrectLabelComponentTap((e.target as LabelComponents).text);
	}

	private onNextLevelComponentTap(e: egret.TouchEvent)
	{
		Main.instant.gotoScene(new Game4Scene());
	}

	private onHideAlertGroupTap(e: egret.TouchEvent): void
	{
		this.alertGroup.visible = false;
	}

	public showAlertInfo(info: string): void
	{
		this.alertGame2Component.text = info;
		this.alertGame2Component.visible = true;
	}

	public hideLackNameGroup(): void
	{
		this.lackNameGroup.visible = false;
	}

	public hideAlertInfo(): void
	{
		this.alertGame2Component.visible = false;
	}

	public showNextQuestionAnimation(): void
	{
		this.nextQuestionAnimation.play(0);
	}

	public showCorrectGroup(): void
	{
		this.correctGroup.visible = true;
	}

	public showNextLevelAnimation(): void
	{
		this.nextLevelAnimation.play(0);
	}
	
	public hideCorrectGroup(): void
	{
		this.correctGroup.visible = false;
	}

	public showNextLevelComponent(): void
	{
		this.nextLevelComponent.visible = true;
	}

	public showAlertBoy(info: string): void
	{
		this.alertGroup.visible = true;
		this.alertInfoLabel.text = this.game3Repository.alertInfo[info];
	}

	public showCorrectOfPart(): void
	{
		this.contentComponent.bless = this.game3Repository.correctOfPart;
		this.contentComponent.$children[this.game3Repository.index].visible = true;
	}

	public showWrongInfo(string: string): void
	{
		this.alertGame2Component.text = '這便是' + string;
		this.alertGame2Component.visible = true;
	}

	public playGame3CorrectAnimation(): void
	{
		this.contentComponent.playGame3End();
	}

	public hideRect(): void
	{
		this.contentComponent.hideRect();
	}

	public showPartBorder(string: string): void
	{
		this.contentComponent.getAllRectHandle(string);
		
	}
}