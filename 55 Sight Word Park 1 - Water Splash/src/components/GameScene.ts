class GameScene extends eui.Component implements  eui.UIComponent {
    

    private shootBtnImg:eui.Image;
	private resetBtnImg:eui.Image;

	private hintsBtnImg:eui.Image;
	private hideWordImg:eui.Image;
	private nextPuzzleImg:eui.Image;
    private backImg:eui.Image;

	private states = 0; //用户点击hideWordImg的次数
	

	
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		mouse.enable(this.stage);
		
		this.initRestAndShootBtn();

		//this.initHintsBtn();
		this.initBackBtn();
		this.initHideWordSBtn();
		
	}

	private initRestAndShootBtn():void
	{

		this.resetBtnImg.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.resetBtnImg.source="confirm_normal_png", this);
		this.resetBtnImg.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.resetBtnImg.source="confirm_hover_png", this);
	    
        this.shootBtnImg.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.shootBtnImg.source="confirm_normal_png", this);
        this.shootBtnImg.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.shootBtnImg.source="confirm_hover_png", this);

    }

	private initBackBtn():void
	{
		this.backImg.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new SelectDiffcultScene()), this);
	}
	
	private initHideWordSBtn():void
	{
		this.hideWordImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hideWordTouchEvent, this);
	}

	private hideWordTouchEvent():void
	{
       this.states++;
	   if(this.states >1){
		   this.states = 0;
	   }
	   if(this.states == 0){
			this.hideWordImg.source = "hide_word_png"
		}else if(this.states == 1){
			this.hideWordImg.source = "show_word_png"
		}
	}
}