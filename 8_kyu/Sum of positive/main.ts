export const positiveSum = (arr: number[]): number => 
    arr.filter(el => el > 0).reduce((a, b) => a + b, 0);