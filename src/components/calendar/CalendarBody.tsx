import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Day, weekDays, Event } from '../../constants';
import { StyledCalendarBody } from './styles';
import { Cell } from '../cell/Cell';

interface CalendarProps {
    filteredDays: Day[][]; // filteredDays is a 2D array of days
    onDragDay: (result: any) => void;
    addEvent: (event: Event) => void;
}

export const CalendarBody: React.FC<CalendarProps> = ({ filteredDays, onDragDay, addEvent }) => {
    const isWeekend = (dayIndex: number) => {
        return dayIndex === 6 || dayIndex === 5;
    };

    return (
        <StyledCalendarBody id="calendar">
            <thead>
                <tr>
                    {weekDays.map((day, index) => (
                        <th className={isWeekend(index) ? 'weekend' : ''} key={day}>
                            {day}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <DragDropContext onDragEnd={onDragDay}>
                    {filteredDays.map((week, index) => (
                        <tr key={index}>
                            {week.map((day) => {
                                if (!day.day) {
                                    return <td key={day.weekDayIndex}>&nbsp;</td>;
                                }
                                return (
                                    <td className={day.isWeekend ? 'weekend' : ''} key={day.weekDayIndex}>
                                        <Cell day={day} key={day.day} addEvent={addEvent} />
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </DragDropContext>
            </tbody>
        </StyledCalendarBody>
    );
};
