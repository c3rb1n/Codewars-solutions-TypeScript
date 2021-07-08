export const generateShape = (int: number): string => {
    const result: string[] = [];
    const oneSide: string = "+".repeat(int);
  
    for (let i: number = 0; i < int; i++) {
      result.push(oneSide);
    }
  
    return result.join("\n");
};