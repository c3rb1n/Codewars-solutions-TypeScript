export const nerdify = (txt: string): string => {
    let result: string = txt;
  
    result = result.split("").map(el => "aA".includes(el) ? "4" : el).join("");
    result = result.split("").map(el => "eE".includes(el) ? "3" : el).join("");
    result = result.split("").map(el => "l".includes(el) ? "1" : el).join("");
  
    return result;
};