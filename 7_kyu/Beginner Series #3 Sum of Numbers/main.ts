export const getSum = (a: number, b: number): number => {
    if (a === b) {
        return a;
    }
  
    let result: number = 0;
    const lesser: number = a < b ? a : b;
    const larger: number = a > b ? a : b;
  
    for (let i: number = lesser; i <= larger; i++) {
        result += i;
    }
  
    return result;
};