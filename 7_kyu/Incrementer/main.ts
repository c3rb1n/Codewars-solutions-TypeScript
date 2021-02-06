export const incrementer = (nums: number[]): number[] =>
    nums.map((n, index) => (n + index + 1) % 10);