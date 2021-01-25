export const solution = (arr: number[], options: {modifier: number}): number[] =>
    arr.map(el => el + 2 * options.modifier);