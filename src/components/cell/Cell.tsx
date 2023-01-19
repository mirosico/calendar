import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Button from '@mui/material/Button';
import { CellBody, CellHeader, StyledCell } from './styles';
import { HolidayList } from '../holidays/HolidayList';
import { EventList, CreateEvent } from '../events';

import { Day, Event } from '../../constants';
import { useModal } from '../../context/modal-context';

interface CellProps {
    day: Day;
    addEvent: (event: Event) => void;
}

export const Cell: React.FC<CellProps> = ({ day, addEvent }) => {
    const { setModal } = useModal();

    const dayId = String(day.day);

    const handleAddEvent = () => {
        setModal(<CreateEvent day={day} addEvent={addEvent} />);
    };

    return (
        <Droppable droppableId={dayId} key={dayId}>
            {(provided, snapshot) => (
                <StyledCell>
                    <CellHeader>
                        <Button
                            onClick={handleAddEvent}
                            title="Create event"
                            variant="text"
                            color="secondary"
                            size="small"
                        >
                            +
                        </Button>
                        <span>{day.day}</span>
                    </CellHeader>
                    <CellBody {...provided.droppableProps} ref={provided.innerRef}>
                        <HolidayList holidays={day.publicHolidays} />
                        <EventList events={day.events} />
                        {provided.placeholder}
                    </CellBody>
                </StyledCell>
            )}
        </Droppable>
    );
};
