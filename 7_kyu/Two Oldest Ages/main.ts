export const twoOldestAges = (ages: number[]): number[] => 
    ages.sort((a, b) => a - b).slice(ages.length - 2);