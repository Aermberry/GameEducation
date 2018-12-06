class optionsScene extends eui.Component implements eui.UIComponent {

  private invitationAnimation: egret.tween.TweenGroup;
  private tailWiggle: egret.tween.TweenGroup;
  private headTitleLabel: eui.Label;

  private rabbitComponent: rabbirComponent;
  private pigComponent: pigComponent;
  private snakeComponent: snakeComponent;
  private sheepComponent: sheeepComponent;
  private giraffeComponent: girffeComponent;
  private ratComponent: ratComponent;

  public rabbitScene: rabbitScene;
  public snakeScene: snakeScene;
  public pigScene: pigScene;
  public sheepScene: sheepScene;
  public giraffeScene: giraffeScene;
  public ratScene: mouseScene;

  private 

  public constructor() {
    super();

    this.rabbitScene = new rabbitScene(this);
    this.snakeScene = new snakeScene();
    this.pigScene = new pigScene();
    this.sheepScene = new sheepScene();
    this.giraffeScene = new giraffeScene();
    this.ratScene = new mouseScene();
    this.rabbitComponent = new rabbirComponent();

  }

  protected partAdded(partName: string, instance: any): void {
    super.partAdded(partName, instance);
  }

  protected childrenCreated(): void {
    super.childrenCreated();
    mouse.enable(this.stage);
    this.startLoadingAnimation();

    this.rabbitComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      this.rabbitComponent.clickStatus(); 
      this.toGameScene(this.rabbitScene) }, this);
    this.pigComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { 
      this.toGameScene(this.pigScene) }, this)
    this.sheepComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { 
      this.toGameScene(this.sheepScene) }, this)
    this.snakeComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      this.toGameScene(this.snakeScene)
    }, this)
    this.giraffeComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      this.toGameScene(this.giraffeScene)
    }, this)
    this.ratComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      this.toGameScene(this.ratScene)
    }, this)
  }

  //開場動畫播放
  private startLoadingAnimation(): void {
    this.invitationAnimation.play(0);
  }

  //redheadtitle
  public headLine(str: string): void {
    this.headTitleLabel.text = `請點選${str}`
  }

  public async playVoice(str: string): Promise<void> {
    let sound = lzlib.SoundUtility.playSound(str);
    return sound;
  }
  private toGameScene(sense: eui.Component): void {
    setTimeout(() => {
      Main.instance.gotoScene(sense);
    }, 1000)


  }

}