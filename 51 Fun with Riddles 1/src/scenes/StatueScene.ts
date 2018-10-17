class StatueScene extends eui.Component implements eui.UIComponent {

  private Riddle01: eui.Button;
  private Riddle02: eui.Button;
  private Riddle03: eui.Button;
  private Riddle04: eui.Button;
  private Riddle05: eui.Button;
  private Riddle06: eui.Button;
	private Riddle07: eui.Button;
  public static i:number=0;
  private ridd01:Riddle1Scene
	
  public constructor() {
    super();
  }

  protected partAdded(partName: string, instance: any): void {
    super.partAdded(partName, instance);
  }

  protected childrenCreated(): void {
		super.childrenCreated();
		let statue=new Base();
    this.ridd01=new Riddle1Scene();
		statue.onClickNextScene(this.Riddle01, this.ridd01);
		statue.onClickNextScene(this.Riddle02, new Riddle2Scene());
		statue.onClickNextScene(this.Riddle03, new Riddle3Scene());
		statue.onClickNextScene(this.Riddle04, new Riddle4Scene());
		statue.onClickNextScene(this.Riddle05, new Riddle5Scene());
		statue.onClickNextScene(this.Riddle06, new Riddle6Scene());
		statue.onClickNextScene(this.Riddle07, new Riddle7Scene());
    this.ss();
	}

  private ss():void {
    let self=this.ridd01;
    let aa=self.istrur();
    console.log(aa);
  }
}
