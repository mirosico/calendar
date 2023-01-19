import React from 'react';
import Chip from '@mui/material/Chip';
import { StyledEvent } from '../common';
import { EventInfo } from '../events';

import { useModal } from '../../context/modal-context';
import { Event } from '../../constants';

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
