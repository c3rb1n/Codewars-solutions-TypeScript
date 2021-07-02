export const timeCorrect = (timestring: string | null): string | null => {
  if (!timestring) {
    return timestring;
  } else if (!/^\d\d:\d\d:\d\d$/.test(timestring)) {
    return null;
  } else {
    const timestringArr: string[] = timestring.split(":");
    let hours: number | string = +timestringArr[0];
    let min: number | string = +timestringArr[1];
    let sec: number | string = +timestringArr[2];
    
     if (sec >= 60) {
      min++;
      sec -= 60;
    }
    
    if (min >= 60) {
      hours++;
      min -= 60;
    }
    
    hours = hours >= 72 ? hours - 72 : 
            hours >= 48 ? hours - 48 : 
            hours >= 24 ? hours - 24 : hours;
    
    hours = hours < 10 ? `0${hours}` : hours;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;
    
    return `${hours}:${min}:${sec}`;
  }
}