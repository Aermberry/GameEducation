class StatueScene extends eui.Component implements eui.UIComponent {

  private Riddle01: eui.Button;
  private Riddle02: eui.Button;
  private Riddle03: eui.Button;
  private Riddle04: eui.Button;
  private Riddle05: eui.Button;
  private Riddle06: eui.Button;
	private Riddle07: eui.Button;

  private rid01:Riddle1Scene
  private rid02:Riddle2Scene
  private rid03:Riddle3Scene
  private rid04:Riddle4Scene
  private rid05:Riddle5Scene
  private rid06:Riddle6Scene
  private rid07:Riddle7Scene
	
  public constructor() {
    super();
  }

  protected partAdded(partName: string, instance: any): void {
    super.partAdded(partName, instance);
  }

  protected childrenCreated(): void {
		super.childrenCreated();
		let statue=new Base();
    
		statue.onClickNextScene(this.Riddle01, this.rid01);
    statue.onClickNextScene(this.Riddle02, this.rid02);
    statue.onClickNextScene(this.Riddle03, this.rid03);
    statue.onClickNextScene(this.Riddle04, this.rid04);
    statue.onClickNextScene(this.Riddle05, this.rid05);
    statue.onClickNextScene(this.Riddle06, this.rid06);
    statue.onClickNextScene(this.Riddle07, this.rid07);
	}

  private resultScene():void{
    Main.instance.gotoScene(new FinishScene());
  }
}
