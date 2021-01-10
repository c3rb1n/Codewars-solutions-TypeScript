export const basicOp = (operation: string, 
                        value1: number, 
                        value2: number): number | undefined => {
    switch (operation) {
        case "+":
            return value1 + value2;
        case "-":
            return value1 - value2;
        case "*":
            return value1 * value2;
        case "/":
            return value1 / value2;
    }
};