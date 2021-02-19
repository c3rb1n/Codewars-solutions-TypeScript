export const inviteMoreWomen = (L: number[]): boolean => 
    L.filter(el => el === -1).length < L.length - L.filter(el => el === -1).length;