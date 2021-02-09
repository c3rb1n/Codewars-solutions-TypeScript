export const descendingOrder = 
    (n: number | null | undefined): number | null | undefined => 
        n ? parseInt(n.toString().split("").sort().reverse().join("")) : n;