class HeadBodyRepository {

	private head = ['earrings','crown','hairWave','mouthRed','nosePointed','eyesBlue','eyesBlack','eyesBrown','nose','noseLine','mouthPink','mouthBrown','hairStraight','hairCurly','glasses','hat','bracelet'];
	private	body = ['clothes2','clothes3','boots','glassSlippers','clothes1'];


	public constructor() {
	}

	public isInHead(name: string): boolean
	{
		for(let i = 0; i < this.head.length; i++)
		{
			if(this.head[i] == name)
			{
				return true;
			}
		}
		return false;
	}

	public isInBody(name: string): boolean
	{
		for(let i = 0; i < this.body.length; i++)
		{
			if(this.body[i] == name)
			{
				return true;
			}
		}
		return false;
	}
}