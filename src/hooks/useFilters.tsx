import { useCallback, useEffect, useMemo, useState } from 'react';
import { CheckBox, Day, Event } from '../constants';

interface FilterProps {
    days: Day[] | undefined;
}

export const useFilters = ({ days }: FilterProps) => {
    const [filter, setFilter] = useState('');
    const [checkBoxes, setCheckBoxes] = useState<CheckBox[]>([]);

    useEffect(() => {
        const checkBoxesArray = generateCheckBoxes(days);
        setCheckBoxes(checkBoxesArray);
    }, [days]);

    const findCheckBox = (label: string, checkBoxesArray: CheckBox[]) =>
        checkBoxesArray.find((checkBox) => checkBox.name === label);

    const generateCheckBoxes = useCallback(
        (days: Day[] | undefined): CheckBox[] => {
            if (!days) return [];
            const checkBoxesArray: CheckBox[] = [];
            const allEvents = days.map((day) => day.events).flat();
            const allLabels = allEvents.map((event) => event.labels).flat();
            allLabels.forEach((label) => {
                if (label && !findCheckBox(label.name, checkBoxesArray)) {
                    checkBoxesArray.push({ ...label, checked: true });
                }
            });
            return checkBoxesArray.sort((a, b) => a.name.localeCompare(b.name));
        },
        [days],
    );
    const filterEventByLabels = (event: Event) => {
        if (!event.labels?.length) {
            return true;
        }
        return Boolean(event.labels.find((label) => findCheckBox(label.name, checkBoxes)?.checked));
    };

    const filterEventByTitle = (event: Event) => {
        return event.title.toLowerCase().includes(filter.toLowerCase());
    };

    const filteredDays = useMemo(() => {
        if (!days) {
            return [];
        }
        return days.map((day) => {
            if (!day.events && !day.publicHolidays) {
                return day;
            }
            const filteredEvents = day.events.filter(filterEventByLabels).filter(filterEventByTitle);
            const filteredHolidays = day.publicHolidays.filter(filterEventByTitle);
            return { ...day, events: filteredEvents, publicHolidays: filteredHolidays };
        });
    }, [days, filter, checkBoxes]);

    return { filter, setFilter, checkBoxes, setCheckBoxes, filteredDays };
};
