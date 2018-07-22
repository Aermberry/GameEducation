namespace lzlib {
	export class TweenGroupUtility {

		/**
		 * 循环播放动画
		 */
		public static playAnimation(target:egret.tween.TweenGroup):void
		{
			for(var key in target.items)
			{
				target.items[key].props = {loop:true};
			}
			target.play(0);
		}
	}
}