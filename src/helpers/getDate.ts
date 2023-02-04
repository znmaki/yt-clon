import * as dayjs from 'dayjs'

export const getDiffDate = (publishTime: string) => {
    let dateToday = new Date();

    const date1 = dayjs(dateToday)
    const date2 = dayjs(publishTime)

    let timeText = ''

    if (date1.diff(date2, "day") <= 30) {
        return timeText = `hace ${date1.diff(date2, "day")} dias`
    }
    else if (date1.diff(date2, "day") >= 30 && date1.diff(date2, "day") <= 365) {
        return timeText = `hace ${date1.diff(date2, "month")} meses`
    }
    else if (date1.diff(date2, "day") >= 365 && date1.diff(date2, "day") <= 730) {
        return timeText = `hace ${date1.diff(date2, "year")} año`
    }
    else if (date1.diff(date2, "day") >= 365) {
        return timeText = `hace ${date1.diff(date2, "year")} años`
    }
}