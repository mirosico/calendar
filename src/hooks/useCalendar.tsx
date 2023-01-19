import { useState } from 'react';
import { useEvents, useDays, useFilters, usePublicHolidays } from './index';
import { MonthYear } from '../constants';

export const useCalendar = () => {
    const [currentMonthYear, setCurrentMonthYear] = useState<MonthYear>({
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
    });

    const publicHolidays = usePublicHolidays(currentMonthYear);

    const { events, addEvent, exportEventsToJSON, importEventsFromJSON } = useEvents();

    const { days, onDragDay } = useDays({ currentMonthYear, publicHolidays, events });

    const filter = useFilters({ days });

    return {
        currentMonthYear,
        setCurrentMonthYear,
        filter,
        addEvent,
        onDragDay,
        exportEventsToJSON,
        importEventsFromJSON,
    };
};
