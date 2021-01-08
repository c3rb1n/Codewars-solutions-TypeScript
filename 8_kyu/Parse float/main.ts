export const parseF = (s: string): number => 
    isNaN(parseFloat(s)) ? null : parseFloat(s);