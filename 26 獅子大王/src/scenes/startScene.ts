class startScene extends eui.Component implements eui.UIComponent {
  private startButton: eui.Button;
  private maskLayer: eui.Rect;
  private LoadingAnimation: egret.tween.TweenGroup;

  public constructor() {
    super();
  }

  protected partAdded(partName: string, instance: any): void {
    super.partAdded(partName, instance);
  }

  protected childrenCreated(): void {
    super.childrenCreated();
    this.startButton.addEventListener(
      egret.TouchEvent.TOUCH_TAP,
      this.startLoadingAnimation,
      this
    );
  }

  private async startLoadingAnimation(): Promise<void> {
    this.startButton.visible = false;
		await this.LoadingAnimation.play();
		setTimeout(()=>{
			this.maskLayer.visible = false;
		},1500)
  }
}
