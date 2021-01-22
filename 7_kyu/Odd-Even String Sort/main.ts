export const sortMyString = (s: string): string =>
    s.split("").filter((el, index) => index % 2 === 0).join("") + " " + 
    s.split("").filter((el, index) => index % 2 !== 0).join("");