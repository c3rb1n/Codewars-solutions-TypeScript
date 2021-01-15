export const accum = (s: string): string => s.split("").map((el, index) => 
    el.toUpperCase() + el.repeat(index).toLowerCase()).join("-");