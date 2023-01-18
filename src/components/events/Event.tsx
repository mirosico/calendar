import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Chip from '@mui/material/Chip';
import { Event as IEvent } from '../../constants';
import { useModal } from '../../context/modal-context';
import { EventInfo } from './EventInfo';
import { StyledEvent } from '../common';

interface EventProps {
    index: number;
    event: IEvent;
}

export const Event: React.FC<EventProps> = ({ index, event }) => {
    const { setModal } = useModal();

    const handleEventClick = () => {
        setModal(<EventInfo event={event} />);
    };

    return (
        <Draggable draggableId={event.id} index={index}>
            {(provided) => (
                <StyledEvent>
                    <Chip
                        className="event"
                        ref={provided.innerRef}
                        color="warning"
                        onClick={handleEventClick}
                        label={event.title}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    />
                </StyledEvent>
            )}
        </Draggable>
    );
};
