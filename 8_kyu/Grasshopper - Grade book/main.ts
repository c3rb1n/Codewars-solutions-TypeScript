export const getGrade = (a: number, b: number, c: number): string => {
    const avgScore: number = (a + b + c) / 3;

    return avgScore >= 90 ? "A" :
           avgScore >= 80 ? "B" :
           avgScore >= 70 ? "C" :
           avgScore >= 60 ? "D" : "F";
};