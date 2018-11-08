class RiiddleOPtionsScenes extends eui.Component implements eui.UIComponent {

  public Riddle01: eui.Button;
  public Riddle02: eui.Button;
  public Riddle03: eui.Button;
  public Riddle04: eui.Button;
  public Riddle05: eui.Button;
  public Riddle06: eui.Button;
  public Riddle07: eui.Button;

  private rid01: Riddle1Scene
  private rid02: Riddle2Scene
  private rid03: Riddle3Scene
  private rid04: Riddle4Scene
  private rid05: Riddle5Scene
  private rid06: Riddle6Scene
  private rid07: Riddle7Scene

  private account: number = 0;
  public accounts: number[] = [];


  public constructor() {
    super();
    this.rid01 = new Riddle1Scene(this);
    this.rid02 = new Riddle2Scene(this);
    this.rid03 = new Riddle3Scene(this);
    this.rid04 = new Riddle4Scene(this);
    this.rid05 = new Riddle5Scene(this);
    this.rid06 = new Riddle6Scene(this);
    this.rid07 = new Riddle7Scene(this);

  }

  protected partAdded(partName: string, instance: any): void {
    super.partAdded(partName, instance);
  }

  protected childrenCreated(): void {
    super.childrenCreated();
    let statue = new Base();

    statue.onClickNextScene(this.Riddle01, this.rid01, this);
    statue.onClickNextScene(this.Riddle02, this.rid02, this);
    statue.onClickNextScene(this.Riddle03, this.rid03, this);
    statue.onClickNextScene(this.Riddle04, this.rid04, this);
    statue.onClickNextScene(this.Riddle05, this.rid05, this);
    statue.onClickNextScene(this.Riddle06, this.rid06, this);
    statue.onClickNextScene(this.Riddle07, this.rid07, this);
    this.Riddle01.enabled = false
  }

  public isCorrect(result: string): void {

    let plant = library[result];

    let istrue = this.accounts.indexOf(plant);
    // console.log(`istrue:${istrue}`)

    if (istrue == -1) {
      this.accounts.push(plant);
      this.account++;
      // console.log(`數組：${this.accounts}\n長度：${this.accounts.length}`)
      this.succeful();
    }
  }

  private get result(): number {
    return this.accounts.length;
  }

  private succeful(): void {
    let result = this.result;
    // console.log(`result：${result}`)
    if (this.result == 7) {
      Main.instance.gotoScene(new FinishScene());
    }
  }

}
