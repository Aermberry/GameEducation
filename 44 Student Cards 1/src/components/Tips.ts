
namespace Ui {
	export class Tips extends eui.Component implements eui.UIComponent {
		private tipLabe:eui.Label;
		public constructor() {
			super();
			this.skinName="TipsSkin"
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}


		protected childrenCreated(): void {
			super.childrenCreated();
			this.tipLabe.text = this.tipString;
		}

		private _tipString: string;

		public set tipString(value: string) {
			this._tipString = value;
		 let a= (this.tipLabe && (this.tipLabe.text = this.tipString));
			console.log(a)
		}
		public get tipString(): string {
			return this._tipString;
		}

	}
}
