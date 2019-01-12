class BoyRepository {

	public static boys = [
		'boy0_png',
		'boy1_png',
		'boy2_png',
		'boy3_png',
		'boy4_png'
	];

	public cleanBoys = [
		'boy0_clean_png',
		'boy1_clean_png',
		'boy2_clean_png',
		'boy3_clean_png',
		'boy4_clean_png'
	];

	public static helpedBoys = 0; //记录当前帮助了多少个小孩

	public static currentBoy = 0; //当前帮助的小孩

	public helpSentence = [
		'You helped one child!',
		'You helped two children!',
		'You helped three children!',
		'You helped four children!',
		'You helped five children!'
	];

	public constructor() {
	}

	public deleteBoy(index: number): void
	{
		BoyRepository.boys[index] = '';
	}

}