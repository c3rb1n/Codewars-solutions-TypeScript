export const factorial = (n: number): number => {
    let result: number = 1;
  
    for (let i: number = 1; i <= n; i++) {
        result *= i;
    }
  
    return result;
};