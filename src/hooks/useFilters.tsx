import { useCallback, useEffect, useMemo, useState } from 'react';
import { CheckBox, Day, Event } from '../constants';

interface FilterProps {
    days: Day[][] | undefined;
}

export const useFilters = ({ days }: FilterProps) => {
    const [filter, setFilter] = useState('');
    const [checkBoxes, setCheckBoxes] = useState<CheckBox[]>([]);

    useEffect(() => {
        const checkBoxesArray = generateCheckBoxes(days);
        setCheckBoxes(checkBoxesArray);
    }, [days]);

    const generateCheckBoxes = useCallback(
        (days: Day[][] | undefined): CheckBox[] => {
            const checkBoxesArray: CheckBox[] = [];
            if (days) {
                days.forEach((week) => {
                    week.forEach((day) => {
                        day.events.forEach((event) => {
                            if (event.labels) {
                                event.labels.forEach((label) => {
                                    if (!checkBoxesArray.find((checkBox) => checkBox.id === label.id)) {
                                        checkBoxesArray.push({
                                            id: label.id,
                                            name: label.name,
                                            color: label.color,
                                            checked: true,
                                        });
                                    }
                                });
                            }
                        });
                    });
                });
            }
            return checkBoxesArray;
        },
        [days],
    );
    const filterEventByLabels = (event: Event) => {
        if (!event.labels?.length) {
            return true;
        }
        return Boolean(event.labels.find((label) => checkBoxes.find((checkBox) => checkBox.id === label.id)?.checked));
    };

    const filterEventByTitle = (event: Event) => {
        return event.title.toLowerCase().includes(filter.toLowerCase());
    };

    const filteredDays = useMemo(() => {
        if (!days) {
            return [];
        }
        return days.map((week) =>
            week.map((day) => {
                if (!day.events && !day.publicHolidays) {
                    return day;
                }
                const filteredEvents = day.events.filter(filterEventByLabels).filter(filterEventByTitle);
                const filteredHolidays = day.publicHolidays.filter(filterEventByTitle);
                return { ...day, events: filteredEvents, publicHolidays: filteredHolidays };
            }),
        );
    }, [days, filter, checkBoxes]);

    return { filter, setFilter, checkBoxes, setCheckBoxes, filteredDays };
};
