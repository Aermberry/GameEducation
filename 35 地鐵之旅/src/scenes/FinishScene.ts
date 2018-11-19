class FinishScene extends eui.Component implements  eui.UIComponent {
	
	private journeyLabel: eui.Label;
	private dateLabel: eui.Label;
	
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
		this.journeyLabel.text = CurrectJourneyRepository.currectJourney;
		this.dateLabel.text = this.getTime();

	}

	private getTime(): string
	{
		let startDate = CurrectJourneyRepository.startDate;
		let startMinute = startDate.getMinutes();
		let startSecond = startDate.getSeconds();
		let currectDate = new Date();
		let curMinute = currectDate.getMinutes();
		let curSecond = currectDate.getSeconds();
		let minute = curMinute - startMinute;
		let second = 0;
		if(curSecond > startSecond)
		{
			second = curSecond - startSecond;
		}else
		{
			minute--;
			second = (curSecond + 60) - startSecond;
		}
		let dateStr ='完成時間：' + minute + '分' + second + '秒';
		return dateStr;
	}
	
}