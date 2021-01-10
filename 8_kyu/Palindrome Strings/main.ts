export const isPalindrome = (line: string): boolean => 
    line === line.split("").reverse().join("");