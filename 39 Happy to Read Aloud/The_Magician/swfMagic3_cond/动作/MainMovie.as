// Action script...

// [Action in Frame 1]
fscommand("fullscreen", "true");
fscommand("allowscale", "false");
fscommand("trapallkeys", "false");
play ();
vorock = new Sound();
vorock.attachSound("04_rock");
vorock.start();

// [Action in Frame 35]
stop ();

// [Action in Frame 40]
play ();

// [Action in Frame 67]
gotoAndStop(35);

// [Action in Frame 76]
play ();

// [Action in Frame 168]
stop ();

// [Action in Frame 169]
play ();

// [Action in Frame 173]
stop ();
