export const pingPong = (startNumber: number, endNumber: number): string => {
    let result: string = "";
  
    for (let i = startNumber; i <= endNumber; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += "PingPong ";
        } else if (i % 3 === 0) {
            result += "Ping ";
        } else if (i % 5 === 0) {
            result += "Pong ";
        } else {
            result += `${i} `;
        }
    }
  
    return result.trim();
};