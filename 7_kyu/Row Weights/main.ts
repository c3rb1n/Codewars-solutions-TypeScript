export const rowWeights = (arr: number[]): number[] => {
    let team1: number = 0;
    let team2: number = 0;
  
    for (let i: number = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            team1 += arr[i];
        } else {
            team2 += arr[i];
        }
    }

    return [team1, team2];
};