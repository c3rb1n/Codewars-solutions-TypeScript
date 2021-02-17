export class Kata {
    static dnaStrand(dna: string): string {
        return dna.split("").map(el => el === "A" ? "T" :
                                       el === "T" ? "A" :
                                       el === "G" ? "C" : "G").join("");
    }
}