export const parse = (data: string): number[] => {
    const result: number[] = [];
    let value: number = 0;
  
    for (let i: number = 0; i < data.length; i++) {
        if (!"isdo".includes(data[i])) continue;
        else if (data[i] === "i") value++;
        else if (data[i] === "d") value--;
        else if (data[i] === "s") value **= 2;
        else if (data[i] === "o") result.push(value);
    }
    
    return result;
};