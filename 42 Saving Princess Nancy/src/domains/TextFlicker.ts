class TextFlicker {

	private labels: eui.Label[];
	private flickerNum = 2;//闪烁次数；
	private curflickerNum = 0;
	private color = 0xff0000;//闪烁颜色

	public constructor(labels: eui.Label[]) {
		this.labels = labels;
	}

	public flicker(): void
	{
		let timer = setTimeout(async () => {
			// if(this.curflickerNum == this.flickerNum)
			// {
			// 	this.curflickerNum = 0;
			// 	clearTimeout(timer);
			// 	return;
			// }
			// this.curflickerNum++;
			this.changeTextColor(this.color);
			await lzlib.ThreadUtility.sleep(1200);
			this.changeTextColor(this.color);
			clearTimeout(timer);
		})
	}

	private changeTextColor(color: number): void
	{
			for(let i = 0; i < this.labels.length; i++)
			{
				this.labels[i].textColor = color
			}
	}
}