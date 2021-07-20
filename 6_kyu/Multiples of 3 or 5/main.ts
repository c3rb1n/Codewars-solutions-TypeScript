export class Challenge {
    static solution = (number: number): number => {
        const result: number[] = [];
      
        for (let i: number = 0; i < number; i++) {
            if (i < 0) result.push(0);
            else if (i % 3 === 0 || i % 5 === 0) result.push(i);
        }
      
        return result.reduce((a: number, b: number) => a + b, 0);
    }
}