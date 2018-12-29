class CurrectRD {

	private decorations = [
		['glasses','hat','bracelet','boots','necklace','bracelet'],
		['clothes2','clothes3','eyesBlack','eyesBrown','nose','noseLine','mouthPink','mouthBrown','hairStraight','hairCurly','necklace']	
	]

	private textRD = [
		'Try again. Read the 1    paragraph again.',
		'Try again. Read the 3    paragraph again.'
		];

	private curRD: number;

	public constructor() {
	}

	public getCurrectRD(name: string): number
	{
		for(let i = 0; i < 2; i++)
		{
			let rd = this.decorations[i]
			for(let j = 0; j < rd.length; j++)
			{
				if(rd[j] == name)
				{
					this.curRD = i
					return this.curRD;
				}
			}
		}
	}

	public getTextRD(): string
	{
		return this.textRD[this.curRD];
	}
}