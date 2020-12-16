export const summation = (num: number): number => {
    let result: number = 0;
    
    for (let i: number = 1; i <= num; i++) {
        result += i;
    }
    
    return result;
};