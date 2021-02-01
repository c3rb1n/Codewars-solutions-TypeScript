export const averages = (numbers: number[] | null): number[] => {
    let result: number[] = [];
  
    if (numbers === null) {
        return [];
    }
  
    for (let i = 1; i < numbers.length; i++) {
        result.push((numbers[i] + numbers[i - 1]) / 2);
    }
  
    return result;
};