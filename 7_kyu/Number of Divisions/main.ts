export const divisions = (n: number, divisor: number): number => {
    let dividend: number = n;
    let result: number = 0;
  
    while (dividend >= divisor) {
        dividend = Math.floor(dividend / divisor);
        result++;
    }
  
    return result;
};