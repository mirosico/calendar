import { Day, PublicHoliday, weekDays, Event } from '../constants/';

const getDayStartWithMonday = (day: number): number => {
    if (day === 0) {
        return 6;
    }
    return day - 1;
};

const getMonthDays = (month: number, year: number): (number | null)[] => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayIndex = getDayStartWithMonday(firstDay.getDay());
    const lastDayIndex = getDayStartWithMonday(lastDay.getDay());
    const firstDayDate = firstDay.getDate();
    const lastDayDate = lastDay.getDate();
    const days: (number | null)[] = [];
    for (let i = 0; i < firstDayIndex; i++) {
        days.push(null);
    }
    for (let i = firstDayDate; i <= lastDayDate; i++) {
        days.push(i);
    }
    for (let i = 0; i < 6 - lastDayIndex; i++) {
        days.push(null);
    }
    return days;
};

const getDaysByWeekArray = (days: Day[]): Day[][] => {
    const daysByWeekArray: Day[][] = [];
    let week: Day[] = [];
    days.forEach((day) => {
        if (day.weekDayIndex === 0 && week.length > 0) {
            daysByWeekArray.push(week);
            week = [];
        }
        week.push(day);
    });
    daysByWeekArray.push(week);
    return daysByWeekArray;
};

const compareTwoDates = (date1: Date, date2: Date) => {
    return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
    );
};

const isWeekend = (dayIndex: number) => {
    return dayIndex === 6 || dayIndex === 5;
};

const getDays = (month: number, year: number, publicHolidays: PublicHoliday[], events: Event[]): Day[] => {
    const monthDays = getMonthDays(month, year);

    return monthDays.map((day, index) => {
        const weekDayIndex = index % 7;
        const date = day ? new Date(year, month, day) : new Date(1970, 0, 1);
        const eventsForDay = events.filter((event) => compareTwoDates(event.date, date));
        const weekDay = weekDays[weekDayIndex];
        const isToday = compareTwoDates(new Date(), date);
        const publicHolidaysForDay = publicHolidays
            .filter((publicHoliday) => compareTwoDates(new Date(publicHoliday.date), date))
            .map((publicHoliday) => ({
                id: publicHoliday.name,
                title: publicHoliday.name,
                description: publicHoliday.localName || publicHoliday.name,
                date: new Date(publicHoliday.date),
                labels: [],
            }));
        return {
            day,
            date,
            weekDay,
            weekDayIndex,
            isToday,
            isWeekend: isWeekend(weekDayIndex),
            events: eventsForDay,
            publicHolidays: publicHolidaysForDay,
        };
    });
};

const generateEventUid = (title: string, date: Date) => {
    return `${title}-${date.getTime()}`;
};

const getMonthName = (month: number) => {
    return new Date(0, month).toLocaleString('en-US', { month: 'long' });
};

export { getMonthDays, getDaysByWeekArray, getDays, generateEventUid, getMonthName, isWeekend };
