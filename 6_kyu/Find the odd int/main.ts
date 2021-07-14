export const findOdd = (xs: number[]): number | undefined => {  
    for (let i: number = 0; i < xs.length; i++) {
        let elCounter: number = 0;
      
        xs.forEach((a: number): boolean | number => a === xs[i] && elCounter++); 
      
        if (elCounter % 2 !== 0) return xs[i];
    }
};