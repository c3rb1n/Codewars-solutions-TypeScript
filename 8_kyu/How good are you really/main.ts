export const betterThanAverage = (classPoints: number[], yourPoints: number) =>
    [...classPoints, yourPoints].reduce((a, b) => a + b, 0) / 
    [...classPoints, yourPoints].length < yourPoints;