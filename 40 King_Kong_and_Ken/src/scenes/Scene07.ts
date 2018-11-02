class Scene07 extends eui.Component implements eui.UIComponent {
	private nextButton: eui.Button;
	private pongLabel: eui.Label;
	private pongLabel0:eui.Label;
	private KongLabel:eui.Label;
	private strongLabel:eui.Label
	;
	private DongLabel:eui.Label;
	private DongLabel0:eui.Label;
	private kongLebel:eui.Label;
	private gongLabel:eui.Label;
	private headerLabel:eui.Label;
	private diplay:egret.tween.TweenGroup;
	private arry:eui.Label[];

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		Base.onAsyncPlayBlackgroundMusic('08_startgame1a_mp3');
		this.diplay.play(0);
		this.arry = [this.pongLabel, this.pongLabel0, this.KongLabel, this.strongLabel, this.DongLabel, this.DongLabel0,this.kongLebel,this.gongLabel];
		this.changColor(this.arry);
		Base.onClickNextScene(this.nextButton, new Scene08())

		
	}

	private async changColor(arry: eui.Label[]): Promise<void> {
		await lzlib.ThreadUtility.sleep(20000);
		for (let i = 0; i < arry.length; i++) {
			await lzlib.ThreadUtility.sleep(2000);
			console.log(arry[i]);
			Base.changColor(arry[i]);
			await lzlib.ThreadUtility.sleep(2000);
			await Base.ruling(this, arry[i]);
		}
		await lzlib.ThreadUtility.sleep(1000);
		this.headerLabel.visible=true;
		await lzlib.SoundUtility.playSound('08_startgame1b_mp3');
		this.nextButton.visible=true;
	}

}