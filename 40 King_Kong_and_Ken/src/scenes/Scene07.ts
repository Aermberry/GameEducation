class Scene07 extends eui.Component implements eui.UIComponent {
	private nextButton: eui.Button;
	private pongLabel: eui.Label;
	private pongLabel0: eui.Label;
	private KongLabel: eui.Label;
	private strongLabel: eui.Label
	;
	private DongLabel: eui.Label;
	private DongLabel0: eui.Label;
	private kongLebel: eui.Label;
	private gongLabel: eui.Label;
	private headerLabel: eui.Label;
	private group00: eui.Group;
	private redLineGroup: eui.Group;
	private diplay: egret.tween.TweenGroup;
	private arry: eui.Label[];

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		Base.onAsyncPlayBlackgroundMusic('08_startgame1a_mp3').then(()=>{
			this.changRedColor(this.pongLabel, this.pongLabel0, this.KongLabel, this.strongLabel, this.DongLabel, this.DongLabel0, this.kongLebel, this.gongLabel)
		});
		this.diplay.play(0);
		Base.onClickNextScene(this.nextButton, new Scene08())
	}


	//changcolor&drawline

	private async changRedColor(...restOfName: eui.Label[]): Promise<void> {
		// for (let childs of restOfName) {
		// 	await lzlib.ThreadUtility.sleep(1000);
		// 		childs.textColor = 0xd92e20;
				
		// }

		// 	for (let child of this.redLineGroup.$children) {
		// 		let element = child as eui.Rect;
		// 		await lzlib.ThreadUtility.sleep(1000)
		// 		element.visible = true;
		// 	}

			for(var i=0 ; i<restOfName.length;i++){
				await lzlib.ThreadUtility.sleep(1000);
				restOfName[i].textColor = 0xd92e20;
				await lzlib.ThreadUtility.sleep(1000);
				(this.redLineGroup.$children[i] as eui.Label).visible=true;
			}

	}

	// private drawLine(element: eui.Label): void {

	// 	let shp: egret.Shape = new egret.Shape();//初始化畫圖對象
	// 	shp.graphics.lineStyle(10, 0xd92e20, 1);//設置綫的樣式
	// 	let width = element.width//獲取寬度
	// 	let height = element.height//獲取高度
	// 	let x0 = element.x;
	// 	console.log(x0);
	// 	let y0 = element.y;
	// 	console.log(y0);
	// 	let x1 = x0;
	// 	let y1 = y0 + height;
	// 	let x2=x1+width
	// 	shp.graphics.moveTo(x0, y1);
	// 	shp.graphics.lineTo(x2,y1);
	// 	shp.graphics.endFill();
	// 	this.group00.addChild(shp);
	// }



	private async changColor(arry: eui.Label[]): Promise<void> {
		await lzlib.ThreadUtility.sleep(20000);
		for (let i = 0; i < arry.length; i++) {
			await lzlib.ThreadUtility.sleep(2000);
			Base.changColor(arry[i]);
			await lzlib.ThreadUtility.sleep(2000);
			await Base.ruling(this, arry[i]);
		}
		await lzlib.ThreadUtility.sleep(1000);
		this.headerLabel.visible = true;
		await lzlib.SoundUtility.playSound('08_startgame1b_mp3');
		this.nextButton.visible = true;
	}

	private async playSound(sound: string): Promise<void> {
		this.headerLabel.visible = true;
		await lzlib.SoundUtility.playSound(sound);
		this.nextButton.visible = true;
	}

}