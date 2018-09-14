namespace Ui {
	export class IndexTitle extends eui.Component implements eui.UIComponent {
		private indexLabel:eui.Label;
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}


		protected childrenCreated(): void {
			super.childrenCreated();
			this.indexLabel.text=this.index;
		}

		private _index:string="1";

		public set index(value:string){
			this._index=value;
		}

		public get index():string{
			return this._index;
		} 

	}
}
