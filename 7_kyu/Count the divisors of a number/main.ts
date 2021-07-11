export const divisors = (n: number): number => {
    let result: number = 0;
  
    for (let i: number = 0; i <= n; i++) {
        if (n % i === 0) result++;
    }
  
    return result;
};