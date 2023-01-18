import { useState } from 'react';
import { usePublicHolidays } from './usePublicHolidays';
import { useEvents } from './useEvents';
import { useDays } from './useDays';
import { useFilters } from './useFilters';

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
