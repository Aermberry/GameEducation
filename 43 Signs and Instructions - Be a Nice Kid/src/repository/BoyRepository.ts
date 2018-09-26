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

	public static helpedBoys = 0;

	public static currentBoy = 0;

	public helpSentence = [
		'You have helped one child!',
		'You have helped tow child!',
		'You have helped three child!',
		'You have helped four child!',
		'You have helped five child!'
	];

	public constructor() {
	}

	public deleteBoy(index: number): void
	{
		BoyRepository.boys[index] = '';
	}
}