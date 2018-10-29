class AlertSantaClausComponent extends eui.Component implements  eui.UIComponent {
	
	private alertLabel: eui.Label;
	private hideAlertGroup: eui.Group;
	public game4Scene: Game4Scene;

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
		this.hideAlertGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHideAlertGroupTap, this);
	}
	
	private onHideAlertGroupTap(e: egret.TouchEvent): void
	{
		this.game4Scene.showCorrectNameGroup();
		this.visible = false;
	}

	private _text = '在書信的內容中，[媽媽]和[你]是同時出現，因此，[你]是不可能是媽媽。';

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