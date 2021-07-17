export const iqTest = (numbers: string): number => {
    const numbersArr: number[] = numbers.split(" ")
                                        .map((el: string): number => +el);
    
    let odds: number = 0;
    let evens: number = 0;
  
    numbersArr.forEach((el: number): number => el % 2 === 0 ? evens++ : odds++);
  
    const result: number[] = evens > odds ? 
        numbersArr.filter((el: number): boolean => el % 2 !== 0) :
        numbersArr.filter((el: number): boolean => el % 2 === 0);
  
    return numbersArr.indexOf(result[0]) + 1;
};