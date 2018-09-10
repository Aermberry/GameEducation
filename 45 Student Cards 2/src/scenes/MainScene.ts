class MainScene extends eui.Component implements  eui.UIComponent {
	private dragGroup:eui.Group;
	private drogGroup:eui.Group;
	private helpGroup:eui.Group;
	private alertGroup:eui.Group;

	private currentQuestionIndex=0;// 当前问题，用户只能按顺序拖动label,逐条回答问题

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
		mouse.enable(this.stage);//启用mouse检测
		lzlib.SoundUtility.playSound('02_mp3')//加载声音资源
	}

	// 拖拽模块


	// help模块
	private initHelpButton():void {
		this.helpGroup.$children.forEach(child=>{
			mouse.setButtonMode(child,true);//设置鼠标监听事件,当鼠标经过指定对象时，手型变换
			child.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onHelpButtonClick,this);
		});
	}
	
	private async onHelpButtonClick():Promise<void>{
		let originalChildIndex=this.getChildIndex(this.alertGroup);//返回一个指定元素的index
		this.setChildIndex(this.alertGroup,this.numChildren-1);//控制alerGroup的层级在最顶层
		this.alertGroup.getChildAt(this.currentQuestionIndex).visible=true;//根据index获取alertGroup中的指定的元素
		await lzlib.ThreadUtility.sleep(3000);
		this.alertGroup.getChildAt(this.currentQuestionIndex).visible=false;
		this.setChildIndex(this.alertGroup,originalChildIndex);//将层级调回到原来的位置
	} 
}