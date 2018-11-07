class StartScene extends eui.Component implements eui.UIComponent {
  private nextButton: eui.Button;
  private playButton: eui.Button;
  private maskLayer: eui.Rect;
  private animationLoading: egret.tween.TweenGroup;

  public constructor() {
    super();
  }

  protected partAdded(partName: string, instance: any): void {
    super.partAdded(partName, instance);
    
  }

  protected childrenCreated(): void {
    super.childrenCreated();
    this.playButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startLoading,this)
    this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextScene, this);
  }

  private async startLoading(): Promise<void> {
    this.animationLoading.play(0);
    this.playButton.visible = false;
    await lzlib.ThreadUtility.sleep(1000);
      this.maskLayer.visible = false;
  }

  private nextScene() {
    Main.instance.gotoScene(new RiiddleOPtionsScenes());
  }
}