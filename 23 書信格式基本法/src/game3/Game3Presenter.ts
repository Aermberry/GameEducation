class Game3Presenter {
	private view: Game3View;

	public constructor() {
	}

	public loadView(view: Game3View)
	{
		this.view = view;
	}

	public async onLackLabelComponentTap(labelComponent:LabelComponents)
	{
		console.log(1);
		if(Main.instance.trim(labelComponent.text,'g') == Game3Repository.lackOfPart){
			console.log(2);
			//选择正确
			this.view.showAlertInfo('你答對了');
			
			this.view.hideLackNameGroup();
			this.view.showNextQuestionAnimation();
			await lzlib.ThreadUtility.sleep(1000);
			this.view.hideAlertInfo();
		}else{
			// this.view.showPartBorder(Main.instance.trim(labelComponent.text,'g'));
		}
		
	}

	public async onCorrectLabelComponentTap(labelComponent:LabelComponents)
	{
		// if(Main.instance.trim(labelComponent.text,'g') == Game2Repository.correctOfPart){
		// 	//选择正确
		// 	this.view.showCorrectGroup();
		// 	this.view.showNextLevelAnimation();
		// 	await lzlib.ThreadUtility.sleep(1000);
		// 	this.view.hideCorrectGroup();
		// 	this.view.showNextLevelComponent();
		// }else{
		// 	this.view.showAlertElder(Main.instance.trim(labelComponent.text,'g'));
		// }
	}
}