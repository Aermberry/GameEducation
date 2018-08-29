class AlertElderComponent extends eui.Component implements  eui.UIComponent {
	
	private alertLabel: eui.Label;
	private hideAlertGroup: eui.Group;
	public game2Scene: Game2Scene;
	
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
		this.alertLabel.text = this._text;
		this.hideAlertGroup.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onHideAlertGroupTap,this);
	}

	private onHideAlertGroupTap(e:egret.TouchEvent)
	{
		this.visible = false;
		this.game2Scene.showCorrectNameGroup();
	}

	private _text = '在書信的內容中，[媽媽]和[妳]是同時出現，因此，[妳]是不可能是媽媽。';

	public get text(): string
	{
		return this._text;
	}

	public set text(str: string)
	{
		this._text = str;
		this.alertLabel && (this.alertLabel.text = this._text);
	}
	
}