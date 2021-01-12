export const oddOrEven = (array: number[]): string => 
    array.reduce((a, b) => a + b, 0) % 2 === 0 ? "even" : "odd";