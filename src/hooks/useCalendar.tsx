import { useState } from 'react';
import { useEvents, useDays, useFilters, usePublicHolidays } from './index';

export const useCalendar = () => {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());

    const publicHolidays = usePublicHolidays(year, month);

    const { events, addEvent, exportEventsToJSON, importEventsFromJSON } = useEvents();

    const { days, onDragDay } = useDays(month, year, publicHolidays, events);

    const filter = useFilters({ days });

    return {
        month,
        year,
        setMonth,
        setYear,
        filter,
        addEvent,
        onDragDay,
        exportEventsToJSON,
        importEventsFromJSON,
    };
};
