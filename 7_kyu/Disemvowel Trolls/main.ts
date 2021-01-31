export class Kata {
    static disemvowel(str: string): string {
        const options: any = "aeiouAEIOU";
        const result: string = str.split("").filter((el: string) => !options.includes(el)).join("");
      
        return result;
    }
}