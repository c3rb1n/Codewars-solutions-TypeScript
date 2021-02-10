export const equalize = (array: number[]): string[] => 
    array.map(el => el === array[0] ? 
               `+0` : el > array[0] ? 
               `+${el - array[0]}` : `${el - array[0]}`);