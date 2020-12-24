export const abbrevName = (name: string): string => 
    name.split(" ").map((el: string): string => el[0].toUpperCase()).join(".");