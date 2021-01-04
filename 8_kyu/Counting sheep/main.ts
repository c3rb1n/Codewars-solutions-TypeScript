export const countSheeps = 
    (arrayOfSheep: (boolean | undefined | null)[]): number | boolean =>
        arrayOfSheep !== undefined && arrayOfSheep !== null &&
        arrayOfSheep.filter(el => el).length;