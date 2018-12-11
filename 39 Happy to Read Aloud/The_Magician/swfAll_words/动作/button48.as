// Action script...

on (rollOver)
{
    clock = new Sound();
    clock.attachSound("rock");
    clock.start();
}

on (rollOut)
{
    clock.stop();
}
