export class Kata {
    static spinWords = (words: string): string => 
        words.split(" ")
             .map((el: string): string => el.length >= 5 ? 
                                          el.split("")
                                            .reverse()
                                            .join("") : el).join(" ");
}