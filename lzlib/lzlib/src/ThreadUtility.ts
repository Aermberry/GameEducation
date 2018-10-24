namespace lzlib {
	export class ThreadUtility {
		public static sleep(ms = 0) {
			return new Promise(r => setTimeout(r, ms));
		}
	}
}