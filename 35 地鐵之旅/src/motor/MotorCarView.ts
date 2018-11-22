interface MotorCarView {
	playStartIntroduction(): Promise<void>;
    playGapMP3(): Promise<void>;
    openRightDoor(): Promise<void>;
    closeRightDoor(): Promise<void>;
    openLeftDoor(): Promise<void>;
    closeLeftDoor(): Promise<void>;
    stationPillarBackground(src: string): void;
    playMindoorMP3(): Promise<void>;
    driveCar(): void;
    stopDriveCar(): void;
}