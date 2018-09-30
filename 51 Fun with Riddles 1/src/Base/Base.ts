/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-09-30 11:16:20 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-09-30 11:39:03
 */

class Base implements BaseModel{
	public constructor() {
	}

	public gotoNextScene(scene:eui.Component){
		Main.instance.gotoScene(scene)
	}

	public initDragabel():void{

	}


	public initDropableLabel():void{

	}

	public onLabelDrop():void{

	}

	public onDragCancel():void{

	}
	public showTipsLabel():void {
		
	}
}