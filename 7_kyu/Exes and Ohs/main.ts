export const xo = (str: string): boolean => {
  let x: number = 0;
  let o: number = 0;
  
  for (let i: number = 0; i < str.length; i++) {
    if (/x/i.test(str[i])) {
      x++;
    } else if (/o/i.test(str[i])) {
      o++;
    }
  }
  
  return !x && !o || x === o;
};