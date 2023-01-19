import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Day, weekDays, Event } from '../../constants';
import { StyledCalendarBody } from './styles';
import { Cell } from '../cell/Cell';
import { getDaysByWeekArray, isWeekend } from '../../utils';

interface CalendarProps {
    filteredDays: Day[];
    onDragDay: (result: any) => void;
    addEvent: (event: Event) => void;
}

export const CalendarBody: React.FC<CalendarProps> = ({ filteredDays, onDragDay, addEvent }) => {
    const filteredDaysByWeeks = getDaysByWeekArray(filteredDays);

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
                    {filteredDaysByWeeks.map((week, index) => (
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
