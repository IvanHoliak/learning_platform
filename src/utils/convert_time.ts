type ConvertTime = (time: number) => Record<string, string>;

export const convertTime: ConvertTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time % 3600 / 60);
    const seconds = Math.floor(time % 3600 % 60);

    const hoursText = hours > 0 ? `${hours}hr` : "";
    const minutesText = minutes > 0 ? `${minutes} min` : "";
    const secondsText = seconds > 0 ? `${seconds} sec` : "";
    
    return {
        hours: hoursText,
        withMinutes: `${hoursText} ${minutesText}`,
        withSeconds: `${hoursText} ${minutesText} ${secondsText}` 
    };
};