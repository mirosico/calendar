import { useEffect, useState } from 'react';
import { Day, PublicHoliday, Event } from '../constants';
import { getDays, getDaysByWeekArray } from '../utils';

export const useDays = (month: number, year: number, publicHolidays: PublicHoliday[], events: Event[]) => {
    const [days, setDays] = useState<Day[][]>([]);

    useEffect(() => {
        const daysArray: Day[] = getDays(month, year, publicHolidays, events);
        const daysByWeeks = getDaysByWeekArray(daysArray);
        setDays(daysByWeeks);
    }, [month, year, publicHolidays, events]);

    const onDragEnd = (result: any) => {
        const { destination, source, draggableId, type } = result;
        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }
        if (destination.droppableId !== source.droppableId) {
            const sourceDay = days
                .find((week) => week.find((day) => day.day === Number(source.droppableId)))
                ?.find((day) => day.day === Number(source.droppableId));
            const destinationDay = days
                .find((week) => week.find((day) => day.day === Number(destination.droppableId)))
                ?.find((day) => day.day === Number(destination.droppableId));

            if (sourceDay && destinationDay) {
                const eventToMove = sourceDay.events.find((event) => event.id === draggableId);
                if (eventToMove) {
                    const newSourceDayEvents = sourceDay.events.filter((event) => event.id !== draggableId);
                    const newSourceDay = { ...sourceDay, events: newSourceDayEvents };
                    const newDestinationDayEvents = [...destinationDay.events, eventToMove];
                    const newDestinationDay = { ...destinationDay, events: newDestinationDayEvents };
                    const newDaysState = days.map((week) =>
                        week.map((day) => {
                            if (day.day === newSourceDay.day) {
                                return newSourceDay;
                            }
                            if (day.day === newDestinationDay.day) {
                                return newDestinationDay;
                            }
                            return day;
                        }),
                    );
                    setDays(newDaysState);
                }
            }
        } else if (destination.index !== source.index) {
            const day = days
                .find((week) => week.find((day) => day.day === Number(source.droppableId)))
                ?.find((day) => day.day === Number(source.droppableId));
            if (day) {
                const newEvents = Array.from(day.events);
                const [removed] = newEvents.splice(source.index, 1);
                newEvents.splice(destination.index, 0, removed);
                const newDay = { ...day, events: newEvents };
                const newDaysState = days.map((week) =>
                    week.map((day) => {
                        if (day.day === newDay.day) {
                            return newDay;
                        }
                        return day;
                    }),
                );
                setDays(newDaysState);
            }
        }
    };

    return { days, setDays, onDragDay: onDragEnd };
};
