 interface BaseModel{
     gotoNextScene(scene:eui.Component):void;
     initDragabel():void;
     initDropableLabel():void;
     onLabelDrop():void
     onDragCancel():void
     showTipsLabel():void
}