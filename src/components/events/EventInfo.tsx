import React from 'react';
import { StyledEventInfo } from './styles';
import { LabelList } from '../labels';

import { Event as IEvent } from '../../constants';

interface EventInfoProps {
    event: IEvent;
}

export const EventInfo: React.FC<EventInfoProps> = ({ event }) => {
    return (
        <StyledEventInfo>
            <h2>{event.title}</h2>
            <p>
                Description: <b>{event.description}</b>
            </p>
            <p>
                When: <b>{event.date.toLocaleDateString()}</b>
            </p>
            <div className="labels-container">{event.labels && <LabelList labels={event.labels || []} />}</div>
        </StyledEventInfo>
    );
};
