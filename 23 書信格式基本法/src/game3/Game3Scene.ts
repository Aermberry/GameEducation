class Game3Scene extends eui.Component implements  eui.UIComponent,Game3View {
	
	private correctNameGroup: eui.Group;
	private lackNameGroup: eui.Group;
	private alertGame2Component: AlertElderComponent;
	private nextQuestionAnimation: egret.tween.TweenGroup;

	private presenter:Game3Presenter;

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
		this.presenter.onLackLabelComponentTap(e.target);
	}

	private onCorrectLabelComponentTap(e:egret.TouchEvent): void
	{
		this.presenter.onCorrectLabelComponentTap(e.target);
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
	
}