class optionsScene extends eui.Component implements eui.UIComponent {
  private invitationAnimation:egret.tween.TweenGroup;
  public constructor() {
    super();
  }

  protected partAdded(partName: string, instance: any): void {
    super.partAdded(partName, instance);
  }

  protected childrenCreated(): void {
		super.childrenCreated();
		this.startLoadingAnimation();
	}
	
	//開場動畫播放
	private startLoadingAnimation():void{
		this.invitationAnimation.play(0);
	}
}