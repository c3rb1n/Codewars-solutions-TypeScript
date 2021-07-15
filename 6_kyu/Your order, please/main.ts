export const order = (words: string): string => {
    if (!words) return words;
  
    const result: string[] = [];
  
    words.split(" ").forEach((el: string): void => {
        const index: string | undefined = 
            el.split("").find((el: string): boolean => !isNaN(+el));
      
        if (index) result[+index - 1] = el;
    });
  
    return result.join(" ");
};