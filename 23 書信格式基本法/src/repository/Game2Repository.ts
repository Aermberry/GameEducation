class Game2Repository {
	//此文件保存当前关卡的答案以及提示信息

	//index表示上款部分在哪个数组位置；
	public index = 0;
	public lackOfPart = '上款';
	public correctOfPart = '爸爸'
	public alertInfo = {
		'媽媽':'在 寫 信 的 內 容 中， 「媽媽」  和  「你」 是同時出現，因此， 「你」 是不可能是媽媽。',
		'陳老師':'對 老 師 的 自 稱 不 會 是 「兒」, 而 是 「學生」。',
	};

	public constructor() {
	}
}