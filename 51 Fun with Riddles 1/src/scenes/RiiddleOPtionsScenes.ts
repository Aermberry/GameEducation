class RiiddleOPtionsScenes extends eui.Component implements eui.UIComponent {

  private Riddle01: eui.Button;
  private Riddle02: eui.Button;
  private Riddle03: eui.Button;
  private Riddle04: eui.Button;
  private Riddle05: eui.Button;
  private Riddle06: eui.Button;
  private Riddle07: eui.Button;

  private rid01: Riddle1Scene
  private rid02: Riddle2Scene
  private rid03: Riddle3Scene
  private rid04: Riddle4Scene
  private rid05: Riddle5Scene
  private rid06: Riddle6Scene
  private rid07: Riddle7Scene

  private account:boolean=false;

  public constructor() {
    super();
    this.rid01 = new Riddle1Scene();
    this.rid02 = new Riddle2Scene();
    this.rid03 = new Riddle3Scene();
    this.rid04 = new Riddle4Scene();
    this.rid05 = new Riddle5Scene();
    this.rid06 = new Riddle6Scene();
    this.rid07 = new Riddle7Scene();
  }

  protected partAdded(partName: string, instance: any): void {
    super.partAdded(partName, instance);
  }

  protected childrenCreated(): void {
    super.childrenCreated();
    let statue = new Base();

    statue.onClickNextScene(this.Riddle01, this.rid01,this);
    statue.onClickNextScene(this.Riddle02, this.rid02,this);
    statue.onClickNextScene(this.Riddle03, this.rid03,this);
    statue.onClickNextScene(this.Riddle04, this.rid04,this);
    statue.onClickNextScene(this.Riddle05, this.rid05,this);
    statue.onClickNextScene(this.Riddle06, this.rid06,this);
    statue.onClickNextScene(this.Riddle07, this.rid07,this);
    console.log(this.account);
    this.receiveResult();
    console.log(this.rid01)
  }

  private async receiveResult():Promise<void>{
   this.account=await this.rid01.resultCallback()
   console.log(this.account);
  }
}
