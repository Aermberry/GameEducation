class optionsScene extends eui.Component implements eui.UIComponent {

  private invitationAnimation:egret.tween.TweenGroup;
  private tailWiggle:egret.tween.TweenGroup;
  private headTitleLabel:eui.Label;

  private rabbit:rabbirComponent;
  private pig:pigComponent;
  private snake:snakeComponent;
  private sheep:sheeepComponent;
  private giraffe:girffeComponent;
  private rat:ratComponent;
  
  public constructor() {
    super();
  }

  protected partAdded(partName: string, instance: any): void {
    super.partAdded(partName, instance);
  }

  protected childrenCreated(): void {
		super.childrenCreated();
    mouse.enable(this.stage);
		this.startLoadingAnimation();
	}
	
	//開場動畫播放
	private startLoadingAnimation():void{
		this.invitationAnimation.play(0);
	}

  //redheadtitle
  public headLine(str:string):void{
    this.headTitleLabel.text=`請點選${str}`
  } 

  public async playVoice(str:string):Promise<void>{
    let sound= lzlib.SoundUtility.playSound(str);
    return sound;
  }

}