export const getNewNotes = (salary: number, bills: number[]): number => {
    const result: number = 
          Math.floor((salary - bills
          		.reduce((a: number, b: number): number => a + b, 0)) / 5);
  
    return result > 0 ? result : 0;
};