// Action script...

on (rollOver)
{
    clock = new Sound();
    clock.attachSound("sock");
    clock.start();
}

on (rollOut)
{
    clock.stop();
}
