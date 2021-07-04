const encoderDecoder = {
  a: "g", e: "d", y: "r", o: "p", u: "l", i: "k",
  A: "G", E: "D", Y: "R", O: "P", U: "L", I: "K",
  g: "a", d: "e", r: "y", p: "o", l: "u", k: "i",
  G: "A", D: "E", R: "Y", P: "O", L: "U", K: "I"
};

export const encode = (str: string): string => 
    str.split('').map((el: string): string => encoderDecoder[el] || el).join("");

export const decode = (str: string): string => encode(str);