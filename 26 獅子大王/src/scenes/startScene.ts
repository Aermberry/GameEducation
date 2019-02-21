module StartGmes {
  export class startScene extends eui.Component implements eui.UIComponent {
    private startButton: eui.Button;
    private maskLayer: eui.Rect;
    private LoadingAnimation: egret.tween.TweenGroup;
    private static instance: startScene;
    public constructor() {
      super();
    }

    protected partAdded(partName: string, instance: any): void {
      super.partAdded(partName, instance);
      startScene.instance = this;
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
      setTimeout(() => {
        this.maskLayer.visible = false;
        // startInit();
        Main.instance.gotoScene(new optionsScene());
      }, 1500)
    }

    public gotoOptionsScene():void {
      Main.instance.gotoScene(new optionsScene());
    }

  }
}
