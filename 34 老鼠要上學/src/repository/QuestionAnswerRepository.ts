class QuestionAnswerRepository {

	public static curQuestion = 0;

	public question = [
		{
			'title': '1. 小 老 鼠 说 他 不 愿 意 上 学 的 原 因 是 ',
			'option': ['A . 年 紀 太 小 。','B . 怕 見 公 雞 。','C . 學 校 在 很 遠 的 地 方 。','D . 媽 媽 時 常 催 他 上 學 。']
		},
		{
			'title': '2.  公 雞 為 什 麽 向 小 老 鼠 叫 呢 ？',
			'option': ['A . 想 和 小 老 鼠 玩 耍 。','B . 告 訴 小 老 鼠 大 貓 就 在 附 近 。','C . 問 小 老 鼠 為 什 麽 不 上 學 去 。','D . 要 小 老 鼠 走 開 ， 不 要 靠 近 自 己 。']
		},
		{
			'title': '3 . 老 鼠 媽 媽 勸 小 老 鼠 上 學 去 。 下 列 哪 項 原 因 是 兩 次 勸 小 老 鼠 上 學 時 都 有 說 的 呢 ？',
			'option': ['A . 懂 得 謀 生 。','B . 知 道 誰 是 敵 人 。','C . 知 道 公 雞 說 什 麽 。','D . 知 道 花 猫 会 吃 老 鼠 。']
		},
		{
			'title': '4 . 小 老 鼠 最 後 為 什 麽 決 定 要 上 學 呢 ？',
			'option': ['A . 想 和 大 貓 玩 耍 。','B . 被 媽 媽 教 訓 了 一 頓 。','C . 要 知 道 公 雞 說 什 麽 。','D . 明 白 了 媽 媽 要 他 上 學 的 原 因 。']
		}
	];

	public answer = [
		'C . 學 校 在 很 遠 的 地 方 。','B . 告 訴 小 老 鼠 大 貓 就 在 附 近 。','C . 知 道 公 雞 說 什 麽 。','D . 明 白 了 媽 媽 要 他 上 學 的 原 因 。'
	]

	public images = [
		'cake_png','cock_border_png','box_png','book_png'
	]

	public imageWidthHeightBottom = [
		{
			'width':380,
			'height':238,
			'bottom':600
		},
		{
			'width':374,
			'height':326,
			'bottom':20
		},
		{
			'width':376,
			'height':317,
			'bottom':150
		},
		{
			'width':376,
			'height':317,
			'bottom':10
		}
	]
	public constructor() {
	}
}