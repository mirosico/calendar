import React from 'react';
import { Event } from './Event';

interface EventListProps {
    events: any[];
}

export const EventList: React.FC<EventListProps> = ({ events }) => {
    return (
        <>
            {events.map((event, index) => (
                <Event key={event.id} index={index} event={event} />
            ))}
        </>
    );
};
