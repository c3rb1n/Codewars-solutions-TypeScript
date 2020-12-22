export const fakeBin = (x: string): string => 
    x.split("").map((el: string) => +el < 5 ? "0" : "1").join("");