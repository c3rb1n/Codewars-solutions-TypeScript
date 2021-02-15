export const golfScoreCalculator = (parList: string, scoreList: string): number => {
    let result: number = 0;
  
    for (let i: number = 0; i < parList.length; i++) {
        result += +scoreList[i] - +parList[i];
    }
  
    return result;
};