class StartScene extends eui.Component implements eui.UIComponent {
  private nextButton:eui.Button;
  public constructor() {
    super();
  }

  protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.nextScene,this);
  }

  protected childrenCreated(): void {
    super.childrenCreated();
  }

  private nextScene(){
		Main.instance.gotoScene(new StatueScene());
	}
}