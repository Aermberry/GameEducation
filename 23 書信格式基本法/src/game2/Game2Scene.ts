class Game2Scene extends eui.Component implements  eui.UIComponent,Game2View{
	
	private lackNameGroup: eui.Group;
	private correctNameGroup: eui.Group;
	private correctGroup: eui.Group;
	private alertGame2Component: AlertGame2Component;
	private alertElderComponent: AlertElderComponent;
	private nextQuestionAnimation: egret.tween.TweenGroup;
	private nextLevelAnimation: egret.tween.TweenGroup;
	private contentComponent: ContentComponent;
	private nextLevelComponent: NextLevelComponent;

	private presenter = new Game2Presenter();

	private game2Repository = new Game2Repository();
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
		this.initTap();
		this.alertElderComponent.game2Scene = this;
		this.contentComponent.playGame2Start();
		this.nextLevelComponent.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNextQuestionTap,this);
		this.presenter.loadView(this);
	}

	private onNextQuestionTap()
	{
		Main.instant.gotoScene(new Game3Scene())			
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

	public showNextQuestionAnimation(): void
	{
		this.nextQuestionAnimation.play(0);
	}

	public showAlertInfo(info: string): void
	{
		this.alertGame2Component.text = info;
		this.alertGame2Component.visible = true;
	}

	public alertYouAreCorrect(): void
	{
		this.showAlertInfo('你答對了');
	}

	public hideAlertInfo(): void
	{
		this.alertGame2Component.visible = false;
	}

	public hideLackNameGroup(): void
	{
		this.lackNameGroup.visible = false;
	}

	public showCorrectGroup(): void
	{
		this.correctGroup.visible = true;
	}

	public hideCorrectGroup(): void
	{
		this.correctGroup.visible = false;
	}

	public showNextLevelAnimation(): void
	{
		this.nextLevelAnimation.play(0);
	}

	public showAlertElder(info: string): void
	{
		this.alertElderComponent.text = this.game2Repository.alertInfo[info];
		this.alertElderComponent.visible = true;
		this.correctNameGroup.visible = false;
	}

	public showWrongInfo(string: string): void
	{
		this.alertGame2Component.text = '這便是' + string;
		this.alertGame2Component.visible = true;
	}
	
	public showCorrectNameGroup(): void
	{
		this.correctNameGroup.visible = true;
	}

	public showNextLevelComponent(): void
	{
		this.nextLevelComponent.visible = true;
	}

	public showCorrectOfPart(): void
	{
		this.contentComponent.shangkuan = this.game2Repository.correctOfPart + ' :';
		this.contentComponent.$children[this.game2Repository.index].visible = true;
	
	}

	public hideRect(): void
	{
		this.contentComponent.hideRect();
	}

	public showPartBorder(string: string): void
	{
		this.contentComponent.RectHandle(string);
		
	}

}