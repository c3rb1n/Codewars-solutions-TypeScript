export class G964 {
    public static printerError(s: string): string {
        const wrongLetters: any = "nopqrstuvwxyz";
        return `${s.split("")
            .filter(el => wrongLetters.includes(el)).length}/${s.length}`;
    }
}