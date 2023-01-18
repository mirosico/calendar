import React from 'react';
import Chip from '@mui/material/Chip';
import { Event } from '../../constants';
import { StyledEvent } from '../common';
import { EventInfo } from '../events/EventInfo';
import { useModal } from '../../context/modal-context';

interface HolidayProps {
    holiday: Event;
}

export const Holiday: React.FC<HolidayProps> = ({ holiday }) => {
    const { setModal } = useModal();

    const handleHolidayClick = () => {
        setModal(<EventInfo event={holiday} />);
    };

    return (
        <StyledEvent>
            <Chip className="event" onClick={handleHolidayClick} label={holiday.title} color="primary" />
        </StyledEvent>
    );
};
