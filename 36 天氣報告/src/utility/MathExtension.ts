// TypeScript file

interface Math {
    randomMinMax(min: number, max: number): number;
}

Math.randomMinMax = function (min: number, max: number): number
{
    return Math.floor(Math.random()*(max-min+1)+min);
}