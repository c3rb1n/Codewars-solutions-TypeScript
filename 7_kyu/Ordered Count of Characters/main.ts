export const orderedCount = (text: string): [string, number][] => {
    let arr: string[] = text.split("");
    let result: [string, number][] = [];
  
    while (arr.length > 0) {
        result.push([arr[0], arr.filter(el => el === arr[0]).length]);
        arr = arr.filter(el => el !== arr[0]);
    }
  
    return result;
};