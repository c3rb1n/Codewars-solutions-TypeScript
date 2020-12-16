export const squareSum = (numbers: number[]): number => 
	numbers.reduce((a, b) => a + b ** 2, 0);