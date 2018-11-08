class Game4Scene extends eui.Component implements  eui.UIComponent,Game4View {
	private correctNameGroup: eui.Group;
	private lackNameGroup: eui.Group;
	private alertGame2Component: AlertElderComponent;
	private nextQuestionAnimation: egret.tween.TweenGroup;
	private completeAnimation: egret.tween.TweenGroup;
	private correctDownAnimation: egret.tween.TweenGroup;
	private correctGroup: eui.Group;
	private exitCompoent: NextLevelComponent;
	private alertSantaClausComponent: AlertSantaClausComponent;
	private alertInfoLabel: eui.Label;
	private hideAlertGroup: eui.Group;
	// private contentComponent: ContentComponent;
	private xiaKuanGroup: eui.Group;

	private borderRects: any;
	private currentBorderRect: eui.Rect;

	private shangKuanRect: eui.Rect;
	private greetRect: eui.Rect;
	private textRect: eui.Rect;
	private blessRect: eui.Rect;
	private xiaKuanRect: eui.Rect;
	private dateRect: eui.Rect;

	private presenter:Game4Presenter;

	private game4Repository = new Game4Repository();

	public constructor() {
		super();
		this.presenter = new Game4Presenter();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.initTap();
		// this.contentComponent.playGame4Start();
		this.borderRects = {
			'上款':this.shangKuanRect,'問候語':this.greetRect,'正文':this.textRect,'祝頌語':this.blessRect,'下款':this.xiaKuanRect,'日期':this.dateRect
		};
		this.exitCompoent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitCompoentTap, this);
		this.alertSantaClausComponent.game4Scene = this;
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

	private onExitCompoentTap(e: egret.TouchEvent)
	{
		window.close();
	}

	private onHideAlertGroupTap(e: egret.TouchEvent): void
	{
		this.alertSantaClausComponent.visible = false;
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

	public showCompleteAnimation(): void
	{
		this.completeAnimation.play(0);
	}
	
	public hideCorrectGroup(): void
	{
		this.correctGroup.visible = false;
	}

	public showNextLevelComponent(): void
	{
		this.exitCompoent.visible = true;
	}

	public showAlertSantaClaus(info: string): void
	{
		this.correctNameGroup.visible = false;
		this.alertSantaClausComponent.visible = true;
		this.alertSantaClausComponent.text = this.game4Repository.alertInfo[info];
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

	// public showCorrectOfPart(): void
	// {
	// 	this.contentComponent.xiakuan = '侄\r健仁';
	// 	this.contentComponent.$children[this.game4Repository.index].visible = true;
	// }

	// public playGame4CorrectAnimation(): void
	// {
	// 	this.contentComponent.playGame4End();
	// }

	// public hideRect(): void
	// {
	// 	this.contentComponent.hideRect();
	// }

	// public showPartBorder(string: string): void
	// {
	// 	this.contentComponent.RectHandle(string);
	// }

	public showCorrectOfPart(): void
	{
		this.xiaKuanGroup.visible = true;
	}

	public playGame4CorrectAnimation(): void
	{
		this.correctDownAnimation.play();
	}

	public hideRect(): void
	{
		this.currentBorderRect && (this.currentBorderRect.visible = false);
	}

	public showPartBorder(string: string): void
	{
		this.currentBorderRect = (this.borderRects[string] as eui.Rect);
		this.currentBorderRect.visible = true;
	}

	public disableButton(): void
	{
		this.correctNameGroup.$children.map((label)=>{
			(label as LabelComponents).enabled = false;
		})
	}
	
}