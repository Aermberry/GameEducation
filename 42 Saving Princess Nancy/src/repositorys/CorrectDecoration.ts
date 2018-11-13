class CorrectDecoration {

	private currectDecorations = [
		'clothes1','eyesBlue','nosePointed','mouthRed','hairWave','gloves','crown','earrings','glassSlippers','necklace'
	];

	public constructor() {
	}

	public isCorrectDecoration(name: string): boolean
	{
		for(let i = 0; i < this.currectDecorations.length; i++)
		{
			if(this.currectDecorations[i] == name)
			{
				return true;
			}
		}
		return false;
	}
}