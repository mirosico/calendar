import React from 'react';
import { CalendarHeader } from './CalendarHeader';
import { CalendarBody } from './CalendarBody';
import { SideBar } from '../sidebar/SideBar';
import { StyledCalendar } from './styles';
import { useCalendar } from '../../hooks';

export const Calendar = () => {
    const { month, year, setMonth, setYear, filter, addEvent, onDragDay, exportEventsToJSON, importEventsFromJSON } =
        useCalendar();

    return (
        <StyledCalendar>
            <CalendarHeader
                month={month}
                year={year}
                setMonth={setMonth}
                setYear={setYear}
                exportEventsToJSON={exportEventsToJSON}
                importEventsFromJSON={importEventsFromJSON}
            />
            <div className="calendar-body">
                <SideBar filter={filter} />
                <CalendarBody filteredDays={filter.filteredDays} onDragDay={onDragDay} addEvent={addEvent} />
            </div>
        </StyledCalendar>
    );
};
