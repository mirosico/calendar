import React from 'react';
import { CalendarHeader } from './CalendarHeader';
import { CalendarBody } from './CalendarBody';
import { SideBar } from '../sidebar/SideBar';
import { StyledCalendar } from './styles';
import { useCalendar } from '../../hooks';

export const Calendar = () => {
    const { filter, addEvent, onDragDay, ...calendarControls } = useCalendar();

    return (
        <StyledCalendar>
            <CalendarHeader {...calendarControls} />
            <div className="calendar-body">
                <SideBar filter={filter} />
                <CalendarBody filteredDays={filter.filteredDays} onDragDay={onDragDay} addEvent={addEvent} />
            </div>
        </StyledCalendar>
    );
};
