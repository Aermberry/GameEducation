class FirstLevelSelectScene extends eui.Component implements  eui.UIComponent {
	private FirstCircleImg:eui.Image;
	private SecondCircleImg:eui.Image;
	private ThirdCircleImg:eui.Image;
	private ForthCircleImg:eui.Image;
	private FifthCircleImg:eui.Image;
	private SixthCircleImg:eui.Image;
	private SeventhCircleImg:eui.Image;
	private EigthCircleImg:eui.Image;
	private NinthCircleImg:eui.Image;

	private firststates = 0; //记录用户点击次数
	private secondstates = 0;
	private thirdstates = 0;
	private forthstates = 0;
	private fifthstates = 0;
	private sixthstates = 0;
	private seventhstates = 0;
	private eigthstates = 0;
	private ninthstates = 0;

	private confirmGroup:eui.Group;
	private confirmFrame:eui.Image;
	private exitGroup:eui.Group;
	private confirmLabel:eui.Label;
    private continueGroup:eui.Group;
	private currentSoundChannel:egret.SoundChannel;

	private soundImg:eui.Image;
	private soundFrame:eui.Image;
	private soundGroup:eui.Group;
	private continueImg:eui.Image;
	private continueFrame:eui.Image;
	private bgImg:eui.Image;
	private buleProgressBar:eui.Image;
	private closeGroup:eui.Group;
	private playSoundFirstTweenGroup:egret.tween.TweenGroup;
	private yellowFrame:eui.Image;
	private squareFrame:eui.Image;
	private closeImg:eui.Image;
    private PlayText:eui.Image;
    private whiteProgress:eui.Image;

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
		mouse.setButtonMode(this.FirstCircleImg,true);
		mouse.setButtonMode(this.SecondCircleImg,true);
		mouse.setButtonMode(this.ThirdCircleImg,true);
		mouse.setButtonMode(this.ForthCircleImg,true);
		mouse.setButtonMode(this.FifthCircleImg,true);
		mouse.setButtonMode(this.SixthCircleImg,true);
		mouse.setButtonMode(this.SeventhCircleImg,true);
		mouse.setButtonMode(this.EigthCircleImg,true);
		mouse.setButtonMode(this.NinthCircleImg,true);
		mouse.setButtonMode(this.confirmGroup,true);
		mouse.setButtonMode(this.exitGroup,true);
		
		this.currentSoundChannel = (RES.getRes('first_select_bgm_mp3') as egret.Sound).play(0,1);
		
		this.initAnimalsTouchEvent();
		this.initConfirmBtn();
		
	}
	

	private initConfirmBtn() {
		this.confirmGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.confirmLabel.textColor = 16777215,this);
		this.confirmGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.confirmLabel.textColor = 16776704,this);
		this.confirmGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.confrimEvent ,this);
	}
    
	//点击confrim按钮后进入判断，判断是否选择正确
	private confrimEvent() {
		let condition = this.ThirdCircleImg.alpha&&this.ForthCircleImg.alpha&&this.FifthCircleImg.alpha&&this.EigthCircleImg.alpha
		&&this.NinthCircleImg.alpha&&!this.FirstCircleImg.alpha&&!this.SecondCircleImg.alpha&&!this.SixthCircleImg.alpha&&!this.SeventhCircleImg.alpha;
		if(condition){
			this.stopCurrentSoundChannel();           
			this.currentSoundChannel = (RES.getRes('correct_mp3') as egret.Sound).play(0,1);

			this.continueGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goNextScene, this);
			this.continueImg.alpha = 1;
			this.continueFrame.alpha = 1;
			this.confirmGroup.visible = false;
			this.confirmFrame.alpha = 0.5;
			this.confirmLabel.alpha = 0.5;

			this.continueGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.continueImg.source="continue_normal_png" ,this);
			this.continueGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.continueImg.source = "continue_hover_png",this);	
		}
		else{
            this.stopCurrentSoundChannel();           
			this.currentSoundChannel = (RES.getRes('incorrect_mp3') as egret.Sound).play(0,1);
			this.soundImg.alpha = 1;
			this.soundFrame.alpha = 1;
			this.soundGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playsoundAndTweenGroup,this);
		}
	}
    private async playsoundAndTweenGroup():Promise<void> {
		    this.stopCurrentSoundChannel();
			this.soundGroup.visible = false;
			this.currentSoundChannel = (RES.getRes('fitst_level_description_mp3') as egret.Sound).play(0,1);
			this.bgImg.alpha = 0.5;
            this.initCloseBtn();
            //進度條動畫
			this.setChildIndex(this.yellowFrame,92);
			this.setChildIndex(this.squareFrame,93);
			this.setChildIndex(this.closeImg,93);
			this.setChildIndex(this.closeGroup,94);
			this.setChildIndex(this.PlayText,93);
			this.setChildIndex(this.whiteProgress,93);
			this.setChildIndex(this.buleProgressBar,93);
			
            this.buleProgressBar.alpha =1;
            for (let second = 0; second < 110; second++) {
				this.playSoundFirstTweenGroup.play();
                this.buleProgressBar.width = second / 110 * 575;
                await lzlib.ThreadUtility.sleep(1000);
            }
	}

	//移除动画
	private initCloseBtn() {
		    this.closeGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.stopSoundTweenGroup,this);
	}
	private stopSoundTweenGroup() {
		    this.stopCurrentSoundChannel();
			Main.instance.gotoScene(new FirstLevelSelectScene);	
	}
    
	private goNextScene() {
		this.stopCurrentSoundChannel();
		Main.instance.gotoScene(new SecondLevelStartScene());
	}
    
	//添加动物点击事件
	private initAnimalsTouchEvent() {
		this.FirstCircleImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.foxTouchEvent, this);
		this.SecondCircleImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dogTouchEvent, this);
		this.ThirdCircleImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hippoTouchEvent, this);
		this.ForthCircleImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pigTouchEvent, this);
		this.FifthCircleImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.penguinTouchEvent, this);
		this.SixthCircleImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.kolalaTouchEvent, this);
		this.SeventhCircleImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.catTouchEvent, this);
		this.EigthCircleImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.frogTouchEvent, this);
		this.NinthCircleImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.squirrelTouchEvent, this);
		
	}
	//动物的点击事件
	
	private foxTouchEvent() {
		this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('fox_mp3') as egret.Sound).play(0,1);

		this.firststates++;
	    if(this.firststates > 1){
             this.firststates = 0;
	    }
		console.log("1点击奇偶数"+this.firststates);

		if(this.firststates == 0){
			this.FirstCircleImg.alpha = 0;
		}else if(this.firststates == 1){
			this.FirstCircleImg.alpha = 1;
		}
		console.log("1图片透明度"+this.FirstCircleImg.alpha);
		return this.FirstCircleImg.alpha;
	}
    
	private dogTouchEvent() {
		this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('dog_mp3') as egret.Sound).play(0,1);

		this.secondstates++;
	    if(this.secondstates > 1){
             this.secondstates = 0;
	    }
		console.log("2点击奇偶数"+this.secondstates);

		if(this.secondstates == 0){
			this.SecondCircleImg.alpha = 0;
		}else if(this.secondstates == 1){
			this.SecondCircleImg.alpha = 1;
		}
		console.log("2图片透明度"+this.SecondCircleImg.alpha);
		return this.SecondCircleImg.alpha;
	}

	private hippoTouchEvent() {
        this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('hippo_mp3') as egret.Sound).play(0,1);

		this.thirdstates++;
	    if(this.thirdstates > 1){
             this.thirdstates = 0;
	    }
		console.log("3点击奇偶数"+this.thirdstates);

		if(this.thirdstates == 0){
			this.ThirdCircleImg.alpha = 0;
		}else if(this.thirdstates == 1){
			this.ThirdCircleImg.alpha = 1;
		}
		console.log("3图片透明度"+this.ThirdCircleImg.alpha);
		return this.ThirdCircleImg.alpha;
	}

	private pigTouchEvent() {
		this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('pig_mp3') as egret.Sound).play(0,1);

		this.forthstates++;
	    if(this.forthstates > 1){
             this.forthstates = 0;
	    }
		console.log("4点击奇偶数"+this.forthstates);

		if(this.forthstates == 0){
			this.ForthCircleImg.alpha = 0;
		}else if(this.forthstates == 1){
			this.ForthCircleImg.alpha = 1;
		}
		console.log("4图片透明度"+this.ForthCircleImg.alpha);
		return this.ForthCircleImg.alpha;
	}

	private penguinTouchEvent() {
        this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('penguin_mp3') as egret.Sound).play(0,1);

		this.fifthstates++;
	    if(this.fifthstates > 1){
             this.fifthstates = 0;
	    }
		console.log("5点击奇偶数"+this.fifthstates);

		if(this.fifthstates == 0){
			this.FifthCircleImg.alpha = 0;
		}else if(this.fifthstates == 1){
			this.FifthCircleImg.alpha = 1;
		}
		console.log("5图片透明度"+this.FifthCircleImg.alpha);
		return this.FifthCircleImg.alpha;
	}

	private kolalaTouchEvent() {
        this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('kolala_mp3') as egret.Sound).play(0,1);

		this.sixthstates++;
	    if(this.sixthstates > 1){
             this.sixthstates = 0;
	    }
		console.log("6点击奇偶数"+this.sixthstates);

		if(this.sixthstates == 0){
			this.SixthCircleImg.alpha = 0;
		}else if(this.sixthstates == 1){
			this.SixthCircleImg.alpha = 1;
		}
		console.log("6图片透明度"+this.SixthCircleImg.alpha);
		return this.SixthCircleImg.alpha;
	}

	private catTouchEvent() {
        this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('cat_mp3') as egret.Sound).play(0,1);

		this.seventhstates++;
	    if(this.seventhstates > 1){
             this.seventhstates = 0;
	    }
		console.log("7点击奇偶数"+this.seventhstates);

		if(this.seventhstates == 0){
			this.SeventhCircleImg.alpha = 0;
		}else if(this.seventhstates == 1){
			this.SeventhCircleImg.alpha = 1;
		}
		console.log("7图片透明度"+this.SeventhCircleImg.alpha);
		return this.SeventhCircleImg.alpha;
	}

	private frogTouchEvent() {
        this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('frog_mp3') as egret.Sound).play(0,1);

		this.eigthstates++;
	    if(this.eigthstates > 1){
             this.eigthstates = 0;
	    }
		console.log("8点击奇偶数"+this.eigthstates);

		if(this.eigthstates == 0){
			this.EigthCircleImg.alpha = 0;
		}else if(this.eigthstates == 1){
			this.EigthCircleImg.alpha = 1;
		}
		console.log("8图片透明度"+this.EigthCircleImg.alpha);
		return this.EigthCircleImg.alpha;
	}

	private squirrelTouchEvent() {
        this.stopCurrentSoundChannel();
		this.currentSoundChannel = (RES.getRes('squirrel_mp3') as egret.Sound).play(0,1);

		this.ninthstates++;
	    if(this.ninthstates > 1){
             this.ninthstates = 0;
	    }
		console.log("9点击奇偶数"+this.ninthstates);

		if(this.ninthstates == 0){
			this.NinthCircleImg.alpha = 0;
		}else if(this.ninthstates == 1){
			this.NinthCircleImg.alpha = 1;
		}
		console.log("9图片透明度"+this.NinthCircleImg.alpha);
		return this.NinthCircleImg.alpha;
	}
    

	private stopCurrentSoundChannel():void{
            if(this.currentSoundChannel != null){
               this.currentSoundChannel.stop();
            } 
    }
	
}