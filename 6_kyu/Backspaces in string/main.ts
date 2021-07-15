export const cleanString = (s: string): string => 
    s.split("").reduce((a: string, b: string): string => 
        b === "#" ? a.slice(0, -1) : a + b, "");