class BookSence1 extends eui.Component implements  eui.UIComponent {
    private grayTweenGroup:egret.tween.TweenGroup;
	private grayCanvasGroup:eui.Group;

	private dialogGroup:eui.Group;

	private nextGroup:eui.Group;

	private currentSoundChannel:egret.SoundChannel;
	private teacherTouchImg:eui.Image;
	private teacher1Label:eui.Label;
	private teacher2Label:eui.Label;
	private teacherHeadImg:eui.Image;

	private nextBtnGroup:eui.Group;

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
		this.playAnimation();
	}

	private async playAnimation():Promise<void>
	{
       this.grayTweenGroup.play(0);
	   this.currentSoundChannel = (RES.getRes('in_class_room_mp3') as egret.Sound).play(0,1);
	   await ThreadUtility.sleep(3000);
	   this.grayCanvasGroup.visible = false;
	   this.dialogGroup.visible = true;
	   this.classRoomBook();
	}

	private async classRoomBook():Promise<void>
	{
	   this.currentSoundChannel = (RES.getRes('put_book_mp3') as egret.Sound).play(0,1);
	   await ThreadUtility.sleep(2000);
	   this.teacherTouchImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextDialog, this);
	   this.teacherTouchImg.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.teacherHeadImg.source='teacher_head_normal_png', this);
	   this.teacherTouchImg.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.teacherHeadImg.source='teacher_head_hover_png', this);		   
	   		   
	}

	private async nextDialog():Promise<void>
	{  
	   this.teacher1Label.text = 'Yes,you can.you can put'
	   this.teacher2Label.text= "away your books now";
	   
	   
	   this.currentSoundChannel = (RES.getRes('vo_books_mp3') as egret.Sound).play(0,1);
	   await ThreadUtility.sleep(3000);
	   this.nextGroup.visible = true;
	   this.nextBtnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new lineUpScene2()), this);
       
	}
	
}