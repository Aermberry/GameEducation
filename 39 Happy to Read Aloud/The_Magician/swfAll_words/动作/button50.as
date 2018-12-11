// Action script...

on (rollOver)
{
    clock = new Sound();
    clock.attachSound("dock");
    clock.start();
}

on (rollOut)
{
    clock.stop();
}
