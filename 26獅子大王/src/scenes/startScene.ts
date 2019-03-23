module StartGmes {
  export class startScene extends eui.Component implements eui.UIComponent {
    private startButton: eui.Button;
    private maskLayer: eui.Rect;
    private LoadingAnimation: egret.tween.TweenGroup;
    private static instance: startScene;
    public constructor() {
      super();
      startScene.instance = this;
    }

    protected partAdded(partName: string, instance: any): void {
      super.partAdded(partName, instance);
      // startScene.instance = this;
    }

    protected childrenCreated(): void {
      super.childrenCreated();
      this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startLoadingAnimation, this);
    }

    private async startLoadingAnimation(): Promise<void> {
      this.startButton.visible = false;

      () => {
        var SoundChannel: egret.SoundChannel = (RES.getRes("sound112_mp3") as egret.Sound).play(0);
        SoundChannel.volume = 0;
      }

      await this.LoadingAnimation.play();
        this.maskLayer.visible = false;
        startInit();
      // this.gotoOptionsScene();
    }

    public gotoOptionsScene(): void {
      Main.instance.gotoScene(new GameStart.optionsScene());
    }

  }
}
