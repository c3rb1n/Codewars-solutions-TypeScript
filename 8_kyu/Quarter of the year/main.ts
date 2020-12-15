export const quarterOf = (month: number): number => month <= 3 ? 1 :
                                                    month <= 6 ? 2 :
                                                    month <= 9 ? 3 : 4;