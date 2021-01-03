export const noSpace = (x: string): string => 
    x.split(" ").map(el => el.trim()).join("");