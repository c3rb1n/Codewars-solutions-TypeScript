export const reverseSeq = (n: number): number[] => {
    let result: number[] = [];
    
    for (let i: number = 1; i <= n; i++) {
        result.push(i);
    }
  
    return result.reverse();
};