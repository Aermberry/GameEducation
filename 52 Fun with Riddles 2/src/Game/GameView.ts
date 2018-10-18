interface GameView {

  // 跳轉頁面
  gotoNextScene(scene:eui.Component): void
  // Drag功能
  initDrag(): void
  // Drop功能
  initDropable(): void
  // Drop配對功能
  onLabelDrop(e:lzlib.LzDragEvent): void
  // Drop不配對功能
  onDragCancel(): void
  // 顯示提示
  showTIpsLabel(): void
  //關閉提示
  closeTipsLabel():void
}