export const dative = (word: string): string | undefined => {
    const vowelArr: string[] = 
          word.split("")
              .filter((el: string): boolean => "eéiíöőüűaáoóuú".includes(el));
    const lastVowel: string = vowelArr[vowelArr.length - 1];
    
    return "eéiíöőüű".includes(lastVowel) ? `${word}nek` :
           "aáoóuú".includes(lastVowel) ? `${word}nak` : undefined;  
};