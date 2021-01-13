export const findShort = (s: string): number => {
    const arr: string[] = s.split(" ");
    let shortest: string = arr[0];
    
    for (let i: number = 0; i < arr.length; i++) {
        if (shortest.length >= arr[i].length) {
            shortest = arr[i];
        }
    }
  
    return shortest.length;
};