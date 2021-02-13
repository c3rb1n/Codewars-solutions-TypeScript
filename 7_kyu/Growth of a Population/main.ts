export class G964 {
    public static nbYear = (p0: number, 
                            percent: number, 
                            aug: number, 
                            p: number): number => {
        let population: number = p0;
        let yearsCounter: number = 0;
      
        while (population < p) {
            population += population * (percent / 100) + aug;
            yearsCounter++;
        }
      
        return yearsCounter;
    }
}