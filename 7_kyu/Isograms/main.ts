export const isIsogram = (str: string): boolean => {
    const moddedStr = str.toLowerCase();
  
    return !(moddedStr.split('')
                      .filter((el: string, index: number): boolean => 
                              moddedStr.slice(index + 1).includes(el)).length);
};