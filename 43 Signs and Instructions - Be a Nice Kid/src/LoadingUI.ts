//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {
    private strokeWeight = 15;
    private progressBarWidth = 500;
    private progressBarHeight = 50;

    private downloadingLabel: egret.TextField;
    private progressBar: eui.Rect;
    private downloadedPercentageLabel: egret.TextField;

    public constructor() {
        super();
        this.createView();
    }

    private createView(): void {
        this.createDownloadingLabel();
        this.createProgressBar();
        this.createDownloadedPercentageLabel();
    }

    private createDownloadingLabel(): void
    {
        this.downloadingLabel = new egret.TextField();
        this.addChild(this.downloadingLabel);
        this.downloadingLabel.x = 700;
        this.downloadingLabel.y = 300;
        this.downloadingLabel.width = 480;
        this.downloadingLabel.height = 100;
        this.downloadingLabel.textAlign = "center";
        this.downloadingLabel.textColor = 0x000000;
        this.downloadingLabel.size = 48;
        this.downloadingLabel.text = "Loading";
    }

    private createProgressBar(): void
    {
        var border = new eui.Rect(this.progressBarWidth + this.strokeWeight * 2, this.progressBarHeight + this.strokeWeight * 2, 0x999999);
        border.strokeColor = 0xCCCCCC;
        border.strokeWeight = this.strokeWeight;
        border.x = 700;
        border.y = 400;
        this.addChild(border);

        this.progressBar = new eui.Rect(0, this.progressBarHeight, 0x5398F5);
        this.progressBar.x = 700 + this.strokeWeight;
        this.progressBar.y = 400 + this.strokeWeight;
        this.addChild(this.progressBar);
    }

    private createDownloadedPercentageLabel(): void
    {
        this.downloadedPercentageLabel = new egret.TextField();
        this.addChild(this.downloadedPercentageLabel);
        this.downloadedPercentageLabel.x = this.progressBar.x;
        this.downloadedPercentageLabel.y = this.progressBar.y;
        this.downloadedPercentageLabel.width = this.progressBarWidth;
        this.downloadedPercentageLabel.height = this.progressBarHeight;
        this.downloadedPercentageLabel.textAlign = "center";
        this.downloadedPercentageLabel.verticalAlign = 'center';
        this.downloadedPercentageLabel.textColor = 0x000000;
        this.downloadedPercentageLabel.size = 48;
    }

    public onProgress(current: number, total: number): void {
        this.downloadedPercentageLabel.text = Math.floor(current / total * 100).toString();
        this.progressBar.width = this.progressBarWidth * current / total;
    }
}

