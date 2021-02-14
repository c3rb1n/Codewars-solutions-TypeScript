export const save = (sizes: number[], hd: number): number => {
    let result: number;
    let totalFileSize: number = 0;
  
    for (let i: number = 0; i < sizes.length; i++) {
        totalFileSize += sizes[i];
      
        if (totalFileSize > hd) {
            result = i;
            return result;
        }
    }
  
    return sizes.length;
};