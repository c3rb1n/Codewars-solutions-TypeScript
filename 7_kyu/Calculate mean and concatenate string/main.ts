export const mean = (list: string[]): [number, string] => {
    let num: number[];
    let str: string[];
  
    num = list.filter(el => !isNaN(+el)).map(el => +el);
    str = list.filter(el => isNaN(+el));
  
    return [num.reduce((a, b) => +a + +b, 0) / num.length, str.join("")];
};