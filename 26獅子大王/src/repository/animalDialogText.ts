class animalDialogText {
    public constructor() {

    }

    public getAll(index: number): egret.ITextElement[] {
        switch (index) {
            case 0:
                return [
                    {
                        text: "對不起，卡上沒有我\n的", style: {
                            size: 50, textColor: 0x000000
                        }
                    },
                    {
                        text: "名字", style: {
                            size: 50, textColor: 0xa00000
                        }
                    },
                    {
                        text: "!我", style: {
                            size: 50, textColor: 0x000000
                        }
                    },
                    {
                        text: "不知道", style: {
                            size: 50, textColor: 0xa00000
                        }
                    },
                    {
                        text: "大\n王是邀請", style: {
                            size: 50, textColor: 0x000000
                        }
                    },
                    {
                        text: "我", style: {
                            size: 50, textColor: 0xa00000
                        }
                    },
                    {
                        text: "來啊。", style: {
                            size: 50, textColor: 0x000000
                        }
                    }
                ]
            case 1:
                return [
                    {
                        text: "卡上沒有", style: {
                            size: 50, textColor: 0x000000
                        }
                    },
                    {
                        text: "收卡人姓\n", style: {
                            size: 50, textColor: 0xa00000
                        }
                    },
                    {
                        text: "名", style: {
                            size: 50, textColor: 0xa00000
                        }
                    }, {
                        text: ",讓我寫上吧！", style: {
                            size: 50, textColor: 0x000000
                        }
                    }
                ]
            case 2:
                return [
                    {
                        text: "對不起！我不知道\n", style: {
                            size: 50, textColor: 0x000000
                        }
                    },
                    {
                        text: "應該", style: {
                            size: 50, textColor: 0x000000
                        }
                    },
                    {
                        text: "哪天", style: {
                            size: 50, textColor: 0xa00000
                        }
                    }, {
                        text: "來參加！", style: {
                            size: 50, textColor: 0x000000
                        }
                    }
                ]
            case 3:
                return [
                    {
                        text: "讓我寫上", style: {
                            size: 50, textColor: 0x000000
                        }
                    },
                    {
                        text: "聚會的日\n", style: {
                            size: 50, textColor: 0xa00000
                        }
                    },
                    {
                        text: "期", style: {
                            size: 50, textColor: 0xa00000
                        }
                    }, {
                        text: "吧！", style: {
                            size: 50, textColor: 0x000000
                        }
                    }, {
                        text: "當天是11月\n", style: {
                            size: 50, textColor: 0x000000
                        }
                    }, {
                        text: "9日對吧？", style: {
                            size: 50, textColor: 0x000000
                        }
                    }
                ]
            case 4:
                return [
                    {
                        text: "對不起！我不知道\n", style: {
                            size: 50, textColor: 0x000000
                        }
                    },
                    {
                        text: "時間", style: {
                            size: 50, textColor: 0xa00000
                        }
                    },
                    {
                        text: "啊！", style: {
                            size: 50, textColor: 0x000000
                        }
                    }
                ]
            case 5:
                return [
                    {
                        text: "讓我替你寫上聚會\n", style: {
                            size: 50, textColor: 0x000000
                        }
                    },
                    {
                        text: "的時間吧！是", style: {
                            size: 50, textColor: 0x000000
                        }
                    },
                    {
                        text: "下午\n", style: {
                            size: 50, textColor: 0xa00000
                        }
                    }, {
                        text: "六時", style: {
                            size: 50, textColor: 0xa00000
                        }
                    }, {
                        text: "吧！", style: {
                            size: 50, textColor: 0x000000
                        }
                    }
                ]
        }
    }
}