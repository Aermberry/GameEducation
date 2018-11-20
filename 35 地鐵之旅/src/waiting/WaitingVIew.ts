interface WaitingVIew {
	stationColor(backPath: string): void;
    stationText(text: string): void;
    marking1And2(name: string): void;
    marking3And4(name: string): void;
    marking1(name: string): void;
    marking2(name: string): void;
    marking3(name: string): void;
    marking4(name: string): void;
    runLeftCar(): Promise<void>;
    runRightCar(): Promise<void>;
    enableLeftArrow(): void;
    disableLeftArrow(): void;
    enableRightArrow(): void;
    disableRightArrow(): void;
}