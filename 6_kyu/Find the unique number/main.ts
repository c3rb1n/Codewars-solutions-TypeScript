export const findUniq = (arr: number[]): number => {
    let equalNumbers: number;
  
    arr.forEach((el: number, index: number): void => {
        if (el === arr[++index]) equalNumbers = el;
    });
  
    return arr.find((el: number): boolean => el !== equalNumbers) as number;
};